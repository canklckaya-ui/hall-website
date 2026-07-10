# Claude Design Skill V2

## Overview

An optimized AI skill that replicates Claude Design's workflow for creating stunning HTML-based design artifacts: landing pages, pitch decks, prototypes, animations, dashboards, and more.

**Core philosophy:** The bar is "stunning," not "functional."

## What's New in V2

Optimized based on [Ruben Hassid's Claude Design article](https://ruben.substack.com/p/claude-design) (April 2026):

### Major Improvements

1. **Step 0: Extract Brand Context First**
   - Design system extraction is now mandatory before any design work
   - Creates `DESIGN_SYSTEM.md` from brand assets (or references)
   - Ensures every design is rooted in a coherent system, not generic AI output

2. **Taste Philosophy Explicit**
   - "AI generates 10 variations in 10 minutes. You know which one to ship."
   - Skill generates options, user exercises taste to decide

3. **Structured Variant Strategy**
   - Variant 1: Safe & by-the-book (design system compliant)
   - Variant 2: Moderate experimentation (color shifts, layout variations)
   - Variant 3: Ambitious & daring (novel interactions, bold concepts)

4. **Formalized Validation**
   - Accessibility check (WCAG 2.1 AA violations)
   - Responsive preview (desktop/tablet/mobile)
   - A/B test variations (hero section messaging)

5. **Separated Design System from Design Plan**
   - `DESIGN_SYSTEM.md` = Brand-level (reusable across projects)
   - `DESIGN_PLAN.md` = Project-specific (this landing page, this deck)

## Installation

Copy this skill to your Claude Code skills directory:

```bash
cp -r claude-design-skill-v2 ~/.claude/skills/claude-design
```

Or use it directly from this folder.

## Usage

Invoke the skill for visual/interactive deliverables:

```
"Build a landing page for my startup"
"Create a pitch deck for our sales team"
"Design an animated explainer video"
"Turn this screenshot into an interactive prototype"
"Build a data dashboard for our metrics"
```

## Workflow

### 0. Extract Brand Context (NEW in V2)
- Analyze brand assets (logos, past designs, codebase, screenshots)
- Create `DESIGN_SYSTEM.md` with:
  - Color palette
  - Typography scheme
  - Spacing system
  - Component patterns
  - Tone & voice
- Get user approval before proceeding

### 1. Understand User Needs
- Ask up to 4 focused questions (if context is insufficient)
- Every good prompt has 4 inputs: **goal, layout, content, constraints**

### 2. Create Design Plan
- Write `DESIGN_PLAN.md` with project-specific decisions
- Show to user for approval

### 3. Build v0 Draft
- Show structure + placeholders + **real images** (Unsplash)
- Let user course-correct early
- Open in browser for immediate feedback

### 4. Full Build
- Complete states (hover, active, focus, loading, error)
- Interactions (transitions, animations, micro-interactions)
- Responsive (mobile, tablet, desktop)
- Accessibility (ARIA, keyboard navigation)

### 5. Iteration & Variants
- Provide 3+ variants across dimensions:
  - Layout (organization, structure)
  - Visual (color, typography, texture)
  - Interaction (motion, feedback, navigation)
  - Creative (novel UX, bold concepts)

### 6. Validation
- Check accessibility (WCAG 2.1 AA)
- Test responsive breakpoints
- Suggest A/B test variations
- Verify browser console (no errors)

### 7. Export & Delivery
- Standalone HTML (default)
- PDF (for decks/presentations)
- Screenshots (for static previews)
- Code bundle (for handoff)
- Summarize briefly (caveats + next steps only)

## Design Principles

### Avoid AI Clichés
- ❌ Purple-pink-blue gradients
- ❌ Rounded cards with colored left border
- ❌ Inter/Roboto/Arial fonts everywhere
- ❌ Fabricated stats or fake testimonials
- ❌ Generic gradient buttons + large-radius cards

### Use Instead
- ✅ Brand-specific colors or oklch() harmonious palettes
- ✅ Distinctive fonts (Space Grotesk, DM Sans, Clash Display)
- ✅ Real data or explicit placeholders `[STAT NEEDED]`
- ✅ Custom styles matching brand personality
- ✅ Every element earns its place

### Placeholder Philosophy
- Missing icon → `▢ Settings` or `[icon]`
- Missing avatar → Initial circle `JD`
- Missing image → Unsplash placeholder OR `[16:9 datacenter image]`
- Missing data → `[87% from market research - verify]`
- **Placeholder > Fake** (signals "real material needed")

### Appropriate Scale
| Context | Minimum Size |
|---|---|
| Presentations (1920×1080) | ≥ 24px text (aim for 32-48px) |
| Mobile mockups | ≥ 44px touch targets |
| Web body text | 18-20px (not 16px) |

## Output Types

### Landing Pages / Marketing Pages
- Hero → Problem/Vision → Solution → Social Proof → Pricing → CTA
- Mobile-first responsive
- Sticky CTA on mobile scroll
- Lazy-load images below fold

### HTML Slide Decks
- Fixed 1920×1080 canvas (16:9), auto-scaled
- Keyboard navigation (←→, Space, Home/End)
- Persist current slide in localStorage
- Large type (≥32px body, ≥64px headlines)

### Interactive Prototypes
- Device frames (iPhone/Android/browser window)
- 3+ clickable flows
- Complete state coverage (default, hover, active, focus, disabled, loading, empty, error)
- Tweaks panel for variant toggling

### Animated Videos / Demos
- Play/pause + progress bar
- Timeline-driven (Stage + Sprite components)
- No title screen (straight into content)
- Unified easing functions

### Data Visualization Dashboards
- Chart.js (simple) or D3.js (complex)
- Dark/light mode toggle
- High data-ink ratio (remove unnecessary elements)
- Semantic color encoding

## File Structure

```
claude-design-skill-v2/
├── SKILL.md                          # Main skill instructions
├── README.md                         # This file
├── OPTIMIZATION_V2.md                # What changed from V1
└── references/
    ├── starter-components.md         # Deck engine, device frames, animations
    ├── design-principles.md          # Anti-cliché rules, content guidelines
    ├── tool-mappings.md              # Claude Design → Claude Code tools
    ├── verification-checklist.md     # Pre-delivery validation
    └── css-patterns.md               # Common CSS solutions
```

## Key Insights

### 1. Design System is Everything
> "Claude Design is only as good as the design system you give it."

Without a system → generic AI output  
With a system → indistinguishable from in-house design team

### 2. Taste Cannot Be Automated
> "AI generates 10 dashboards in 10 minutes. It cannot tell you which to ship. That's taste."

The skill generates options. You exercise taste to decide.

### 3. Real Images > Text Placeholders
Text placeholders provide zero visual feedback. Even generic Unsplash images let you evaluate:
- Layout balance
- Visual hierarchy
- Color interaction
- Spacing and density
- Overall aesthetic

### 4. Tools Got Cheap, Taste Got Expensive
> "Designers with taste are about to have the best decade of their careers."

This skill democratizes execution. Taste remains human.

## Examples

### Example 1: Fundraising Landing Page
```
Create a high-fidelity landing page designed to raise $100M from Israeli VCs 
for "Governmental Underwater Datacenters" — sovereign underwater datacenter 
infrastructure for AI workloads.

Target: Israeli VC firms and government tech investors.
Tone: Premium + strategic + credible (Stripe polish + Anduril defense-tech + 
Israeli pragmatism).
```

**Output:** Complete landing page with hero, stats, solution sections, real underwater imagery, premium polish.

### Example 2: Sales Pitch Deck
```
Create a pitch deck for my sales team. Our company has underwater GPU datacenters, 
meant only for Israeli companies, to ensure full sovereignty.

Audience: Israeli enterprise CTOs and infrastructure decision-makers.
Duration: 15 minutes (10-12 slides).
```

**Output:** 1920×1080 slide deck with keyboard navigation, speaker notes, sovereign messaging.

### Example 3: Animated Explainer
```
Create a 45-second animated video explaining how Israel is building underwater 
datacenters off the Mediterranean coast to cool AI compute.

Structure:
- 0-5s: Cold open title card
- 5-15s: Problem (stat reveals, thermal overlay)
- 15-30s: Solution (cross-section animation, passive cooling)
- 30-40s: Three stat cards (40% lower costs, Zero freshwater, 8x closer to EU)
- 40-45s: Closing CTA

Style: Clean tech, thin-line illustrations, Mediterranean blue + beige + white.
```

**Output:** Fully animated video with play/pause controls, timeline scrubber, smooth transitions.

## Comparison: V1 vs V2

| Aspect | V1 | V2 |
|---|---|---|
| **Design system** | Optional, ad-hoc | Mandatory Step 0 |
| **Real images** | Emphasized | Double-emphasized |
| **Variants** | Generic "3 variants" | Safe → Moderate → Ambitious |
| **Taste** | Implicit | Explicit throughout |
| **Validation** | Manual checklist | 3-prompt validation workflow |
| **Workflow** | 6 steps | 7 steps (Step 0 added) |

## Migration from V1

If you're using V1:

1. Copy `SKILL.md` from V2
2. Keep all reference files (compatible)
3. Update workflow:
   - Always start with Step 0 (extract design system)
   - Separate `DESIGN_SYSTEM.md` from `DESIGN_PLAN.md`
   - Follow 3-variant strategy
   - Run validation prompts before export

## Contributing

This skill is based on:
- Claude Design system prompt (Anthropic, 2026)
- Ruben Hassid's article (April 2026)
- Real-world testing (photographer portfolio, underwater datacenter landing page)

Improvements welcome based on additional testing.

## License

MIT License - Free to use, modify, and distribute.

---

**The bar is "stunning," not "functional."** ✨
