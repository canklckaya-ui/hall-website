# Starter Components & Code Templates

This file contains full code templates for common design patterns and components. Copy these into your HTML files as needed.

---

## Table of Contents

1. [Responsive Slide Engine](#responsive-slide-engine)
2. [Device Frames](#device-frames)
3. [Animation Timeline Engine](#animation-timeline-engine)
4. [Design Canvas](#design-canvas)
5. [Tweaks Panel](#tweaks-panel)
6. [Dark Mode Toggle](#dark-mode-toggle)

---

## Responsive Slide Engine

For building fixed-size presentations (1920×1080) that auto-fit to any viewport.

**Key conventions:**
- Internal arrays use 0-indexed, but numbers displayed to user are **always 1-indexed**
- Each slide gets `data-screen-label="01 Title"`, `data-screen-label="02 Agenda"`, etc.
- Control buttons go **outside** the `.stage` scaled container for small-screen usability

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Presentation Title</title>
  <style>
    * { 
      margin: 0; 
      padding: 0; 
      box-sizing: border-box; 
    }
    
    body { 
      background: #000; 
      display: flex; 
      align-items: center; 
      justify-content: center;
      height: 100vh;
      overflow: hidden;
      font-family: system-ui, -apple-system, sans-serif;
    }
    
    .stage {
      width: 1920px;
      height: 1080px;
      position: relative;
      transform-origin: center center;
      background: #fff;
    }
    
    .slide {
      position: absolute;
      inset: 0;
      display: none;
      padding: 80px;
      flex-direction: column;
      justify-content: center;
    }
    
    .slide.active { 
      display: flex; 
    }
    
    .controls {
      position: fixed;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 12px;
      z-index: 1000;
    }
    
    .controls button {
      padding: 10px 20px;
      border: none;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(10px);
      color: white;
      cursor: pointer;
      font-size: 16px;
      font-weight: 500;
      transition: all 200ms;
    }
    
    .controls button:hover {
      background: rgba(255, 255, 255, 0.25);
      transform: translateY(-2px);
    }
    
    .controls button:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }
    
    .slide-counter {
      position: fixed;
      bottom: 30px;
      right: 30px;
      color: rgba(255, 255, 255, 0.6);
      font-size: 16px;
      font-weight: 500;
      z-index: 1000;
    }
  </style>
</head>
<body>
  <div class="stage">
    <!-- Slide 1 -->
    <section class="slide active" data-screen-label="01 Title">
      <h1 style="font-size: 96px; font-weight: 700; margin-bottom: 32px;">Title Slide</h1>
      <p style="font-size: 48px; color: #666;">Subtitle goes here</p>
    </section>
    
    <!-- Slide 2 -->
    <section class="slide" data-screen-label="02 Agenda">
      <h2 style="font-size: 72px; font-weight: 700; margin-bottom: 48px;">Agenda</h2>
      <ul style="font-size: 36px; line-height: 1.6; list-style: none;">
        <li style="margin-bottom: 24px;">• Topic One</li>
        <li style="margin-bottom: 24px;">• Topic Two</li>
        <li style="margin-bottom: 24px;">• Topic Three</li>
      </ul>
    </section>
    
    <!-- Add more slides here -->
  </div>
  
  <div class="controls">
    <button id="prevBtn">← Previous</button>
    <button id="nextBtn">Next →</button>
  </div>
  
  <div class="slide-counter"></div>
  
  <script>
    // Auto-fit scaling
    function scaleStage() {
      const stage = document.querySelector('.stage');
      const scaleX = window.innerWidth / 1920;
      const scaleY = window.innerHeight / 1080;
      const scale = Math.min(scaleX, scaleY);
      stage.style.transform = `scale(${scale})`;
    }
    
    window.addEventListener('resize', scaleStage);
    scaleStage();
    
    // Slide navigation
    let current = parseInt(localStorage.getItem('slideIndex') || '0');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const counter = document.querySelector('.slide-counter');
    
    function showSlide(n) {
      current = Math.max(0, Math.min(n, slides.length - 1));
      
      slides.forEach((s, i) => {
        s.classList.toggle('active', i === current);
      });
      
      // Update localStorage for persistence
      localStorage.setItem('slideIndex', current);
      
      // Update counter (1-indexed for display)
      counter.textContent = `${current + 1} / ${slides.length}`;
      
      // Update button states
      prevBtn.disabled = current === 0;
      nextBtn.disabled = current === slides.length - 1;
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        showSlide(current + 1);
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        showSlide(current - 1);
      }
    });
    
    // Button navigation
    prevBtn.addEventListener('click', () => showSlide(current - 1));
    nextBtn.addEventListener('click', () => showSlide(current + 1));
    
    // Initialize
    showSlide(current);
  </script>
</body>
</html>
```

---

## Device Frames

### iPhone Frame (React Component)

```jsx
const IPhoneFrame = ({ children, title = "App" }) => {
  const frameStyles = {
    width: 390,
    height: 844,
    borderRadius: 48,
    border: '12px solid #1a1a1a',
    overflow: 'hidden',
    position: 'relative',
    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
    background: '#fff'
  };
  
  const statusBarStyles = {
    height: 54,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 24px',
    fontSize: 15,
    fontWeight: 600,
    background: '#fff'
  };
  
  const dynamicIslandStyles = {
    width: 126,
    height: 34,
    background: '#1a1a1a',
    borderRadius: 20,
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    top: 8
  };
  
  const contentStyles = {
    height: 'calc(100% - 54px)',
    overflow: 'auto',
    background: '#fff'
  };
  
  const homeIndicatorStyles = {
    position: 'absolute',
    bottom: 8,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 134,
    height: 5,
    background: '#1a1a1a',
    borderRadius: 3
  };
  
  return (
    <div style={frameStyles}>
      {/* Status bar */}
      <div style={statusBarStyles}>
        <span>9:41</span>
        <div style={dynamicIslandStyles} />
        <span>⚡ 📶</span>
      </div>
      
      {/* Content */}
      <div style={contentStyles}>
        {children}
      </div>
      
      {/* Home indicator */}
      <div style={homeIndicatorStyles} />
    </div>
  );
};
```

### Android Frame (React Component)

```jsx
const AndroidFrame = ({ children, title = "App" }) => {
  const frameStyles = {
    width: 360,
    height: 800,
    borderRadius: 24,
    border: '10px solid #2c2c2c',
    overflow: 'hidden',
    position: 'relative',
    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
    background: '#fff'
  };
  
  const statusBarStyles = {
    height: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
    fontSize: 14,
    fontWeight: 500,
    background: '#fff'
  };
  
  const contentStyles = {
    height: 'calc(100% - 96px)',
    overflow: 'auto',
    background: '#fff'
  };
  
  const navBarStyles = {
    height: 48,
    background: '#f5f5f5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTop: '1px solid #e0e0e0'
  };
  
  const navBtnStyles = {
    width: 24,
    height: 24,
    background: '#666',
    borderRadius: 4
  };
  
  return (
    <div style={frameStyles}>
      {/* Status bar */}
      <div style={statusBarStyles}>
        <span>9:41</span>
        <span>🔋 📶</span>
      </div>
      
      {/* Content */}
      <div style={contentStyles}>
        {children}
      </div>
      
      {/* Navigation bar */}
      <div style={navBarStyles}>
        <div style={navBtnStyles} />
        <div style={{...navBtnStyles, borderRadius: '50%'}} />
        <div style={navBtnStyles} />
      </div>
    </div>
  );
};
```

### Browser Window Frame (React Component)

```jsx
const BrowserFrame = ({ children, url = "https://example.com", title = "Page" }) => {
  const frameStyles = {
    borderRadius: 12,
    overflow: 'hidden',
    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
    border: '1px solid #e5e5e5',
    background: '#fff'
  };
  
  const titleBarStyles = {
    background: '#f5f5f5',
    padding: '12px 16px',
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    borderBottom: '1px solid #e5e5e5'
  };
  
  const trafficLightsStyles = {
    display: 'flex',
    gap: 8
  };
  
  const lightStyles = {
    width: 12,
    height: 12,
    borderRadius: '50%'
  };
  
  const addressBarStyles = {
    flex: 1,
    background: '#fff',
    borderRadius: 6,
    padding: '6px 12px',
    fontSize: 13,
    color: '#666',
    border: '1px solid #e0e0e0'
  };
  
  return (
    <div style={frameStyles}>
      {/* Title bar */}
      <div style={titleBarStyles}>
        <div style={trafficLightsStyles}>
          <div style={{...lightStyles, background: '#ff5f57'}} />
          <div style={{...lightStyles, background: '#febc2e'}} />
          <div style={{...lightStyles, background: '#28c840'}} />
        </div>
        <div style={addressBarStyles}>{url}</div>
      </div>
      
      {/* Content */}
      <div style={{background: '#fff'}}>
        {children}
      </div>
    </div>
  );
};
```

### macOS Window Frame (React Component)

```jsx
const MacOSWindow = ({ children, title = "Window" }) => {
  const frameStyles = {
    borderRadius: 10,
    overflow: 'hidden',
    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
    border: '1px solid #d0d0d0',
    background: '#fff'
  };
  
  const titleBarStyles = {
    background: '#ececec',
    padding: '12px 16px',
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    borderBottom: '1px solid #d0d0d0'
  };
  
  const trafficLightsStyles = {
    display: 'flex',
    gap: 8
  };
  
  const lightStyles = {
    width: 12,
    height: 12,
    borderRadius: '50%'
  };
  
  const titleStyles = {
    flex: 1,
    textAlign: 'center',
    fontSize: 13,
    fontWeight: 500,
    color: '#333'
  };
  
  return (
    <div style={frameStyles}>
      {/* Title bar */}
      <div style={titleBarStyles}>
        <div style={trafficLightsStyles}>
          <div style={{...lightStyles, background: '#ff5f57'}} />
          <div style={{...lightStyles, background: '#febc2e'}} />
          <div style={{...lightStyles, background: '#28c840'}} />
        </div>
        <div style={titleStyles}>{title}</div>
        <div style={{width: 60}} /> {/* Spacer for centering */}
      </div>
      
      {/* Content */}
      <div style={{background: '#fff'}}>
        {children}
      </div>
    </div>
  );
};
```

---

## Animation Timeline Engine

A lightweight timeline-based animation system with scrubber, play/pause, and easing.

```jsx
// Stage component with auto-scaling and scrubber
const Stage = ({ children, duration = 10 }) => {
  const [time, setTime] = React.useState(0);
  const [playing, setPlaying] = React.useState(false);
  const startTimeRef = React.useRef(null);
  const animFrameRef = React.useRef(null);
  
  const stageStyles = {
    width: 1920,
    height: 1080,
    position: 'relative',
    transformOrigin: 'center center',
    background: '#fff',
    overflow: 'hidden'
  };
  
  const controlsStyles = {
    position: 'fixed',
    bottom: 30,
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    zIndex: 1000,
    background: 'rgba(0,0,0,0.8)',
    padding: 20,
    borderRadius: 12,
    backdropFilter: 'blur(10px)'
  };
  
  const scrubberStyles = {
    width: 400,
    height: 4,
    background: 'rgba(255,255,255,0.2)',
    borderRadius: 2,
    cursor: 'pointer',
    position: 'relative'
  };
  
  const progressStyles = {
    height: '100%',
    background: '#3b82f6',
    borderRadius: 2,
    width: `${(time / duration) * 100}%`,
    transition: playing ? 'none' : 'width 100ms'
  };
  
  const buttonStyles = {
    padding: '8px 16px',
    border: 'none',
    borderRadius: 6,
    background: 'rgba(255,255,255,0.15)',
    color: 'white',
    cursor: 'pointer',
    fontSize: 14,
    fontWeight: 500
  };
  
  // Animation loop
  React.useEffect(() => {
    if (playing) {
      startTimeRef.current = performance.now() - time * 1000;
      
      const tick = () => {
        const elapsed = (performance.now() - startTimeRef.current) / 1000;
        
        if (elapsed >= duration) {
          setTime(duration);
          setPlaying(false);
        } else {
          setTime(elapsed);
          animFrameRef.current = requestAnimationFrame(tick);
        }
      };
      
      animFrameRef.current = requestAnimationFrame(tick);
    } else {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    }
    
    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [playing, duration]);
  
  // Auto-scale stage
  React.useEffect(() => {
    const scale = () => {
      const stage = document.querySelector('.animation-stage');
      if (stage) {
        const scaleX = window.innerWidth / 1920;
        const scaleY = window.innerHeight / 1080;
        const s = Math.min(scaleX, scaleY);
        stage.style.transform = `scale(${s})`;
      }
    };
    
    window.addEventListener('resize', scale);
    scale();
    
    return () => window.removeEventListener('resize', scale);
  }, []);
  
  const handleScrub = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = x / rect.width;
    setTime(Math.max(0, Math.min(duration, percent * duration)));
  };
  
  return (
    <div style={{background: '#000', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div className="animation-stage" style={stageStyles}>
        {typeof children === 'function' ? children(time) : children}
      </div>
      
      <div style={controlsStyles}>
        <div style={scrubberStyles} onClick={handleScrub}>
          <div style={progressStyles} />
        </div>
        <div style={{display: 'flex', gap: 8, justifyContent: 'center'}}>
          <button style={buttonStyles} onClick={() => setPlaying(!playing)}>
            {playing ? '⏸ Pause' : '▶ Play'}
          </button>
          <button style={buttonStyles} onClick={() => { setTime(0); setPlaying(false); }}>
            ⏮ Reset
          </button>
          <span style={{color: 'white', fontSize: 14, alignSelf: 'center', marginLeft: 8}}>
            {time.toFixed(1)}s / {duration}s
          </span>
        </div>
      </div>
    </div>
  );
};

// Sprite component for time-based visibility
const Sprite = ({ children, start, end }) => {
  return children;
};

// Custom hook to access current time
const useTime = () => {
  // This would be implemented via context in a real app
  // For now, time is passed down via render props
  return 0;
};

// Easing functions
const Easing = {
  linear: t => t,
  easeIn: t => t * t,
  easeOut: t => t * (2 - t),
  easeInOut: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  easeInCubic: t => t * t * t,
  easeOutCubic: t => (--t) * t * t + 1,
  easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  spring: t => {
    const p = 0.3;
    return Math.pow(2, -10 * t) * Math.sin((t - p / 4) * (2 * Math.PI) / p) + 1;
  }
};

// Interpolation helper
const interpolate = (t, [start, end], [fromValue, toValue], easing = Easing.linear) => {
  if (t < start) return fromValue;
  if (t > end) return toValue;
  
  const progress = (t - start) / (end - start);
  const easedProgress = easing(progress);
  
  return fromValue + (toValue - fromValue) * easedProgress;
};

// Example usage:
/*
<Stage duration={10}>
  {(time) => (
    <div style={{
      position: 'absolute',
      left: interpolate(time, [0, 3], [0, 1000], Easing.easeOutCubic),
      top: 400,
      width: 100,
      height: 100,
      background: '#3b82f6',
      borderRadius: 12,
      opacity: time >= 0 && time <= 3 ? 1 : 0
    }}>
      Moving Box
    </div>
  )}
</Stage>
*/
```

---

## Design Canvas

A grid layout for presenting multiple design options side-by-side.

```jsx
const DesignCanvas = ({ options }) => {
  const canvasStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: 48,
    padding: 48,
    background: '#f5f5f5',
    minHeight: '100vh'
  };
  
  const optionStyles = {
    background: '#fff',
    borderRadius: 12,
    padding: 32,
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  };
  
  const labelStyles = {
    fontSize: 14,
    fontWeight: 600,
    color: '#666',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: 16
  };
  
  return (
    <div style={canvasStyles}>
      {options.map((option, i) => (
        <div key={i} style={optionStyles}>
          <div style={labelStyles}>{option.label}</div>
          {option.content}
        </div>
      ))}
    </div>
  );
};

// Example usage:
/*
<DesignCanvas options={[
  {
    label: 'Option A: Bold & Colorful',
    content: <div>Your design variant here</div>
  },
  {
    label: 'Option B: Minimal & Clean',
    content: <div>Your design variant here</div>
  },
  {
    label: 'Option C: Dark & Moody',
    content: <div>Your design variant here</div>
  }
]} />
*/
```

---

## Tweaks Panel

A floating panel for live parameter adjustment.

```jsx
const TweaksPanel = ({ tweaks, onChange }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  const panelStyles = {
    position: 'fixed',
    bottom: 20,
    right: 20,
    background: 'white',
    borderRadius: 12,
    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
    padding: isOpen ? 24 : 0,
    width: isOpen ? 320 : 0,
    maxHeight: isOpen ? '80vh' : 0,
    overflow: 'auto',
    transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    opacity: isOpen ? 1 : 0,
    zIndex: 10000
  };
  
  const toggleStyles = {
    position: 'fixed',
    bottom: 20,
    right: 20,
    background: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: 12,
    padding: '12px 20px',
    fontSize: 14,
    fontWeight: 600,
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)',
    transition: 'all 200ms',
    zIndex: 10001
  };
  
  const titleStyles = {
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 20,
    color: '#1a1a1a'
  };
  
  const controlStyles = {
    marginBottom: 20
  };
  
  const labelStyles = {
    display: 'block',
    fontSize: 13,
    fontWeight: 600,
    color: '#666',
    marginBottom: 8
  };
  
  const inputStyles = {
    width: '100%',
    padding: '8px 12px',
    border: '1px solid #e0e0e0',
    borderRadius: 6,
    fontSize: 14
  };
  
  return (
    <>
      <button 
        style={toggleStyles}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✕ Close' : '⚙️ Tweaks'}
      </button>
      
      {isOpen && (
        <div style={panelStyles}>
          <div style={titleStyles}>Tweaks</div>
          
          {tweaks.map((tweak, i) => (
            <div key={i} style={controlStyles}>
              <label style={labelStyles}>{tweak.label}</label>
              
              {tweak.type === 'color' && (
                <input
                  type="color"
                  value={tweak.value}
                  onChange={(e) => onChange(tweak.key, e.target.value)}
                  style={{...inputStyles, height: 40}}
                />
              )}
              
              {tweak.type === 'range' && (
                <>
                  <input
                    type="range"
                    min={tweak.min}
                    max={tweak.max}
                    step={tweak.step || 1}
                    value={tweak.value}
                    onChange={(e) => onChange(tweak.key, parseFloat(e.target.value))}
                    style={{...inputStyles, padding: 0}}
                  />
                  <div style={{fontSize: 12, color: '#999', marginTop: 4}}>
                    {tweak.value}{tweak.unit || ''}
                  </div>
                </>
              )}
              
              {tweak.type === 'select' && (
                <select
                  value={tweak.value}
                  onChange={(e) => onChange(tweak.key, e.target.value)}
                  style={inputStyles}
                >
                  {tweak.options.map((opt, j) => (
                    <option key={j} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              )}
              
              {tweak.type === 'toggle' && (
                <label style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
                  <input
                    type="checkbox"
                    checked={tweak.value}
                    onChange={(e) => onChange(tweak.key, e.target.checked)}
                    style={{marginRight: 8}}
                  />
                  {tweak.value ? 'On' : 'Off'}
                </label>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

// Example usage:
/*
const [settings, setSettings] = React.useState({
  primaryColor: '#3b82f6',
  fontSize: 16,
  theme: 'light',
  darkMode: false
});

const handleChange = (key, value) => {
  setSettings(prev => ({ ...prev, [key]: value }));
};

<TweaksPanel
  tweaks={[
    { type: 'color', key: 'primaryColor', label: 'Primary Color', value: settings.primaryColor },
    { type: 'range', key: 'fontSize', label: 'Font Size', value: settings.fontSize, min: 12, max: 24, unit: 'px' },
    { type: 'select', key: 'theme', label: 'Theme', value: settings.theme, options: [
      { label: 'Light', value: 'light' },
      { label: 'Dark', value: 'dark' }
    ]},
    { type: 'toggle', key: 'darkMode', label: 'Dark Mode', value: settings.darkMode }
  ]}
  onChange={handleChange}
/>
*/
```

---

## Dark Mode Toggle

Persist dark mode preference with CSS custom properties.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dark Mode Example</title>
  <style>
    :root {
      --bg: #ffffff;
      --text: #1a1a1a;
      --border: #e0e0e0;
      --card-bg: #f5f5f5;
    }
    
    [data-theme="dark"] {
      --bg: #1a1a1a;
      --text: #ffffff;
      --border: #333;
      --card-bg: #2a2a2a;
    }
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      background: var(--bg);
      color: var(--text);
      font-family: system-ui, -apple-system, sans-serif;
      padding: 48px;
      transition: background 300ms, color 300ms;
    }
    
    .toggle-btn {
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 12px 20px;
      border: 2px solid var(--border);
      border-radius: 8px;
      background: var(--card-bg);
      color: var(--text);
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 200ms;
    }
    
    .toggle-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    
    .card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 32px;
      max-width: 600px;
      margin: 0 auto;
    }
    
    h1 {
      font-size: 48px;
      margin-bottom: 16px;
    }
    
    p {
      font-size: 18px;
      line-height: 1.6;
      color: var(--text);
      opacity: 0.8;
    }
  </style>
</head>
<body>
  <button class="toggle-btn" id="themeToggle">
    🌙 Toggle Theme
  </button>
  
  <div class="card">
    <h1>Dark Mode Example</h1>
    <p>This example demonstrates a dark mode toggle that persists across page refreshes using localStorage.</p>
  </div>
  
  <script>
    const html = document.documentElement;
    const toggle = document.getElementById('themeToggle');
    
    // Load saved theme or detect system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    
    html.setAttribute('data-theme', initialTheme);
    updateToggleButton(initialTheme);
    
    // Toggle theme
    toggle.addEventListener('click', () => {
      const currentTheme = html.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateToggleButton(newTheme);
    });
    
    function updateToggleButton(theme) {
      toggle.textContent = theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
    }
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'dark' : 'light';
        html.setAttribute('data-theme', newTheme);
        updateToggleButton(newTheme);
      }
    });
  </script>
</body>
</html>
```

---

## Usage Notes

1. **Copy entire templates** as starting points, then customize for your needs
2. **Maintain accessibility** — add proper ARIA labels, keyboard navigation, focus states
3. **Test responsive behavior** — ensure components work on different screen sizes
4. **Preserve localStorage patterns** — use for state that should survive page refresh
5. **Follow naming conventions** — use unique style object names (no `const styles = {...}`)
6. **Export to window** — make React components globally available when splitting files
