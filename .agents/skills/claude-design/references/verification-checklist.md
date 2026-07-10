# Verification Checklist

Complete this checklist before considering any design deliverable finished. All items must pass.

---

## Pre-Delivery Checklist

### 1. Console & Errors

- [ ] Open browser DevTools (Cmd+Option+J on Mac, F12 on Windows)
- [ ] **No errors** in the Console tab
- [ ] **No warnings** in the Console tab
- [ ] Check Network tab: all resources loaded (no 404s, no CORS errors)
- [ ] No deprecation warnings for React/libraries

**How to check:**
1. Open file in browser: `open design.html`
2. Open DevTools Console
3. Refresh page and watch for errors
4. Click through all interactive elements
5. Verify console remains clean

---

### 2. Responsive Rendering

- [ ] Renders correctly on **target devices/viewports**:
  - [ ] Mobile (375px width minimum)
  - [ ] Tablet (768px width)
  - [ ] Desktop (1440px+ width)
- [ ] For fixed-size content (slide decks, animations):
  - [ ] Scaling container adapts without distortion
  - [ ] Letterbox bars appear correctly
  - [ ] Controls remain usable on small screens (outside scaled area)
- [ ] For responsive web pages:
  - [ ] No horizontal scroll at any breakpoint
  - [ ] Layout doesn't break at intermediate sizes
  - [ ] Images scale appropriately

**How to check:**
1. Open DevTools Device Mode (Cmd+Shift+M)
2. Test preset devices (iPhone SE, iPad, Desktop)
3. Use responsive slider to test intermediate sizes
4. Verify no layout breaks or overflow

---

### 3. Interactive States

- [ ] **All interactive components** include appropriate states:

#### Buttons
- [ ] Hover state (color change, shadow, transform)
- [ ] Active state (pressed appearance)
- [ ] Focus state (outline for keyboard navigation)
- [ ] Disabled state (if applicable)

#### Links
- [ ] Hover state (underline, color change)
- [ ] Visited state (if applicable)
- [ ] Focus state (outline)

#### Inputs & Forms
- [ ] Focus state (border color, glow)
- [ ] Error state (if applicable)
- [ ] Disabled state (if applicable)
- [ ] Placeholder text visible

#### Cards & Interactive Elements
- [ ] Hover state (shadow, scale, or other feedback)
- [ ] Active/clicked state
- [ ] Loading state (if applicable)

#### Empty States
- [ ] Empty list/table shows helpful message
- [ ] Zero-data charts show placeholder

#### Error States
- [ ] Form validation errors display clearly
- [ ] Network error states handled
- [ ] 404/not-found states (if applicable)

**How to check:**
1. Hover over every interactive element
2. Click every button and link
3. Tab through with keyboard (check focus rings)
4. Try to trigger error states (empty inputs, etc.)

---

### 4. Typography & Text

- [ ] No text overflow or truncation
- [ ] `text-wrap: pretty` applied to paragraphs
- [ ] `text-wrap: balance` applied to headings (if appropriate)
- [ ] Line-height comfortable for reading (1.5-1.6 for body text)
- [ ] Font sizes meet minimum requirements:
  - [ ] Slides: ≥ 24px
  - [ ] Mobile: ≥ 16px body, ≥ 44px touch targets
  - [ ] Web: ≥ 16px body
- [ ] Contrast ratio meets WCAG AA minimum (4.5:1 for text)

**How to check:**
1. Resize browser window and verify text doesn't overflow
2. Check inspector to verify `text-wrap` CSS applied
3. Use browser zoom to test text scaling
4. Use contrast checker tool for accessibility

---

### 5. Design System Adherence

- [ ] All colors from declared design system — **no rogue hues introduced**
- [ ] Spacing follows declared system (8px base unit, consistent multiples)
- [ ] Border-radius values consistent with declared system
- [ ] Shadow hierarchy follows declared levels
- [ ] Typography uses declared fonts and sizes
- [ ] Motion/animations use declared easing curves and durations

**How to check:**
1. Review design-plan.md (if created)
2. Inspect elements and verify CSS custom properties used
3. Check for hardcoded values that deviate from system
4. Use DevTools to audit all colors used

---

### 6. React & Code Quality

#### React-Specific (if using React)

- [ ] No `const styles = {...}` — use namespaced styles like `terminalStyles = {...}` or inline styles
- [ ] Cross-file components exported via `Object.assign(window, {...})`
- [ ] No `scrollIntoView` usage
- [ ] React script tags use pinned versions with integrity hashes
- [ ] No `type="module"` on React/Babel script imports

#### General Code Quality

- [ ] Semantic HTML tags (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`)
- [ ] Meaningful class names (not generic like `.box`, `.thing`)
- [ ] Files split appropriately (no single file >1000 lines)
- [ ] Comments explain "why" not "what"
- [ ] No dead code or commented-out blocks

**How to check:**
1. Search codebase for `const styles = `
2. Verify `Object.assign(window, {` at end of component files
3. Search for `scrollIntoView`
4. Review HTML structure for semantic tags
5. Check file line counts

---

### 7. Anti-Cliché Compliance

- [ ] **No AI clichés:**
  - [ ] No purple-pink-blue gradients
  - [ ] No rounded cards with left-border accent color
  - [ ] No emoji abuse (unless brand uses them)
  - [ ] Not using overused fonts (Inter, Roboto, Arial, Fraunces, system-ui)
  - [ ] No fabricated stats or fake testimonials
  - [ ] No SVG-drawn complex graphics (use placeholders instead)
  - [ ] No cookie-cutter gradient buttons
  - [ ] No "data slop" (meaningless numbers/icons)

**How to check:**
1. Visual review against anti-cliché blocklist
2. Search CSS for gradient patterns
3. Check font-family declarations
4. Review content for fabricated data

---

### 8. Content Quality

- [ ] **No filler content** — every element earns its place
- [ ] **No fabricated data** — all stats/testimonials are real or clearly placeholders
- [ ] **Placeholders for missing assets** (not fakes):
  - [ ] Missing icons: `[icon]` or `▢` (not emoji)
  - [ ] Missing images: aspect-ratio cards with labels
  - [ ] Missing avatars: initial-letter circles
  - [ ] Missing data: clearly marked placeholders
- [ ] User approved all added sections/content
- [ ] Copy is concise and purposeful

**How to check:**
1. Review all text content for purpose
2. Verify any statistics are real or marked as placeholders
3. Check that user approved all sections
4. Look for lorem ipsum or obvious filler

---

### 9. Accessibility

- [ ] All images have `alt` attributes (or `alt=""` for decorative)
- [ ] Form inputs have associated `<label>` tags
- [ ] Buttons have descriptive text or `aria-label`
- [ ] Color is not the only way to convey information
- [ ] Keyboard navigation works (Tab, Enter, Space, Arrows)
- [ ] Focus indicators visible on all interactive elements
- [ ] Heading hierarchy is logical (h1 → h2 → h3, no skips)
- [ ] Links have descriptive text (not "click here")

**How to check:**
1. Tab through entire page with keyboard
2. Use screen reader (VoiceOver on Mac: Cmd+F5)
3. Verify all interactive elements are reachable
4. Check heading structure with DevTools

---

### 10. Performance

- [ ] Large images optimized (no 10MB PNGs)
- [ ] Minimal external dependencies (avoid loading heavy libraries)
- [ ] No render-blocking resources
- [ ] Animations use `transform` and `opacity` (not `left`, `top`, `width`)
- [ ] Page loads in <3 seconds on typical connection

**How to check:**
1. Check Network tab for asset sizes
2. Use Lighthouse audit in DevTools
3. Test on throttled connection (DevTools Network tab → Slow 3G)

---

### 11. Functionality

- [ ] All links work (no 404s)
- [ ] All buttons trigger correct actions
- [ ] Form submissions work (if applicable)
- [ ] Navigation flows correctly
- [ ] State persistence works (localStorage for slide position, theme, etc.)
- [ ] Animations complete without glitches

**How to check:**
1. Click every link and button
2. Test all interactive flows
3. Refresh page and verify persisted state loads
4. Play through all animations

---

### 12. Visual Quality

- [ ] **Dribbble / Behance showcase level** — this is the bar
- [ ] Intentional use of whitespace and rhythm
- [ ] Strong type-size contrast (4–6× h1 to body)
- [ ] Thoughtful color palette (not random)
- [ ] Polished hover states and micro-interactions
- [ ] Professional placeholder treatment
- [ ] Attention to detail (alignment, spacing, visual balance)

**How to check:**
1. Compare against high-quality design examples (Dribbble, Behance)
2. Screenshot and review at thumbnail size (details should still be clear)
3. Get external feedback if possible
4. Ask: "Would I be proud to show this to a design community?"

---

## Verification Workflow

### Step 1: Open in Browser
```bash
open your-design.html
```

### Step 2: Manual Checks

Go through each checklist item systematically:
1. DevTools Console check (5 min)
2. Responsive testing (5 min)
3. Interactive state testing (10 min)
4. Typography review (5 min)
5. Design system audit (5 min)
6. Code quality review (5 min)
7. Anti-cliché check (5 min)
8. Content review (5 min)
9. Accessibility test (10 min)
10. Performance check (5 min)
11. Functionality test (10 min)
12. Visual quality review (5 min)

**Total: ~75 minutes for thorough verification**

### Step 3: Fix Issues

If any items fail:
1. Use `Edit` tool to fix issues
2. Repeat Step 1 and Step 2 for affected areas
3. Don't proceed until all items pass

### Step 4: Final Delivery

Once all items pass:
1. Summarize caveats (if any)
2. List next steps (if any)
3. Keep summary EXTREMELY BRIEF (2-3 sentences max)

---

## Quick Reference

**Must-pass criteria (non-negotiable):**

✅ No console errors or warnings  
✅ Renders on all target devices  
✅ Interactive states present  
✅ No text overflow  
✅ Design system adhered to  
✅ No React anti-patterns  
✅ No AI clichés  
✅ No filler content  
✅ Dribbble-level visual quality  

**If you can't check "yes" to all of these, the work is not done.**

---

## Tools for Verification

- **Browser DevTools** (built-in): Console, Network, Device Mode, Lighthouse
- **Color Contrast Checker**: https://webaim.org/resources/contrastchecker/
- **Screen Reader**: VoiceOver (Mac), NVDA (Windows), JAWS
- **Responsive Testing**: DevTools Device Mode, physical devices
- **Lighthouse Audit**: DevTools → Lighthouse tab

---

## Common Issues & Fixes

### Console Errors

**Issue**: "React is not defined"  
**Fix**: Ensure React scripts loaded before Babel scripts

**Issue**: "styles is not defined"  
**Fix**: Namespaced style objects, not generic `const styles`

### Layout Issues

**Issue**: Horizontal scroll on mobile  
**Fix**: `max-width: 100%` on images, `overflow-x: hidden` if needed

**Issue**: Text overflows container  
**Fix**: `text-wrap: pretty`, set `max-width`, or use `overflow-wrap: break-word`

### Interactive States

**Issue**: No hover feedback  
**Fix**: Add `transition` and `:hover` styles

**Issue**: No focus ring  
**Fix**: Don't remove default outline, or add custom focus styles

### Performance

**Issue**: Page loads slowly  
**Fix**: Optimize images, remove unused libraries, lazy-load off-screen content

---

## Final Note

**The bar is "stunning," not "functional."**

If the design doesn't meet showcase quality, it's not done. Every pixel should be intentional. Every interaction should be deliberate. The user should be impressed, not just satisfied.

Don't settle for "good enough." Aim to stun.
