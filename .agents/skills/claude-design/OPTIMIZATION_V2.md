# Claude Design Skill V2 - Optimized Based on Ruben's Article

## Source

Optimized based on: [Claude Design by Ruben Hassid](https://ruben.substack.com/p/claude-design)

Published: April 22, 2026

## Key Changes from V1 → V2

### 1. **Added Step 0: Extract Brand Context First (CRITICAL)**

**Why:** The article emphasizes: "Claude Design is only as good as the design system you give it."

**What changed:**
- Added a complete new Step 0 before all other steps
- Three pathways:
  1. **User provides brand assets** → Extract to `DESIGN_SYSTEM.md`
  2. **User has no assets** → Create temporary system based on references
  3. **Copy from getdesign.md** → Model after specific brands (Airbnb, Stripe, etc.)

**Template for DESIGN_SYSTEM.md:**
```markdown
# Design System for [Brand Name]

## Color Palette
- Primary: #3B82F6 (usage rules)
- Secondary: #10B981
- Neutral: #64748B, #1E293B, #F8FAFC
- Accent: #F59E0B

## Typography
- Display: Space Grotesk (weights, usage)
- Headings: DM Sans
- Body: DM Sans
- Code: JetBrains Mono

## Spacing System
- Base unit: 8px
- Scale: 8, 16, 24, 32, 48, 64, 96, 128, 160

## Component Patterns
- Buttons: 8px border-radius, 500 weight, 12px 24px padding
- Cards: 12px border-radius, Level 2 shadow, 24px padding

## Tone & Voice
[Engineer-focused / Marketing / Playful / Serious]

## Missing Elements
- [ ] Icon library not specified
- [ ] Illustration style unclear
```

**Impact:** Ensures every design is rooted in a coherent system, not generic AI output.

---

### 2. **Separated DESIGN_SYSTEM.md vs DESIGN_PLAN.md**

**Before V2:** Only created `design-plan.md` which mixed brand system + project decisions

**After V2:**
- `DESIGN_SYSTEM.md` = **Brand-level** (reusable across projects)
- `DESIGN_PLAN.md` = **Project-specific** (this landing page, this deck)

**Why:** Design system is extracted once from brand assets and reused. Design plan is created fresh for each project.

---

### 3. **Enhanced "Taste is All You Need" Philosophy**

Added throughout the skill:

> "AI can generate 10 variations in 10 minutes. You know which one to ship. Taste is the ability to say no to 9 versions and yes to 1."

From Ruben's article:
> "Taste is the override switch. Taste is looking at a critique and saying, 'Claude is wrong about this one, because my audience expects minimalism.'"

**Impact:** Reframes the skill from "generate perfect output" to "generate options, then exercise taste."

---

### 4. **Added "4 Locked-In Inputs" for Great Prompts**

From the article's workflow analysis, every good prompt has:

1. **Goal**: What is this for?
2. **Layout**: How should it be structured?
3. **Content**: What specific content/data?
4. **Constraints**: What limits?

Example from article:
```
Create a high-fidelity landing page designed to raise $100M from Israeli VCs 
for "Governmental Underwater Datacenters"...

Target audience: Serious Israeli VC firms and government tech investors.
Tone: Premium + strategic + credible — think Stripe polish + Anduril 
defense-tech + Israeli pragmatism.
```

**Added to Step 1** as a template for users to follow.

---

### 5. **Expanded Variant Strategy with "Start Safe, Then Push Boundaries"**

**Before V2:** Generic "provide 3 variants"

**After V2:** Clear progression strategy:

- **Variant 1**: By-the-book, design system compliant, safe
- **Variant 2**: Moderate experimentation (color shifts, layout variations)
- **Variant 3**: Ambitious and daring (novel interactions, bold visual concepts)

From article:
> "Start the first few variants safely within the design system; then progressively push boundaries. Show the user the full spectrum from 'safe and functional' to 'ambitious and daring.'"

---

### 6. **Added Validation Workflow (Step 6)**

From the article's "Advanced Workflow" section:

**Before export, run these prompts:**
1. Review for contrast and accessibility (WCAG 2.1 AA violations)
2. Generate desktop/tablet/mobile previews
3. Suggest 2 A/B test variations of hero section

**Added as explicit step** before delivery.

---

### 7. **Enhanced Export Options**

From article:
- Send to Canva (not available in Claude Code)
- PPTX export
- PDF export
- Standalone HTML
- Code bundle for handoff

**Added guidance** on how to export in Claude Code environment (manual PDF via browser, screenshots, zip bundles).

---

### 8. **"getdesign.md" Power User Hack**

From article:
> "There is a free website called getdesign.md: you can literally copy the DESIGN.md file (the brand guidelines for Claude) from most brand you know."

**Added Option 3 in Step 0:**
- If user says "design this like [Brand Name]"
- Extract that brand's design system
- Apply it to their product

**Example:** "Design like Airbnb" → download Airbnb DESIGN.md → apply to user's product

---

### 9. **Emphasized Real Images Even More**

V1 had this, but V2 strengthens it:

> "Users need to SEE the design with actual imagery to evaluate it properly."

**Why real images matter** (from testing):
- Layout balance visible
- Visual hierarchy clear
- Color interaction with imagery
- Spacing and density assessment
- Overall aesthetic evaluation

Text placeholders like `[16:9 image]` provide ZERO visual feedback.

---

### 10. **Added "Cowork + Claude Design" Advanced Workflow**

From article:
```
Step 1: Extract brand system with Cowork
Step 2: Upload DESIGN.md into Claude Design
Step 3: Generate with specific prompts
Step 4: Iterate (structural in chat, pixel-level on canvas)
Step 5: Validate
Step 6: Export
```

**Adapted for Claude Code:**
- Cowork = Claude Code's native folder/codebase reading
- Upload DESIGN.md = Reference it in every design decision
- Canvas edits = Manual HTML/CSS edits

---

### 11. **Strengthened Anti-AI-Cliché Section**

**Added from article examples:**
- ❌ Same design everywhere (without design system input)
- ❌ Generic Purple-pink-blue gradients
- ❌ Overreliance on Inter/Roboto/Arial fonts

**Reinforced:**
- Use distinctive fonts (Space Grotesk, DM Sans, Clash Display)
- Extract colors from brand or use oklch() for harmonious palettes
- Every element must earn its place

---

### 12. **Clarified Output Type: Slide Decks**

From article, slide decks are a primary use case (not just an afterthought).

**Enhanced slide deck section with:**
- Fixed 1920×1080 canvas (16:9)
- Auto-scale to viewport with transform
- Keyboard navigation (←→ for slides, Space for next)
- Persist current slide in localStorage
- Speaker notes capability
- Large type (≥32px body, ≥64px headlines)

---

## File Structure Changes

**V1:**
```
claude-design-skill/
├── SKILL.md
├── README.md
└── references/
    ├── starter-components.md
    ├── design-principles.md
    ├── tool-mappings.md
    ├── verification-checklist.md
    └── css-patterns.md
```

**V2 (recommended):**
```
claude-design-skill-v2/
├── SKILL.md                          (Updated with Step 0 + workflow changes)
├── README.md                         (To be updated)
├── OPTIMIZATION_V2.md               (This file)
└── references/
    ├── starter-components.md         (Same as V1)
    ├── design-principles.md          (Same as V1)
    ├── tool-mappings.md              (Same as V1)
    ├── verification-checklist.md     (Same as V1)
    └── css-patterns.md               (Same as V1)
```

---

## Workflow Comparison

### V1 Workflow:
1. Understand user needs (ask questions)
2. Gather design context
3. Create design plan
4. Show v0 draft
5. Full build
6. Verification & delivery

### V2 Workflow:
0. **Extract brand context FIRST** → `DESIGN_SYSTEM.md`
1. Understand user needs (4 locked-in inputs)
2. Create design plan → `DESIGN_PLAN.md`
3. Build v0 with real images (early approval)
4. Full build (after approval)
5. **Iteration & variants** (3+ variations: safe → ambitious)
6. **Validation** (accessibility, responsive, A/B tests)
7. Export & delivery (brief summary only)

**Key difference:** Step 0 ensures every design is rooted in a system. Steps 5-6 formalize iteration and validation.

---

## Impact on Quality

| Aspect | V1 | V2 | Improvement |
|---|---|---|---|
| **Design system consistency** | Optional, ad-hoc | Mandatory Step 0 | ✅ Every design rooted in system |
| **Real imagery in v0** | Emphasized | Double-emphasized | ✅ Better visual feedback |
| **Variant strategy** | Generic "3 variants" | Safe → Moderate → Ambitious | ✅ Clear progression |
| **Taste philosophy** | Implicit | Explicit throughout | ✅ User owns final decision |
| **Validation workflow** | Manual checklist | Explicit 3-prompt validation | ✅ Accessibility + responsive |
| **Export options** | Basic | Full suite (PDF, screenshots, bundles) | ✅ Production-ready handoff |

---

## Real-World Example: Underwater Datacenter Landing Page

**How V2 would approach it differently:**

### V1 Approach:
1. Ask 4 questions
2. Create design-plan.md (mixed system + project decisions)
3. Build v0 with real images
4. Build final version
5. Open in browser

### V2 Approach:
0. **Extract design system from user input:**
   - "Target: Israeli VCs, Tone: Stripe polish + Anduril defense-tech"
   - Create `DESIGN_SYSTEM.md` with deep ocean palette, Space Grotesk + DM Sans, premium shadows
   - Get user approval on system

1. **Ask 4 questions** (same as V1)

2. **Create DESIGN_PLAN.md** (project-specific):
   - Core message: Sovereignty-focused
   - Section structure: Hero → Strategic Imperative → Solution → Advantages → Investment → CTA
   - Image strategy: Underwater tech visuals from Unsplash
   - Assumptions list

3. **Build v0 with real Unsplash images** (same as V1)

4. **Full build after approval**

5. **Create 3 variants:**
   - V1: Safe & professional (current design)
   - V2: More vibrant (stronger cyan accents, animated hero)
   - V3: Bold & daring (full-screen underwater video bg, parallax scrolling)

6. **Validate:**
   - Check WCAG contrast ratios
   - Test mobile/tablet/desktop breakpoints
   - Suggest A/B test: "Sovereignty" vs "Innovation" messaging angle

7. **Export:**
   - Standalone HTML
   - PDF for investor deck
   - Screenshots for pitch deck

---

## Key Insights from Article

### 1. Design System is Everything

> "Claude Design is only as good as the design system you give it."

Without a design system, every output looks generic. With one, outputs are indistinguishable from in-house design teams.

### 2. Taste Cannot Be Automated

> "Claude Design builds 10 dashboards in 10 minutes. It cannot tell you which of the 10 to ship. That's taste."

The skill should generate options, not dictate the final choice.

### 3. Tools Got Cheap, Taste Got Expensive

> "Designers with taste are about to have the best decade of their careers. Tools just got cheap. Taste just got much more expensive."

V2 positions the user as the tastemaker, not the executor.

### 4. Real Images > Text Placeholders

From testing: Text placeholders provide zero visual feedback. Even generic Unsplash images let users evaluate layout, spacing, and aesthetic.

### 5. Iteration Should Be Structured

Not just "make changes" — specific types:
- **Structural changes** → variants (layout, organization)
- **Pixel-level changes** → edits (spacing, colors, fonts)
- **Risky experiments** → branches (save current, try new approach)

---

## Migration Guide: V1 → V2

If you're using V1 and want to upgrade:

1. **Copy `SKILL.md` from V2**
2. **Keep all reference files** (they're compatible)
3. **Update workflow:**
   - Always start with Step 0 (extract design system)
   - Separate DESIGN_SYSTEM.md from DESIGN_PLAN.md
   - Follow 3-variant strategy (safe → ambitious)
   - Run validation prompts before export

---

## Conclusion

V2 is a **workflow-optimized** version based on real-world usage patterns from Claude Design (claude.ai/design) as documented by Ruben Hassid.

**Core improvements:**
- Design system extraction is now Step 0 (mandatory)
- Taste philosophy is explicit (generate options, user decides)
- Variant strategy is structured (safe → moderate → ambitious)
- Validation is formalized (accessibility, responsive, A/B tests)

**V2 is production-ready for:**
- Landing pages for fundraising (like Underwater Datacenters)
- Pitch decks for sales teams
- Animated explainer videos
- Interactive prototypes
- Data visualization dashboards

---

**The bar is "stunning," not "functional."** ✨
