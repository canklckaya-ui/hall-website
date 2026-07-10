# Common CSS Patterns & Solutions

Quick reference for common design patterns and their solutions.

---

## Grid Alignment Issues

### Problem: Images Don't Align in Grid Rows

When using `aspect-ratio` with varying values in CSS Grid, images create uneven row heights:

```css
/* ❌ WRONG - Creates misaligned rows */
.grid-item {
  aspect-ratio: 3 / 2;
}
.grid-item:nth-child(3n+1) {
  aspect-ratio: 16 / 9;
}
.grid-item:nth-child(3n+2) {
  aspect-ratio: 3 / 2;
}
```

### Solution: Use Fixed Row Heights

```css
/* ✅ CORRECT - All images align perfectly */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  grid-auto-rows: 280px; /* Fixed row height */
}

.grid-item {
  height: 100%;
  overflow: hidden;
}

.grid-item img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Maintains aspect while filling container */
}
```

For visual variety, use `grid-row: span N` to make some items taller:

```css
.grid-item:nth-child(3) {
  grid-row: span 2; /* Takes 2 rows */
}
```

---

## Image Handling

### Use Real Images in v0

Always use actual images (even from placeholder services) rather than text placeholders:

```html
<!-- ❌ WRONG - User can't evaluate visual impact -->
<div class="hero-placeholder">[Hero Image: 16:9]</div>

<!-- ✅ CORRECT - User sees actual layout with imagery -->
<img src="https://images.unsplash.com/photo-ID?w=1920&h=1080&fit=crop" 
     alt="Mountain landscape">
```

**Recommended placeholder services:**
- **Unsplash**: `https://images.unsplash.com/photo-ID?w=WIDTH&h=HEIGHT&fit=crop`
- **Placehold.co**: `https://placehold.co/WIDTHxHEIGHT/BG_COLOR/TEXT_COLOR?text=Label`

---

## Responsive Images

### Problem: Images Don't Scale Properly

```css
/* ❌ WRONG - Images overflow on mobile */
img {
  width: 800px;
}
```

### Solution: Use Responsive Units

```css
/* ✅ CORRECT - Images scale to container */
img {
  max-width: 100%;
  height: auto;
  display: block;
}
```

For background images:

```css
.hero {
  background-image: url('image.jpg');
  background-size: cover;
  background-position: center;
}
```

---

## Typography Scale

### Creating Visual Hierarchy

Use `clamp()` for responsive typography that scales smoothly:

```css
h1 {
  font-size: clamp(48px, 8vw, 96px);
  /* min: 48px, preferred: 8vw, max: 96px */
}

h2 {
  font-size: clamp(32px, 5vw, 64px);
}

p {
  font-size: clamp(16px, 2vw, 20px);
  line-height: 1.6;
  text-wrap: pretty; /* Better line breaks */
}
```

---

## Hover States

### Subtle, Professional Hover Effects

```css
.card {
  transition: all 400ms cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 12px 24px rgba(0,0,0,0.15);
}
```

For images:

```css
.image-container {
  overflow: hidden;
}

.image-container img {
  transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1);
}

.image-container:hover img {
  transform: scale(1.05);
}
```

---

## Color Systems with oklch

### Creating Harmonious Palettes

```css
:root {
  /* Base color */
  --primary: oklch(65% 0.25 260);
  
  /* Lighter variant (increase lightness) */
  --primary-light: oklch(80% 0.20 260);
  
  /* Darker variant (decrease lightness) */
  --primary-dark: oklch(50% 0.25 260);
  
  /* Complementary (opposite hue: +180) */
  --accent: oklch(65% 0.25 60);
  
  /* Analogous (nearby hue: ±30) */
  --secondary: oklch(65% 0.25 230);
}
```

**Format:** `oklch(lightness% chroma hue)`
- Lightness: 0-100%
- Chroma: 0-0.4 (saturation)
- Hue: 0-360 (color wheel)

---

## Spacing System

### Consistent Spacing with Custom Properties

```css
:root {
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-2xl: 48px;
  --spacing-3xl: 64px;
}

.section {
  padding: var(--spacing-3xl) var(--spacing-lg);
  margin-bottom: var(--spacing-2xl);
}
```

---

## Common Layout Patterns

### Full-Height Hero

```css
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
```

### Centered Container

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
}
```

### Two-Column Layout

```css
.two-column {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
}

@media (max-width: 768px) {
  .two-column {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
```

---

## Performance Tips

### Optimize Images

```html
<!-- Use appropriate dimensions -->
<img src="image.jpg?w=800&h=600&fit=crop" 
     alt="Description"
     loading="lazy">
```

### Defer Non-Critical CSS

```html
<link rel="preload" href="fonts.css" as="style">
<link rel="stylesheet" href="fonts.css" media="print" 
      onload="this.media='all'">
```

---

## Accessibility Quick Wins

```html
<!-- Always include alt text -->
<img src="photo.jpg" alt="Mountain landscape at sunset">

<!-- Associate labels with inputs -->
<label for="email">Email</label>
<input id="email" type="email" name="email">

<!-- Use semantic HTML -->
<header>...</header>
<nav>...</nav>
<main>...</main>
<footer>...</footer>

<!-- Provide focus indicators -->
<style>
button:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}
</style>
```

---

## Dark Mode

### System Preference Detection

```css
:root {
  --bg: #ffffff;
  --text: #1a1a1a;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #1a1a1a;
    --text: #ffffff;
  }
}

body {
  background: var(--bg);
  color: var(--text);
  transition: background 300ms, color 300ms;
}
```

---

## Quick Debug Tips

### Show Grid Lines

```css
/* Temporary - remove before delivery */
.grid {
  background-image: 
    repeating-linear-gradient(0deg, #f0f0f0 0, #f0f0f0 1px, transparent 1px, transparent 100%),
    repeating-linear-gradient(90deg, #f0f0f0 0, #f0f0f0 1px, transparent 1px, transparent 100%);
  background-size: 8px 8px;
}
```

### Highlight Layout Issues

```css
/* Temporary - shows all elements */
* {
  outline: 1px solid red;
}
```
