# Design Principles & Guidelines

This file contains design philosophy, anti-cliché rules, content guidelines, and quality standards.

---

## Table of Contents

1. [AI Cliché Blocklist](#ai-cliché-blocklist)
2. [Content Principles](#content-principles)
3. [Emoji Rules](#emoji-rules)
4. [Placeholder Philosophy](#placeholder-philosophy)
5. [Appropriate Scales](#appropriate-scales)
6. ["Aim to Stun" Principles](#aim-to-stun-principles)
7. [Color System Guidelines](#color-system-guidelines)
8. [Typography Guidelines](#typography-guidelines)

---

## AI Cliché Blocklist

Actively avoid these telltale "obviously AI" design patterns that signal low-effort output:

### Visual Clichés

❌ **Gradient Abuse**
- Purple-pink-blue gradient backgrounds
- Aggressive gradient overlays on everything
- Gradient text (unless it's genuinely part of the brand)
- Multiple competing gradients on one page

❌ **Card Patterns**
- Rounded cards with colored left-border accent (the classic AI tell)
- Every section as a card with drop shadow
- Card-ception (cards within cards within cards)

❌ **SVG-Drawn Graphics**
- Complex illustrations drawn with SVG paths
- Fake charts and graphs that look geometric
- Icon-heavy designs where every heading has an emoji or geometric icon

❌ **Cookie-Cutter Combos**
- Gradient button + large-radius card + left-border accent
- Hero section with gradient overlay + centered white text + CTA button
- Three-column feature grid with icon + heading + description

### Typography Clichés

❌ **Overused Fonts**

Never use these fonts unless explicitly part of an existing brand:
- **Inter** (the #1 AI design tell)
- **Roboto**
- **Arial / Helvetica**
- **Fraunces**
- **system-ui** (when used generically)

✅ **Better Alternatives:**
- Plus Jakarta Sans
- DM Sans
- Space Grotesk
- Manrope
- Sora
- Outfit
- Clash Display (for headings)
- General Sans
- Bricolage Grotesque

### Content Clichés

❌ **Data Slop**
- Meaningless stats ("10,000+ happy customers" with no context)
- Fake metrics ("99.9% uptime" with no verification)
- Icon spam (every bullet point has an icon)
- Fabricated customer logo walls
- Fake testimonial quotes with stock photo avatars

❌ **Generic Copy**
- "Revolutionize your workflow"
- "Trusted by leading companies"
- "Take your [X] to the next level"
- "Powerful, yet simple"
- "Industry-leading solution"

### Interaction Clichés

❌ **Obvious Patterns**
- Everything has a hover state with `transform: translateY(-4px)`
- Smooth scroll to every section
- Parallax effects on every image
- Particle.js background animation

---

## Content Principles

### No Filler Content

**Every element must earn its place.**

- Don't pad a design with placeholder text just to fill space
- Don't add dummy sections because the page looks empty
- Don't invent informational material without user approval
- One thousand no's for every yes

If a section feels empty, that's a **design problem**, not a content problem. Solve it with:
- Layout and composition
- Whitespace and rhythm
- Type-scale contrast
- Visual hierarchy

### Ask Before Adding Material

If you think additional sections, pages, copy, or content would improve the design:

1. **Ask the user first** rather than unilaterally adding it
2. Explain **why** you think it's needed
3. Offer **specific suggestions** ("A case studies section here would provide social proof")
4. Let the user decide — they know their audience and goals better

### Placeholders > Fabricated Data

**Fake data damages credibility more than admitting a gap.**

When you don't have real data:

✅ **Use placeholders:**
- `[Customer testimonial needed]`
- `[Real metrics from analytics dashboard]`
- `[Product screenshot here]`
- `16:9 image placeholder`

❌ **Never fabricate:**
- Fake customer quotes
- Made-up statistics
- Invented company names
- Stock photo testimonials

### Less is More

**"1,000 no's for every yes." — Steve Jobs**

- Whitespace is not wasted space — it's design
- Brevity beats verbosity
- Remove elements until it breaks, then add back one
- If you're unsure whether to include something, don't

---

## Emoji Rules

**Default: No emoji.**

Only use emoji when **both** conditions are met:

1. ✅ The target design system/brand itself uses them (examples: Notion, early Linear, Slack, certain consumer brands)
2. ✅ You can match their density and context precisely

### When NOT to Use Emoji

❌ **As icon substitutes**
- "I don't have an icon library, so I'll use 🚀 ⚡ ✨ as fillers"
- Emoji in place of proper iconography

❌ **As decorative filler**
- "Let's add an emoji before the heading to make it lively"
- Emoji in bullet points for visual interest
- Emoji in buttons or CTAs

❌ **In professional/B2B contexts**
- Enterprise dashboards
- B2B SaaS landing pages
- Corporate presentations (unless brand explicitly uses them)

### When to Use Emoji

✅ **The brand itself uses emoji**
- Check existing pages/screenshots
- Match the brand's emoji usage patterns
- Maintain consistency with their density

✅ **Consumer apps with playful tone**
- Social media apps
- Gaming platforms
- Creative tools with casual tone

### What to Use Instead

When you don't have real icons:

- **Square placeholders** with labels: `[icon]`, `▢`
- **Simple geometric shapes** (circles, squares, triangles)
- **Text labels** (better than fake icons)
- **Ask the user** for their icon library

---

## Placeholder Philosophy

**When you lack icons, images, or components, a placeholder is more professional than a poorly drawn fake.**

### Missing Icons

✅ **Good:**
```
[icon]
▢
⬜
```

❌ **Bad:**
```
🚀 (emoji as icon)
<svg>... (complex hand-drawn icon)
```

### Missing Avatars

✅ **Good:**
- Initial-letter circle with color fill
- Simple colored circle with "JD" for "John Doe"
- Silhouette placeholder

❌ **Bad:**
- Stock photo that doesn't match
- Emoji faces
- AI-generated fake faces

### Missing Images

✅ **Good:**
```
┌─────────────────┐
│   16:9 image    │
│   placeholder   │
└─────────────────┘
```

❌ **Bad:**
- Unsplash stock photos that don't match the product
- Fake screenshots with lorem ipsum
- AI-generated imagery that looks generic

### Missing Data

✅ **Good:**
- Ask the user for real data
- Show the structure with `[metric]`, `[value]` placeholders
- Use realistic but clearly fake data (e.g., exactly 100, 200, 300)

❌ **Bad:**
- Fabricated metrics
- Made-up customer names
- Fake testimonials

### Missing Logos

✅ **Good:**
- Brand name in text + simple geometric shape
- Placeholder rectangle with "LOGO" text
- Ask user for logo file

❌ **Bad:**
- Generic corporate logo you invented
- Stock logo from a template

### The Signal

A placeholder signals: **"Real material needed here."**

A fake signals: **"I cut corners."**

Users respect honesty. They don't respect fakery, even well-executed fakery.

---

## Appropriate Scales

Different contexts demand different minimum sizes for readability and usability.

### 1920×1080 Presentations (Slide Decks)

| Element | Minimum Size | Ideal Size |
|---|---|---|
| Body text | 24px | 28-32px |
| Headings (h2) | 48px | 64-72px |
| Headings (h1) | 72px | 96-128px |
| Code snippets | 24px | 28px (monospace) |
| Captions | 20px | 24px |

**Why:** Presentations are viewed from a distance. Text smaller than 24px is unreadable for back-row audience members.

### Mobile Mockups

| Element | Minimum Size | Ideal Size |
|---|---|---|
| Touch targets | 44px × 44px | 48px × 48px |
| Body text | 16px | 17-18px |
| Headings | 24px | 28-32px |
| Buttons | 44px height | 48px height |
| Input fields | 44px height | 48px height |

**Why:** Apple and Google accessibility guidelines require minimum 44px touch targets for reliable interaction.

### Print Documents

| Element | Minimum Size | Ideal Size |
|---|---|---|
| Body text | 12pt | 14pt |
| Headings | 18pt | 24pt |
| Captions | 10pt | 11pt |
| Footnotes | 9pt | 10pt |

**Why:** Print readability standards. 12pt is the absolute minimum for sustained reading.

### Web Pages (Desktop)

| Element | Minimum Size | Ideal Size |
|---|---|---|
| Body text | 16px | 18-20px |
| Headings (h2) | 24px | 28-32px |
| Headings (h1) | 32px | 40-56px |
| Buttons | 40px height | 44px height |

**Why:** 16px is the browser default for good reason. Smaller text strains eyes during extended reading.

### Type-Scale Contrast

**Aim for 4–6× ratio between h1 and body text for strong visual hierarchy.**

Examples:
- Body: 16px → h1: 64-96px ✅
- Body: 18px → h1: 72-108px ✅
- Body: 16px → h1: 24px ❌ (too little contrast)

---

## "Aim to Stun" Principles

**The bar is "stunning," not "functional."**

### 1. Play with Proportion and Whitespace

- **Generous whitespace** creates breathing room
- **Extreme type sizes** (200px+ headings) command attention
- **Asymmetric layouts** break monotony
- **Unusual aspect ratios** (21:9, 1:1) create intrigue

### 2. Bold Type-Size Contrast

✅ **Good:**
```css
h1 { font-size: 96px; }
p { font-size: 18px; }
/* 5.3× ratio */
```

❌ **Bad:**
```css
h1 { font-size: 28px; }
p { font-size: 16px; }
/* 1.75× ratio — not enough contrast */
```

### 3. Color Fills, Textures, Layering

- **Full-bleed color sections** (not everything on white background)
- **Subtle textures** (noise, grain, patterns)
- **Layering with depth** (shadows, overlays, blur)
- **Blend modes** (`mix-blend-mode: multiply`, `overlay`, `screen`)

### 4. Unconventional Layouts

Break out of the box:
- **Diagonal grids**
- **Overlapping elements**
- **Text as image**
- **Broken grid systems**
- **Magazine-style layouts**

### 5. Thoughtful Hover States

Don't just do `transform: translateY(-4px)` on everything.

✅ **Interesting hover states:**
- Color shift
- Scale change
- Morphing shapes
- Revealing hidden content
- Staggered child animations
- Glow effects
- Border animations

### 6. CSS Animations & Transitions

- **Micro-interactions** (button press, card hover, entry animations)
- **Loading states** (skeleton screens, progress indicators)
- **Page transitions** (fade, slide, scale)
- **Scroll-triggered animations** (fade in on view)

### 7. Advanced CSS

Use the full power of CSS:

```css
/* Backdrop blur */
backdrop-filter: blur(10px);

/* Blend modes */
mix-blend-mode: multiply;

/* Masks */
mask-image: linear-gradient(to bottom, black 80%, transparent);

/* Filters */
filter: drop-shadow(0 4px 12px rgba(0,0,0,0.1));

/* Clip paths */
clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);

/* 3D transforms */
transform: perspective(1000px) rotateY(10deg);
```

### 8. Surprise the User

**CSS, HTML, JS, and SVG are far more capable than most people realize.**

Show the user what's possible:
- Creative navigation patterns
- Novel interaction metaphors
- Unexpected animations
- Thoughtful empty states
- Delightful loading experiences

---

## Color System Guidelines

### Use Brand Colors First

If a design system exists, **stick to it strictly.**

Extract colors from:
1. Existing screenshots
2. Design system documentation
3. Brand guidelines
4. User-provided assets

### When You Need More Colors

Use `oklch()` to derive harmonious variants:

```css
:root {
  /* Brand primary */
  --primary: oklch(65% 0.25 260);
  
  /* Harmonious variants (same hue, different lightness) */
  --primary-light: oklch(80% 0.20 260);
  --primary-dark: oklch(50% 0.25 260);
  
  /* Complementary (opposite hue) */
  --accent: oklch(65% 0.25 60);
  
  /* Analogous (nearby hues) */
  --secondary: oklch(65% 0.25 230);
}
```

### Never Invent from Scratch

❌ **Don't do this:**
```css
--primary: #7c3aed;  /* Random purple I thought looked nice */
```

✅ **Do this:**
```css
--primary: oklch(65% 0.25 260);  /* Derived from brand blue using oklch */
```

### Test in Both Themes

If dark mode is a possibility:
- Test all colors in dark mode
- Ensure sufficient contrast (WCAG AA minimum: 4.5:1 for text)
- Use `color-contrast()` when available

---

## Typography Guidelines

### Avoid Overused Fonts

Never use without explicit brand requirement:
- Inter
- Roboto  
- Arial
- Fraunces
- Generic system-ui

### Choose Fonts with Intention

Consider:
1. **Brand personality** (playful vs. serious, technical vs. friendly)
2. **Readability** (body text needs high x-height)
3. **Distinctiveness** (memorable without being gimmicky)
4. **Performance** (prefer variable fonts, limit weights)

### Font Pairing Strategy

**Heading + Body from Same Family** (easiest, safest):
```css
--font-heading: 'Plus Jakarta Sans', sans-serif;
--font-body: 'Plus Jakarta Sans', sans-serif;
```

**Contrasting Pair** (more interesting):
```css
--font-heading: 'Clash Display', sans-serif;  /* Geometric, bold */
--font-body: 'DM Sans', sans-serif;           /* Humanist, readable */
```

### Type Scale System

Use consistent scale ratios:

```css
:root {
  --text-xs: 12px;
  --text-sm: 14px;
  --text-base: 16px;
  --text-lg: 18px;
  --text-xl: 20px;
  --text-2xl: 24px;
  --text-3xl: 30px;
  --text-4xl: 36px;
  --text-5xl: 48px;
  --text-6xl: 60px;
  --text-7xl: 72px;
  --text-8xl: 96px;
}
```

### Line Height Rules

```css
/* Tight for headings */
h1, h2, h3 { line-height: 1.1; }

/* Comfortable for body */
p { line-height: 1.6; }

/* Loose for wide layouts */
.wide-column p { line-height: 1.8; }
```

### Text Wrapping

```css
/* Better line breaking */
p { text-wrap: pretty; }

/* Prevent orphans */
h1, h2 { text-wrap: balance; }
```

---

## Summary Checklist

Before delivering any design, verify:

- [ ] No AI clichés (gradients, overused fonts, left-border cards)
- [ ] No filler content or fabricated data
- [ ] No emoji (unless brand uses them)
- [ ] Placeholders for missing assets (not fakes)
- [ ] Appropriate scale for context (24px+ slides, 44px+ mobile)
- [ ] Strong type-size contrast (4–6× h1 to body)
- [ ] Colors from brand or derived with oklch
- [ ] Thoughtful hover states and animations
- [ ] Visual quality at Dribbble/Behance level

**Remember: The bar is "stunning," not "functional."**
