# Project Guidelines

## Auto-Active Skills

All 200+ skills activate automatically on relevant tasks. No confirmation needed. Use matching skill when task context fits.

## Automation Rules

These rules apply to EVERY task automatically:

### Auto-Design Pipeline
When creating any visual output (landing page, deck, prototype, poster, dashboard):
1. Use claude-design + ui-ux-pro-max for design quality
2. Apply design-system tokens and ui-styling (Tailwind/shadcn)
3. Use brand skill for identity consistency
4. Verify with playwright-skill (screenshot + visual check)

### Auto-Presentation Pipeline
When creating any presentation or slide deck:
1. Use frontend-slides (34 design systems) or slides skill for HTML slides
2. For PPTX export: use pptx skill html2pptx.js pipeline
3. For PDF export: use playwright-skill headless render
4. Never lose visual fidelity during conversion

### Auto-Prototype Pipeline
When creating wireframes or prototypes:
1. Use wireframe skill: generate 5 options (B&W + Clean + Polished)
2. Use claude-design for high-fidelity version
3. Export via playwright-skill (PDF) or pptx (PowerPoint)

### Auto-Document Pipeline
When creating office documents:
1. Excel: xlsx + excel-automation
2. Word: docx + docx-manipulation
3. PDF: pdf + playwright-skill for HTML-to-PDF
4. PowerPoint: pptx + html-to-ppt for HTML-to-PPTX
5. Conversion: md-to-office, office-to-md, batch-convert

### Auto-Copy Pipeline
When writing marketing/sales copy:
1. Use copywriting + copy-editing skills
2. Apply marketing-psychology principles
3. Use marketing-council advisors (Ogilvy, Hormozi, Godin)
4. Verify with cro skill for conversion optimization

### Auto-Export Rule
After creating ANY HTML artifact, always offer:
- PDF export (playwright-skill)
- PPTX export (pptx html2pptx.js)
- Both formats if presentation/deck

---

## Skill Catalog (All Auto-Active)

### Coding Quality (Karpathy Guidelines)
- State assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them.
- Simplicity first. No features beyond what was asked.
- Every changed line traces directly to user's request.
- Transform tasks into verifiable goals with verify steps.

### Development Workflow (Superpowers)
- **Plan first**: writing-plans before complex tasks.
- **Execute**: executing-plans step-by-step, verify each.
- **TDD**: test-driven-development, failing test first.
- **Debug**: systematic-debugging, root cause tracing.
- **Verify**: verification-before-completion always.
- **Parallel**: dispatching-parallel-agents for independent work.
- **Subagents**: subagent-driven-development when needed.
- **Git**: using-git-worktrees for isolated parallel work.
- **Review**: requesting-code-review + receiving-code-review on branches.
- **Finish**: finishing-a-development-branch before merge.
- **Brainstorm**: brainstorming with visual companion.

### UI/UX Design
- **Core**: ui-ux-pro-max on all frontend work.
- **Styling**: ui-styling for Tailwind, shadcn, responsive.
- **Design system**: design-system for tokens, components.
- **Design**: claude-design for landing pages, decks, prototypes, animations, posters.
- **Logos/Icons**: design skill for logos, icons, CIP.
- **Banners**: banner-design for headers/banners.
- **Brand**: brand for identity consistency.
- **Infographic**: infographic for data visualization.
- **Charts**: chart-designer for chart creation.
- **Diagrams**: diagram-creator for flowcharts, architecture.
- **Image**: image + image-generation for visuals.
- **Wireframe**: wireframe for UX prototypes (B&W/Clean/Polished variants).
- **Frontend slides**: frontend-slides for 34 bold design system HTML sunumlar.
- **Playwright**: playwright-skill for browser automation, screenshot, PDF export.

### Presentations & Slides
- **PPTX**: pptx + pptx-manipulation for PowerPoint files.
- **HTML slides**: html-slides + html-to-ppt + dev-slides + ai-slides + frontend-slides.
- **Markdown slides**: md-slides for markdown-based presentations.
- **Slide design**: slides skill for layout, copy, strategy.
- **PPT visual**: ppt-visual for visual enhancements.
- **Deck refresh**: deck-refresh for updating existing decks.
- **IB decks**: ib-check-deck for investment banking decks.

### Office Documents
- **Excel/XLSX**: xlsx + xlsx-manipulation + excel-automation + sheets-automation.
- **Word/DOCX**: docx + docx-manipulation for Word docs.
- **PDF**: pdf + pdf-compress + pdf-converter + pdf-extraction + pdf-form-filler + pdf-merge-split + pdf-ocr-extraction + pdf-to-docx + pdf-watermark + chat-with-pdf.
- **Conversion**: md-to-office + office-to-md + batch-convert. HTML-to-PDF via playwright-skill, HTML-to-PPTX via pptx html2pptx.js.
- **Templates**: template-engine + contract-template + invoice-template.
- **OCR**: smart-ocr + table-extractor + layout-analyzer + doc-parser.

### Finance & Modeling
- **DCF**: dcf-model + dcf-valuation.
- **LBO**: lbo-model.
- **3-Statement**: 3-statement-model.
- **Financial**: financial-modeling + stock-analysis + saas-metrics + crypto-report.
- **Investment**: investment-memo.
- **Audit**: audit-xls + clean-data-xls.
- **Expense**: expense-report + expense-tracker.
- **Invoice**: invoice-automation + invoice-generator + invoice-organizer.

### Marketing & Copywriting
- **Copy**: copywriting + copy-editing + ads-copywriter + content-research-writer.
- **Strategy**: content-strategy + marketing-plan + marketing-ideas + marketing-loops + marketing-psychology.
- **SEO**: ai-seo + seo-audit + seo-optimizer + programmatic-seo + schema + site-architecture.
- **Ads**: ads + ad-creative + facebook-meta-ads + google-ads-manager.
- **Email**: emails + email-marketing + email-drafter + email-classifier + cold-email.
- **Social**: social + social-publisher + tiktok-marketing + linkedin-automation + twitter-x-automation.
- **CRO**: cro + ab-testing + popups + paywalls + signup + onboarding.
- **Research**: customer-research + competitor-profiling + competitors + competitive-analysis + company-research.
- **Offers**: offers + pricing + lead-magnets + referrals.
- **Launch**: launch + directory-submissions + public-relations.
- **Council**: marketing-council (Ogilvy, Hormozi, Godin advisors).
- **Product**: product-marketing + aso.
- **SMS**: sms + twilio-sms-automation.
- **Video**: video + podcast-automation + youtube-automation.
- **Co-marketing**: co-marketing + community-marketing.

### Sales & Revenue
- **Sales**: sales-enablement + prospecting + lead-qualification + lead-research-assistant + lead-routing.
- **RevOps**: revops + churn-prevention + subscription-management.
- **CRM**: crm-automation + pipedrive-automation.

### HR & Business
- **HR**: hr-automation + applicant-screening + job-description-generator + offer-letter-generator.
- **CV**: cv-builder + resume-tailor + cover-letter.
- **Legal**: contract-review + contract-template + nda-generator.
- **Reports**: report-generator + weekly-report + meeting-notes + proposal-writer.

### Data & Automation
- **Data**: data-analysis + data-extractor + data-pipeline + etl-pipeline + database-sync + batch-processor.
- **Workflow**: n8n-workflow + webhook-automation.
- **Tools**: form-builder + file-organizer + news-monitor + web-search + deep-research + academic-search.

### Platform Integrations
- **Project mgmt**: jira-automation + asana-automation + clickup-automation + linear-automation + trello-automation + monday.com-automation.
- **Communication**: slack-workflows + microsoft-teams-automation + discord-bot + telegram-bot + whatsapp-automation.
- **Productivity**: notion-automation + obsidian-automation + gmail-workflows + calendar-automation.
- **Commerce**: shopify-automation + woocommerce-automation + amazon-seller + stripe-payments + quickbooks-automation.
- **Mail**: mailchimp-automation + intercom-automation + docusign-automation.
- **Other**: home-assistant-automation + apple-shortcuts-integration + spotify-automation + weather-automation + browser-automation + security-monitoring + devops-automation + ai-agent-builder + mcp-hub.

### Skill Writing
- writing-skills + using-superpowers for creating new skills.
