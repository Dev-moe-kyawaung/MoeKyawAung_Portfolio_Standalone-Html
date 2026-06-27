# 📦 Component Documentation

Complete guide to all components in the Moe Kyaw Aung Portfolio project.

---

## 📋 Table of Contents

1. [Component Overview](#component-overview)
2. [PortfolioLanding Component](#portfoliolanding-component)
3. [Sub-Components](#sub-components)
4. [Hooks & State Management](#hooks--state-management)
5. [Styling & Theming](#styling--theming)
6. [Internationalization](#internationalization)
7. [Animations](#animations)
8. [Accessibility Features](#accessibility-features)
9. [Integration Guide](#integration-guide)

---

## Component Overview

### Main Component Tree

```
PortfolioLanding (Container)
├── Navigation
│   ├── Logo
│   ├── NavLinks
│   ├── ThemeToggle
│   └── LanguageToggle
├── Hero Section
│   ├── HeroContent
│   ├── Buttons (CTA)
│   └── ScrollIndicator
├── Stats Section
│   └── AnimatedCounter (x3)
├── About Section
│   ├── AboutText
│   └── Timeline
├── Skills Section
│   ├── SkillRing (x8)
│   └── TechStack
├── Apps Section
│   └── AppCard (x3)
├── GitHub Section
│   └── GitHubLinks (x8)
├── Certificates Section
│   └── CertCard (x9)
├── Testimonials Section
│   └── TestimonialCard (x4)
├── Pricing Section
│   └── PricingCard (x3)
├── FAQ Section
│   └── FAQItem (x4)
├── Newsletter Section
│   └── NewsletterForm
├── Contact Section
│   ├── ContactForm
│   └── ContactInfo
└── Footer
    ├── FooterLinks
    └── CopyRight
```

---

## PortfolioLanding Component

### Main Component

**File**: `MoeKyawAung_Portfolio.jsx`

**Purpose**: Root component containing all portfolio sections and state management

### Props

```jsx
// No props - this is a standalone component
// State is managed internally
<PortfolioLanding />
```

### State Management

```jsx
// Theme state
const [isDark, setIsDark] = useState(true);
// Controls: Dark mode (true) or Light mode (false)

// Language state
const [lang, setLang] = useState('en');
// Supports: 'en' (English) or 'my' (Myanmar)

// Menu state
const [isMenuOpen, setIsMenuOpen] = useState(false);
// Controls: Mobile menu toggle

// Scroll position
const [scrollY, setScrollY] = useState(0);
// Tracks: Window scroll position for parallax effects

// Counter state
const [counters, setCounters] = useState({ 
  years: 0, 
  apps: 0, 
  repos: 0 
});
// Tracks: Animated counter values
```

### Key Features

1. **Theme Toggle**
   ```jsx
   const [isDark, setIsDark] = useState(true);
   // Button onclick: setIsDark(!isDark)
   // Applied via conditional className: ${isDark ? 'bg-gray-900' : 'bg-white'}
   ```

2. **Language Toggle**
   ```jsx
   const [lang, setLang] = useState('en');
   const t = translations[lang];
   // Use: t.hero, t.tagline, etc.
   ```

3. **Scroll Tracking**
   ```jsx
   useEffect(() => {
     const handleScroll = () => setScrollY(window.scrollY);
     window.addEventListener('scroll', handleScroll);
     return () => window.removeEventListener('scroll', handleScroll);
   }, []);
   ```

4. **Animated Counters**
   ```jsx
   useEffect(() => {
     const interval = setInterval(() => {
       setCounters(prev => ({
         years: prev.years < 12 ? prev.years + 0.5 : 12,
         apps: prev.apps < 3000 ? prev.apps + 100 : 3000,
         repos: prev.repos < 122 ? prev.repos + 3 : 122
       }));
     }, 30);
     return () => clearInterval(interval);
   }, []);
   ```

---

## Sub-Components

### 1. Navigation Component

**Purpose**: Fixed navigation bar with responsive design

**Features**:
- Fixed positioning at top
- Responsive menu toggle
- Theme switcher
- Language selector
- Smooth scroll to sections

**Code Structure**:
```jsx
<nav className={`fixed top-0 w-full ${isDark ? 'bg-gray-900/95' : 'bg-white/95'}`}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-20">
      {/* Logo */}
      {/* Desktop Nav Links */}
      {/* Mobile Menu Toggle */}
      {/* Theme & Language Controls */}
    </div>
    {/* Mobile Menu (conditional) */}
  </div>
</nav>
```

**Props Needed**:
- `isDark` (boolean) - Current theme state
- `setIsDark` (function) - Theme toggle function
- `lang` (string) - Current language
- `setLang` (function) - Language toggle function
- `isMenuOpen` (boolean) - Mobile menu state
- `setIsMenuOpen` (function) - Menu toggle function

### 2. Hero Section Component

**Purpose**: Eye-catching landing section with parallax effect

**Features**:
- Parallax background dot pattern
- Animated tagline
- Large headline
- Dual CTA buttons
- Floating scroll indicator

**Code Structure**:
```jsx
<section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
  <div className="absolute inset-0 opacity-5" style={{
    transform: `translateY(${scrollY * 0.5}px)`, // Parallax
  }} />
  <div className="max-w-4xl mx-auto text-center relative z-10">
    <div className="animate-slideInUp">
      <p className="hero-tag">{t.tagline}</p>
      <h1 className="font-display text-5xl">{t.hero}</h1>
      {/* CTA Buttons */}
    </div>
    {/* Scroll Indicator */}
  </div>
</section>
```

**Props Needed**:
- `scrollY` (number) - Current scroll position
- `t` (object) - Translations
- `isDark` (boolean) - Theme state

### 3. AnimatedCounter Component

**Purpose**: Display animated counters for statistics

**Usage**:
```jsx
<AnimatedCounter value={counters.years} suffix="+" />
// Output: "12+"
```

**Code**:
```jsx
const AnimatedCounter = ({ value, suffix = '' }) => (
  <span className="text-4xl font-bold text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text">
    {Math.floor(value)}{suffix}
  </span>
);
```

**Props**:
- `value` (number) - Counter value to display
- `suffix` (string) - Suffix after number (default: '')

### 4. SkillRing Component

**Purpose**: Display SVG animated progress rings for skills

**Usage**:
```jsx
<SkillRing skill="Kotlin" percentage={98} icon={Code} />
```

**Code**:
```jsx
const SkillRing = ({ skill, percentage, icon }) => (
  <div className="flex flex-col items-center group">
    <div className="relative w-24 h-24 mb-4">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
        {/* Circle background */}
        {/* Animated progress circle */}
        {/* Percentage text */}
      </svg>
    </div>
    <p className="text-sm font-semibold">{skill}</p>
  </div>
);
```

**Props**:
- `skill` (string) - Skill name
- `percentage` (number) - Skill percentage (0-100)
- `icon` (React.ReactNode) - Icon component

### 5. Card Components

**App Card**:
```jsx
{/* App showcase card */}
<div className="p-8 rounded-xl bg-gray-800">
  <h3 className="font-semibold text-lg mb-3">{app.name}</h3>
  <p className="text-sm mb-4">{app.desc}</p>
  <p className="text-xs text-yellow-500 font-semibold">{app.tech}</p>
</div>
```

**Certificate Card**:
```jsx
{/* Certificate domain card */}
<div className="p-6 rounded-xl bg-gray-800 border border-gray-700">
  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${color}`} />
  <h3 className="font-semibold mb-2">{cert.domain}</h3>
  <p className="text-2xl font-bold text-gradient">{cert.count}+</p>
</div>
```

**Testimonial Card**:
```jsx
{/* Client testimonial */}
<div className="p-8 rounded-xl bg-gray-800 border-l-4 border-yellow-500">
  <div className="flex items-center gap-4 mb-4">
    <div className="w-12 h-12 rounded-full bg-gradient" />
    <div>
      <p className="font-semibold">{testimonial.name}</p>
      <p className="text-sm text-gray-400">{testimonial.role}</p>
    </div>
  </div>
  <p className="italic">{testimonial.text}</p>
</div>
```

**Pricing Card**:
```jsx
{/* Service pricing tier */}
<div className="p-8 rounded-xl border-2 border-gray-700">
  <h3 className="font-semibold text-xl mb-2">{plan.name}</h3>
  <div className="mb-6">
    <span className="text-4xl font-bold text-yellow-500">{plan.price}</span>
    <span className="text-sm text-gray-400">{plan.period}</span>
  </div>
  <ul className="space-y-3 mb-8">
    {plan.features.map(feature => (
      <li key={feature}>✓ {feature}</li>
    ))}
  </ul>
  <button className="w-full btn-primary">Get Started</button>
</div>
```

### 6. Form Components

**Contact Form**:
```jsx
<form className="space-y-6">
  <div className="form-group">
    <label className="block text-sm font-semibold mb-2">Name</label>
    <input className="w-full px-4 py-3 rounded-lg" type="text" />
  </div>
  <div className="form-group">
    <label className="block text-sm font-semibold mb-2">Email</label>
    <input className="w-full px-4 py-3 rounded-lg" type="email" />
  </div>
  <div className="form-group">
    <label className="block text-sm font-semibold mb-2">Message</label>
    <textarea className="w-full px-4 py-3 rounded-lg h-32" />
  </div>
  <button type="submit" className="w-full btn-primary">Send Message</button>
</form>
```

**Newsletter Form**:
```jsx
<form className="flex flex-col sm:flex-row gap-3">
  <input 
    type="email" 
    placeholder="your@email.com" 
    className="flex-1 px-6 py-4 rounded-lg"
    required
  />
  <button className="btn-primary whitespace-nowrap">Subscribe</button>
</form>
```

---

## Hooks & State Management

### useState Hook Usage

```jsx
// Theme management
const [isDark, setIsDark] = useState(true);

// Language management
const [lang, setLang] = useState('en');

// Mobile menu
const [isMenuOpen, setIsMenuOpen] = useState(false);

// Scroll tracking
const [scrollY, setScrollY] = useState(0);

// Animated counters
const [counters, setCounters] = useState({ 
  years: 0, 
  apps: 0, 
  repos: 0 
});
```

### useEffect Hook Usage

```jsx
// Scroll listener
useEffect(() => {
  const handleScroll = () => setScrollY(window.scrollY);
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

// Counter animation
useEffect(() => {
  const interval = setInterval(() => {
    setCounters(prev => ({
      years: prev.years < 12 ? prev.years + 0.5 : 12,
      apps: prev.apps < 3000 ? prev.apps + 100 : 3000,
      repos: prev.repos < 122 ? prev.repos + 3 : 122
    }));
  }, 30);
  return () => clearInterval(interval);
}, []);
```

---

## Styling & Theming

### Tailwind CSS Classes

**Color Variables**:
```jsx
// Dark mode (default)
bg-gray-900        // Background
text-white         // Text
border-gray-800    // Borders

// Light mode
bg-white           // Background
text-gray-900      // Text
border-gray-200    // Borders

// Accents (both modes)
from-yellow-400 to-yellow-600  // Gradient
text-yellow-500                // Primary color
hover:bg-yellow-500/10         // Hover state
```

### Custom Styles (CSS-in-JS)

```jsx
<style>{`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  @keyframes slideInUp {
    from { 
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-float { animation: float 3s ease-in-out infinite; }
  .animate-slideInUp { animation: slideInUp 0.8s ease-out forwards; }
`}</style>
```

### Theme Toggle Implementation

```jsx
// Toggle function
function toggleTheme() {
  document.body.classList.toggle('light-mode');
  localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
}

// Apply to HTML
<button onClick={() => setIsDark(!isDark)}>
  {isDark ? '☀️' : '🌙'}
</button>

// Conditional className
className={`${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
```

---

## Internationalization

### Translation Structure

```jsx
const translations = {
  en: {
    nav: ['Home', 'About', 'Skills', 'Apps', 'Certificates', 'Testimonials', 'Contact'],
    hero: 'Android Senior Developer',
    tagline: 'Crafting secure, scalable mobile experiences with Kotlin & modern Jetpack',
    about: 'About Me',
    // ... more translations
  },
  my: {
    nav: ['အဆိုပါ', 'အကြောင်း', 'အစွမ်းအရည်', 'အပ်လီကေးရှင်း', 'လက်မှတ်များ', 'မြေးမုံရံ့', 'ဆက်သွယ်ရန်'],
    hero: 'Android အကျsenior Developer',
    tagline: 'Kotlin နှင့် Jetpack ဖြင့် လုံခြုံ...',
    // ... more translations
  }
};
```

### Usage

```jsx
// Get translation object
const t = translations[lang];

// Use in JSX
<h1>{t.hero}</h1>
<p>{t.tagline}</p>
<a href="#home">{t.nav[0]}</a>
```

### Adding New Language

1. Create new language object:
```jsx
translations.es = {
  hero: 'Desarrollador Senior de Android',
  tagline: 'Creando experiencias móviles seguras y escalables...',
  // ... more translations
};
```

2. Add language option:
```jsx
<button onClick={() => setLang('es')}>Español</button>
```

---

## Animations

### CSS Animations

**Float Animation** (scroll indicator):
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
```

**Slide In Up Animation** (page load):
```css
@keyframes slideInUp {
  from { 
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Parallax Scrolling

```jsx
<div style={{
  transform: `translateY(${scrollY * 0.5}px)`,
  // Moves 50% slower than scroll for parallax effect
}} />
```

### Counter Animation

```jsx
useEffect(() => {
  const interval = setInterval(() => {
    setCounters(prev => ({
      years: prev.years < 12 ? prev.years + 0.5 : 12,
      // Increments by 0.5 every 30ms for smooth animation
    }));
  }, 30);
  return () => clearInterval(interval);
}, []);
```

### SVG Progress Ring Animation

```jsx
<circle
  r="45"
  fill="none"
  stroke="url(#goldGradient)"
  strokeDasharray={`${2 * Math.PI * 45 * (percentage / 100)} ${2 * Math.PI * 45}`}
  className="transition-all duration-1000 ease-out"
/>
```

### Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

---

## Accessibility Features

### WCAG AA Compliance

1. **Color Contrast**
   - Text on background: 4.5:1 ratio
   - Large text: 3:1 ratio

2. **Keyboard Navigation**
   - All buttons accessible via Tab key
   - Focus indicators visible
   - Links have href attributes

3. **Semantic HTML**
   - Proper heading hierarchy (h1, h2, h3)
   - Nav, main, footer landmarks
   - Form labels associated with inputs

4. **ARIA Attributes**
   ```jsx
   <button aria-label="Toggle theme">🌙</button>
   <button aria-label="Open menu">☰</button>
   ```

5. **Reduced Motion**
   ```css
   @media (prefers-reduced-motion: reduce) {
     * { animation: none !important; }
   }
   ```

### Form Accessibility

```jsx
<form>
  <label htmlFor="email">Email</label>
  <input id="email" type="email" required />
</form>
```

### Screen Reader Support

- Proper heading structure
- Descriptive link text
- Form labels
- Alt text for images (when added)

---

## Integration Guide

### Integrating into Existing React Project

1. **Copy Component File**
   ```bash
   cp MoeKyawAung_Portfolio.jsx src/PortfolioLanding.jsx
   ```

2. **Install Dependencies**
   ```bash
   npm install lucide-react
   npm install -D tailwindcss postcss autoprefixer
   ```

3. **Configure Tailwind**
   - Copy `tailwind.config.js`
   - Copy `postcss.config.js`

4. **Import in App**
   ```jsx
   import PortfolioLanding from './PortfolioLanding';
   
   export default function App() {
     return <PortfolioLanding />;
   }
   ```

### Customizing Components

**Change Skills**:
```jsx
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
  <SkillRing skill="Kotlin" percentage={98} />
  <SkillRing skill="Your Skill" percentage={95} />
  {/* Add more skills */}
</div>
```

**Change Stats**:
```jsx
<div className="stat-item">
  <AnimatedCounter value={counters.years} suffix="+" />
  <p>Your Custom Label</p>
</div>
```

**Change Colors**:
```jsx
// In tailwind.config.js
colors: {
  gold: {
    400: '#YOUR_COLOR',
    500: '#YOUR_DARK_COLOR'
  }
}
```

---

## Performance Optimization

### Bundle Size
- React component: ~15KB
- Standalone HTML: ~95KB
- No external dependencies in standalone version
- Google Fonts loaded from CDN

### Rendering Performance
- Functional components with hooks
- Proper event listener cleanup in useEffect
- Conditional rendering for mobile menu
- CSS-based animations (not JS)

### Best Practices
```jsx
// Use useCallback for function memoization
const toggleTheme = useCallback(() => {
  setIsDark(!isDark);
}, [isDark]);

// Cleanup event listeners
useEffect(() => {
  const handler = () => setScrollY(window.scrollY);
  window.addEventListener('scroll', handler);
  return () => window.removeEventListener('scroll', handler);
}, []);
```

---

## File Structure

```
MoeKyawAung_Portfolio.jsx
├── Imports
│   ├── React hooks (useState, useEffect, useRef)
│   ├── Lucide icons (ChevronDown, Menu, X, etc.)
│   └── CSS-in-JS styles
├── Main Component (PortfolioLanding)
│   ├── State declarations (isDark, lang, isMenuOpen, etc.)
│   ├── Effect hooks (scroll, counter animation)
│   ├── Translation object
│   ├── Sub-components (AnimatedCounter, SkillRing)
│   └── JSX structure (Navigation, Hero, Sections, Footer)
└── Export default
```

---

## Browser DevTools

### Useful Console Commands

```javascript
// Check theme
document.body.classList.contains('light-mode')

// Toggle theme
document.body.classList.toggle('light-mode')

// Check scroll position
window.scrollY

// Get all sections
document.querySelectorAll('section')

// Performance metrics
performance.getEntriesByType('navigation')[0]
```

---

## Testing Checklist

- [ ] Navigation links work
- [ ] Theme toggle switches modes
- [ ] Language toggle changes text (if implemented)
- [ ] Mobile menu opens/closes
- [ ] Animations are smooth
- [ ] Forms validate input
- [ ] Links open in correct target
- [ ] Responsive at all breakpoints
- [ ] Keyboard navigation works
- [ ] Performance is adequate

---

## Common Issues & Solutions

### Issue: Styles not applying
**Solution**: Verify Tailwind CSS content paths in `tailwind.config.js`

### Issue: Icons not showing
**Solution**: Ensure `lucide-react` is installed

### Issue: Animations stuttering
**Solution**: Check if GPU acceleration is enabled in browser

### Issue: Form not submitting
**Solution**: Add backend handler (Formspree, EmailJS, etc.)

### Issue: Mobile menu stuck
**Solution**: Check `isMenuOpen` state and toggle function

---

## Future Enhancement Ideas

- [ ] Add blog section with dynamic content
- [ ] Integrate GitHub API for live repository data
- [ ] Add animation library (Framer Motion)
- [ ] Multi-language support with i18n library
- [ ] Dark mode persistence
- [ ] Email form integration
- [ ] Analytics dashboard
- [ ] CMS integration (Contentful, Strapi)
- [ ] Progressive Web App (PWA)
- [ ] Lighthouse performance monitoring

---

## Additional Resources

- **React Documentation**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Lucide Icons**: https://lucide.dev
- **Accessibility**: https://www.w3.org/WAI/WCAG21/quickref/

---

<div align="center">

**Components Documentation Complete** ✅

For questions or contributions, please visit the GitHub repository.

</div>
