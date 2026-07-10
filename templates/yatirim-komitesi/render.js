#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const TEMPLATE_PATH = path.join(__dirname, 'template.html');

function formatNumber(val) {
  if (val === null || val === undefined || val === '') return '—';
  if (typeof val === 'string') return val;
  const num = Number(val);
  if (isNaN(num)) return String(val);
  if (Number.isInteger(num)) {
    return num.toLocaleString('tr-TR');
  }
  return num.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 6 });
}

function parsePercent(val) {
  if (!val) return 0;
  const str = String(val).replace('%', '').replace(',', '.').trim();
  return parseFloat(str) || 0;
}

function formatSeviye(seviye) {
  const map = { en_yuksek: 'En yüksek', yuksek: 'Yüksek', orta: 'Orta', dusuk: 'Düşük' };
  return map[seviye] || seviye;
}

function resolveValue(obj, path) {
  const parts = path.replace(/\[(\d+)\]/g, '.$1').split('.');
  let current = obj;
  for (const part of parts) {
    if (current === null || current === undefined) return undefined;
    current = current[part];
  }
  return current;
}

function renderTemplate(template, data) {
  let html = template;

  html = processBlocks(html, data);
  html = processValues(html, data);

  return html;
}

function processBlocks(html, data) {
  const eachRegex = /\{\{#each\s+([\w.[\]]+)\}\}([\s\S]*?)\{\{\/each\}\}/g;

  html = html.replace(eachRegex, (match, arrayPath, blockContent) => {
    const arr = resolveValue(data, arrayPath);
    if (!Array.isArray(arr)) return '';

    return arr.map((item, index) => {
      let itemHtml = blockContent;
      const itemData = { ...data, this: item, '@index': index };
      itemHtml = processBlocks(itemHtml, itemData);
      itemHtml = processValues(itemHtml, itemData);
      return itemHtml;
    }).join('');
  });

  const ifRegex = /\{\{#if\s+(.+?)\}\}([\s\S]*?)\{\{\/if\}\}/g;
  html = html.replace(ifRegex, (match, condition, blockContent) => {
    const eqMatch = condition.match(/\(eq\s+([\w.]+)\s+"(.+?)"\)/);
    if (eqMatch) {
      const val = resolveValue(data, eqMatch[1]);
      if (val === eqMatch[2]) {
        return processValues(blockContent, data);
      }
      return '';
    }
    const val = resolveValue(data, condition);
    if (val) return processValues(blockContent, data);
    return '';
  });

  return html;
}

function processValues(html, data) {
  html = html.replace(/\{\{formatNumber\s+([\w.[\]]+)\}\}/g, (match, valPath) => {
    const val = resolveValue(data, valPath);
    return formatNumber(val);
  });

  html = html.replace(/\{\{parsePercent\s+([\w.[\]]+)\}\}/g, (match, valPath) => {
    const val = resolveValue(data, valPath);
    return parsePercent(val);
  });

  html = html.replace(/\{\{formatSeviye\s+([\w.[\]]+)\}\}/g, (match, valPath) => {
    const val = resolveValue(data, valPath);
    return formatSeviye(val);
  });

  html = html.replace(/\{\{([\w.[\]]+)\}\}/g, (match, valPath) => {
    const val = resolveValue(data, valPath);
    if (val === null || val === undefined) return '';
    return String(val);
  });

  return html;
}

async function renderToHTML(dataPath, outputPath) {
  const template = fs.readFileSync(TEMPLATE_PATH, 'utf-8');
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
  const html = renderTemplate(template, data);

  const outPath = outputPath || dataPath.replace('.json', '.html');
  fs.writeFileSync(outPath, html, 'utf-8');
  console.log(`HTML: ${outPath}`);
  return outPath;
}

async function renderToPDF(dataPath, outputPath) {
  const htmlPath = await renderToHTML(dataPath, dataPath.replace('.json', '-temp.html'));
  const pdfPath = outputPath || dataPath.replace('.json', '.pdf');

  try {
    const { chromium } = require('playwright');
    const browser = await chromium.launch({
      executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome'
    });
    const page = await browser.newPage();
    await page.goto('file://' + path.resolve(htmlPath), { waitUntil: 'networkidle' });
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      margin: { top: '20mm', bottom: '25mm', left: '18mm', right: '18mm' }
    });
    await browser.close();
    fs.unlinkSync(htmlPath);
    console.log(`PDF: ${pdfPath}`);
  } catch (e) {
    console.error('PDF render failed. Install playwright: npm install playwright');
    console.error(e.message);
  }
  return pdfPath;
}

function main() {
  const args = process.argv.slice(2);
  if (args.length < 1) {
    console.log('Usage: node render.js <data.json> [--format html|pdf] [--output path]');
    console.log('');
    console.log('Examples:');
    console.log('  node render.js sample-data.json');
    console.log('  node render.js data.json --format pdf --output report.pdf');
    process.exit(1);
  }

  const dataPath = path.resolve(args[0]);
  let format = 'html';
  let output = null;

  for (let i = 1; i < args.length; i++) {
    if (args[i] === '--format' && args[i + 1]) { format = args[i + 1]; i++; }
    if (args[i] === '--output' && args[i + 1]) { output = args[i + 1]; i++; }
  }

  if (format === 'pdf') {
    renderToPDF(dataPath, output);
  } else {
    renderToHTML(dataPath, output);
  }
}

module.exports = { renderTemplate, renderToHTML, renderToPDF, formatNumber, parsePercent };

main();
