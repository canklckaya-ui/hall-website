# Tool Mappings: Claude Design → Claude Code

This file documents how Claude Design tools map to Claude Code equivalents in this skill.

---

## Overview

Claude Design (from Claude.ai) has specialized tools for the design workflow that aren't available in Claude Code. This document provides equivalent approaches using Claude Code's available tools.

---

## File Operations

### write_file

**Claude Design:**
```javascript
write_file({
  path: "landing-page.html",
  content: "<html>...</html>",
  asset: "hero-section",
  subtitle: "Primary blue variant"
})
```

**Claude Code:**
```javascript
Write({
  file_path: "landing-page.html",
  content: "<html>...</html>"
})
```

**Notes:**
- No `asset` registry in Claude Code
- No subtitle/variant tracking
- Use descriptive filenames for version tracking: `landing-page-v1.html`, `landing-page-v2.html`

---

### read_file

**Claude Design:**
```javascript
read_file({ path: "styles.css" })
```

**Claude Code:**
```javascript
Read({ file_path: "styles.css" })
```

**Notes:** Direct mapping, works the same way.

---

### list_files

**Claude Design:**
```javascript
list_files({ path: "components", depth: 2 })
```

**Claude Code:**
```javascript
Glob({ pattern: "components/**/*.jsx" })
// or
Bash({ command: "ls -la components/" })
```

**Notes:** Use `Glob` for pattern matching, `Bash` for directory listings.

---

### grep

**Claude Design:**
```javascript
grep({ pattern: "color.*primary", path: "src/" })
```

**Claude Code:**
```javascript
Grep({ pattern: "color.*primary", path: "src/" })
```

**Notes:** Direct mapping, works the same way.

---

### str_replace_edit

**Claude Design:**
```javascript
str_replace_edit({
  path: "index.html",
  old_string: "<h1>Old Title</h1>",
  new_string: "<h1>New Title</h1>"
})
```

**Claude Code:**
```javascript
Edit({
  file_path: "index.html",
  old_string: "<h1>Old Title</h1>",
  new_string: "<h1>New Title</h1>"
})
```

**Notes:** Direct mapping, same behavior.

---

### copy_files

**Claude Design:**
```javascript
copy_files({
  files: [
    { src: "template.html", dest: "page.html" }
  ]
})
```

**Claude Code:**
```javascript
Bash({ command: "cp template.html page.html" })
```

**Notes:** Use bash `cp` command. For multiple files, use `cp -r` for directories.

---

### delete_file

**Claude Design:**
```javascript
delete_file({ paths: ["old-page.html", "temp/"] })
```

**Claude Code:**
```javascript
Bash({ command: "rm -f old-page.html && rm -rf temp/" })
```

**Notes:** Use bash `rm` command. Be careful with `-rf` flag.

---

## Preview & Verification

### show_html

**Claude Design:**
```javascript
show_html({ path: "prototype.html" })
```

**Claude Code:**
```javascript
Bash({ command: "open prototype.html" })
```

**Notes:**
- Opens file in default browser (macOS)
- For Linux: `xdg-open prototype.html`
- For Windows: `start prototype.html`

---

### show_to_user

**Claude Design:**
```javascript
show_to_user({ path: "landing-page.html" })
```

**Claude Code:**
```javascript
Bash({ command: "open landing-page.html" })
```

**Notes:** Same as `show_html` — opens in browser.

---

### done

**Claude Design:**
```javascript
done({ path: "final-design.html" })
// Returns console errors automatically
```

**Claude Code:**
```javascript
// Step 1: Open in browser
Bash({ command: "open final-design.html" })

// Step 2: Manually check DevTools console
// Instruct user: "Please check the browser console (Cmd+Option+J) for errors"

// Step 3: If errors reported, use Edit to fix and repeat
```

**Notes:**
- No automatic console error checking
- Manual verification workflow
- See `verification-checklist.md` for full process

---

### fork_verifier_agent

**Claude Design:**
```javascript
fork_verifier_agent()
// Spawns sub-agent that checks console, screenshots, layout
```

**Claude Code:**
```markdown
Manual verification workflow:

1. Open file in browser: `open design.html`
2. Check browser console (Cmd+Option+J on Mac, F12 on Windows)
3. Verify no errors or warnings
4. Test responsive behavior (resize window, use device mode)
5. Check interactive states (hover, focus, click)
6. Verify text doesn't overflow
7. Test keyboard navigation
8. Check accessibility (VoiceOver, contrast)
9. Walk through full verification checklist

See references/verification-checklist.md for complete list.
```

**Notes:**
- No automated verification in Claude Code
- Use comprehensive checklist instead
- More manual but equally thorough

---

### eval_js_user_view

**Claude Design:**
```javascript
eval_js_user_view({
  code: "document.querySelector('.slide').textContent"
})
```

**Claude Code:**
```markdown
Instruct user to:

1. Open DevTools console (Cmd+Option+J)
2. Paste and run: `document.querySelector('.slide').textContent`
3. Report back the result
```

**Notes:** Requires manual user interaction.

---

## Questions

### questions_v2

**Claude Design:**
```javascript
questions_v2({
  title: "Quick questions about the landing page",
  questions: [
    {
      id: "target_audience",
      kind: "text-options",
      title: "Who is the target audience?",
      options: ["Developers", "Designers", "Product Managers", "Other"]
    },
    {
      id: "color_preference",
      kind: "svg-options",
      title: "Which color palette?",
      options: ["<svg>...</svg>", "<svg>...</svg>"]
    },
    {
      id: "font_size",
      kind: "slider",
      title: "Base font size?",
      min: 14,
      max: 20,
      default: 16
    }
  ]
})
```

**Claude Code:**
```javascript
AskUserQuestion({
  questions: [
    {
      question: "Who is the target audience?",
      header: "Audience",
      multiSelect: false,
      options: [
        { label: "Developers", description: "Technical users building products" },
        { label: "Designers", description: "Visual designers and design engineers" },
        { label: "Product Managers", description: "PMs and stakeholders" },
        { label: "Other", description: "Different audience" }
      ]
    },
    {
      question: "Which color palette do you prefer?",
      header: "Colors",
      multiSelect: false,
      options: [
        { 
          label: "Vibrant Blue", 
          description: "Modern, trustworthy, tech-forward",
          preview: "Primary: #3B82F6\nSecondary: #10B981\nAccent: #F59E0B"
        },
        { 
          label: "Elegant Purple", 
          description: "Creative, premium, distinctive",
          preview: "Primary: #8B5CF6\nSecondary: #EC4899\nAccent: #F59E0B"
        }
      ]
    }
  ]
})
```

**Notes:**
- `AskUserQuestion` has different format but similar capabilities
- No `svg-options` kind — use `preview` field with text/markdown instead
- No `slider` kind — use text options with numeric labels or freeform input
- `multiSelect` replaces single/multi distinction

---

## Starter Components

### copy_starter_component

**Claude Design:**
```javascript
copy_starter_component({ kind: "deck_stage.js" })
copy_starter_component({ kind: "ios_frame.jsx" })
copy_starter_component({ kind: "animations.jsx" })
copy_starter_component({ kind: "design_canvas.jsx" })
```

**Claude Code:**
```markdown
Copy templates from references/starter-components.md:

1. Read the full template code
2. Copy into your HTML file
3. Customize as needed

Available templates:
- Responsive Slide Engine (deck_stage equivalent)
- iPhone Frame (React component)
- Android Frame (React component)
- Browser Frame (React component)
- macOS Window Frame (React component)
- Animation Timeline Engine (Stage, Sprite, Easing, interpolate)
- Design Canvas (multi-option comparison grid)
- Tweaks Panel (live parameter adjustment)
- Dark Mode Toggle (with localStorage persistence)
```

**Notes:**
- Templates are in markdown documentation, not callable tools
- Copy full code blocks into your files
- All templates are ~50-150 lines, complete and ready to use

---

## Export & Bundling

### gen_pptx

**Claude Design:**
```javascript
gen_pptx({
  width: 1920,
  height: 1080,
  slides: [
    { selector: ".slide:nth-child(1)", showJs: "goToSlide(0)" },
    { selector: ".slide:nth-child(2)", showJs: "goToSlide(1)" }
  ],
  mode: "editable"
})
```

**Claude Code:**
```markdown
Script-based alternative:

1. Install dependencies:
   npm install puppeteer pptxgenjs

2. Create export script (export-pptx.js):

const puppeteer = require('puppeteer');
const PptxGenJS = require('pptxgenjs');

async function exportToPPTX(htmlFile, outputFile) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`file://${process.cwd()}/${htmlFile}`);
  
  const pptx = new PptxGenJS();
  const slides = await page.$$('.slide');
  
  for (let i = 0; i < slides.length; i++) {
    await page.evaluate((idx) => {
      window.goToSlide(idx);
    }, i);
    
    const screenshot = await page.screenshot({ 
      type: 'png',
      fullPage: false
    });
    
    const slide = pptx.addSlide();
    slide.addImage({
      data: screenshot.toString('base64'),
      x: 0, y: 0, w: '100%', h: '100%'
    });
  }
  
  await pptx.writeFile({ fileName: outputFile });
  await browser.close();
}

exportToPPTX('deck.html', 'output.pptx');

3. Run: node export-pptx.js
```

**Notes:**
- Requires Node.js and dependencies
- Screenshots mode only (not editable text)
- Manual setup but works reliably

---

### super_inline_html

**Claude Design:**
```javascript
super_inline_html({
  input_path: "prototype.html",
  output_path: "prototype-standalone.html"
})
```

**Claude Code:**
```markdown
Manual bundling with single-file CLI:

1. Install single-file:
   npm install -g single-file-cli

2. Bundle HTML:
   single-file prototype.html prototype-standalone.html

3. Alternatively, use Parcel:
   npx parcel build prototype.html --no-source-maps

4. Or manual approach:
   - Inline all CSS (copy <style> tags)
   - Inline all JS (copy <script> tags)
   - Convert images to base64 data URLs
   - Inline fonts using base64
```

**Notes:**
- `single-file` is the best tool for this
- Produces truly standalone HTML files
- Works offline once bundled

---

### present_fs_item_for_download

**Claude Design:**
```javascript
present_fs_item_for_download({ path: "exports/" })
```

**Claude Code:**
```javascript
Bash({ 
  command: "zip -r exports.zip exports/ && open ." 
})
```

**Notes:**
- Creates zip file
- Opens Finder/Explorer to show the zip
- User can then share/download manually

---

## Images & Media

### view_image

**Claude Design:**
```javascript
view_image({ path: "mockup.png" })
```

**Claude Code:**
```javascript
Read({ file_path: "mockup.png" })
```

**Notes:** Claude Code can view images natively via `Read` tool.

---

### image_metadata

**Claude Design:**
```javascript
image_metadata({ path: "hero-image.png" })
// Returns: { width: 1920, height: 1080, format: "PNG", hasAlpha: true }
```

**Claude Code:**
```javascript
Bash({ 
  command: "sips -g all hero-image.png" 
})
// Returns metadata via macOS sips command
```

**Notes:**
- macOS only (`sips` command)
- For cross-platform: `npm install sharp`, then use Node script
- For dimensions only: `file hero-image.png`

---

## Screenshots

### save_screenshot

**Claude Design:**
```javascript
save_screenshot({
  path: "deck.html",
  save_path: "screenshots/slide-01.png",
  steps: [
    { code: "goToSlide(0)", delay: 500 }
  ]
})
```

**Claude Code:**
```javascript
Bash({ 
  command: "screencapture -w screenshot.png" 
})
```

**Notes:**
- macOS `screencapture` command
- `-w` flag captures specific window
- User must manually trigger for each state
- For automated screenshots, use Puppeteer script

---

### multi_screenshot

**Claude Design:**
```javascript
multi_screenshot({
  path: "deck.html",
  steps: [
    { code: "goToSlide(0)", delay: 200 },
    { code: "goToSlide(1)", delay: 200 },
    { code: "goToSlide(2)", delay: 200 }
  ]
})
```

**Claude Code:**
```markdown
Puppeteer script approach:

const puppeteer = require('puppeteer');

async function captureSlides(htmlFile) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto(`file://${process.cwd()}/${htmlFile}`);
  
  const slideCount = await page.$$eval('.slide', slides => slides.length);
  
  for (let i = 0; i < slideCount; i++) {
    await page.evaluate((idx) => window.goToSlide(idx), i);
    await page.waitForTimeout(200);
    await page.screenshot({ 
      path: `screenshots/slide-${String(i+1).padStart(2, '0')}.png` 
    });
  }
  
  await browser.close();
}

captureSlides('deck.html');
```

**Notes:** Requires Node.js and Puppeteer dependency.

---

## Utilities

### sleep

**Claude Design:**
```javascript
sleep({ seconds: 2 })
```

**Claude Code:**
```javascript
Bash({ command: "sleep 2" })
```

**Notes:** Direct mapping via bash sleep command.

---

### run_script

**Claude Design:**
```javascript
run_script({
  code: `
    const files = await ls('components');
    for (const f of files) {
      const content = await readFile(f);
      log(content.length);
    }
  `
})
```

**Claude Code:**
```javascript
// For shell scripts:
Bash({ command: "for f in components/*; do wc -l $f; done" })

// For JavaScript:
Write({ 
  file_path: "script.js",
  content: `
    const fs = require('fs');
    const files = fs.readdirSync('components');
    files.forEach(f => {
      const content = fs.readFileSync(f, 'utf8');
      console.log(content.length);
    });
  `
})
Bash({ command: "node script.js" })
```

**Notes:**
- Use bash for shell operations
- Use Write + Bash for JS/Python scripts
- No sandboxed eval environment in Claude Code

---

## Not Available

These Claude Design tools have no Claude Code equivalent:

| Tool | Purpose | Alternative |
|---|---|---|
| `register_assets` | Asset review manifest | Use descriptive filenames |
| `unregister_assets` | Remove from manifest | N/A |
| `set_project_title` | Rename project | N/A (not applicable) |
| `save_as_template` | Create reusable template | Manual template creation |
| `connect_github` | GitHub integration | Use `gh` CLI directly |
| `github_*` tools | GitHub API access | Use `gh` CLI or GitHub API |
| `snip` | Context management | N/A (different system) |
| `web_search` / `web_fetch` | Web access | Available but not emphasized |

---

## Summary

Most Claude Design tools have direct or near-direct equivalents in Claude Code:

✅ **Direct mapping**: `read_file`, `grep`, `str_replace_edit`, `sleep`

🔄 **Close equivalent**: `write_file` (Write), `show_html` (Bash open), `questions_v2` (AskUserQuestion)

🛠️ **Script alternative**: `gen_pptx` (Puppeteer + pptxgenjs), `super_inline_html` (single-file CLI)

📋 **Manual workflow**: `done` (manual console check), `fork_verifier_agent` (checklist), `multi_screenshot` (Puppeteer)

❌ **Not available**: `register_assets`, `set_project_title`, GitHub tools, `snip`

The key difference is that Claude Code requires more manual steps for verification and export, but all core workflows are fully supported.
