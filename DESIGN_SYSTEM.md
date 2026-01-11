# agen8 Design System

> **Complete design specifications for the agen8 brand and landing page**  
> Use this document to maintain visual consistency across all agen8 products and platforms.

---

## 🎨 Color Palette

### Primary Brand Colors

```css
/* Primary Orange - Main brand color */
--primary-orange: #fb6d26;
--primary-orange-hover: #ff7d36;
--accent-orange: #ff5500;

/* Background Colors */
--background-primary: #fee7d2;  /* Main page background - warm peach */
--background-white: #ffffff;    /* Cards, modals, buttons */
--background-cream: #fbfbfa;    /* Secondary sections */
--background-light-orange: #ffdfc4;  /* Search box tab */
--background-light-peach: #ffe0c5;   /* Video label box */

/* Text Colors */
--text-primary: #000000;        /* Primary text - black */
--text-gray: #9b9b9b;          /* Placeholder text */
--text-gray-600: #4b5563;      /* Secondary text */
--text-gray-400: #9ca3af;      /* Tertiary text */

/* UI Colors */
--border-gray: #e5e7eb;        /* Border color */
--gray-100: #f3f4f6;           /* Hover backgrounds */
--gray-placeholder: #949494;   /* Video placeholder */
--gray-hover: #858585;         /* Video placeholder hover */

/* Status Colors */
--success-bg: #dcfce7;         /* Success background (green-100) */
--success-color: #16a34a;      /* Success color (green-600) */
--error-color: #ef4444;        /* Error text (red-500) */
--error-border: #f87171;       /* Error border (red-400) */
```

### Gradient Colors (for Blur Effects)

```css
/* Orange blur gradients */
--blur-orange: rgba(251, 109, 38, 1);  /* #fb6d26 at 100% opacity */

/* Bottom gradient overlay */
--gradient-bottom: linear-gradient(
  0deg,
  rgba(255, 118, 39, 1) 0%,
  rgba(255, 255, 255, 0) 100%
);
```

---

## ✍️ Typography

### Font Families

```css
/* Primary Fonts */
--font-display: 'Libre Baskerville', Helvetica, serif;     /* Headings, brand name */
--font-body: 'Microsoft Sans Serif-Regular', Helvetica, sans-serif;  /* Body text, buttons */

/* Font Stack Fallback */
--font-sans-fallback: ui-sans-serif, system-ui, sans-serif, 
                      "Apple Color Emoji", "Segoe UI Emoji", 
                      "Segoe UI Symbol", "Noto Color Emoji";
```

### Font Import

```html
<!-- Add to <head> section -->
<link href="https://fonts.googleapis.com/css?family=Libre+Baskerville:400,italic" rel="stylesheet">
```

### Font Sizes (Desktop First)

```css
/* Heading Sizes */
--text-5xl: 64px;      /* Hero title "infinite" */
--text-4xl: 52px;      /* Large brand name */
--text-3xl: 48px;      /* Section headings */
--text-2xl: 40px;      /* Subheadings */
--text-xl: 36px;       /* Medium headings */
--text-lg: 18px;       /* Large body text */
--text-base: 16px;     /* Standard body text */
--text-sm: 14px;       /* Small text, labels */
--text-xs: 12px;       /* Extra small text */

/* Hero Title Sizes */
--hero-main: 64px;         /* "infinite" */
--hero-secondary: 55px;    /* "POSSIBILITIES, SINGLE, prompt" */
```

### Mobile Font Sizes

```css
/* Mobile overrides (<768px) */
--text-5xl-mobile: 32px;   /* Hero title */
--text-4xl-mobile: 24px;   /* Brand name */
--text-3xl-mobile: 28px;   /* Section headings */
--text-2xl-mobile: 21px;   /* Subheadings */
--text-xl-mobile: 24px;    /* Medium headings */
--text-lg-mobile: 14px;    /* Body text */
--text-base-mobile: 14px;  /* Standard text */
```

### Font Weights

```css
--font-normal: 400;
--font-bold: 700;
```

### Letter Spacing (Tracking)

```css
/* Brand Name "agen" */
--tracking-brand-large: -1.68px;   /* Desktop */
--tracking-brand-medium: -1.4px;   /* Mobile */

/* Italic Display Text */
--tracking-italic-hero: -4.92px;       /* "infinite" desktop */
--tracking-italic-hero-mobile: -2.5px; /* "infinite" mobile */
--tracking-italic-large: -4.51px;      /* "prompt" desktop */
--tracking-italic-large-mobile: -2.3px;/* "prompt" mobile */

/* Headings */
--tracking-heading: -1.87px;       /* Desktop headings */
--tracking-heading-mobile: -1.3px; /* Mobile headings */

/* Body text - minimal tracking */
--tracking-body: 0px;
--tracking-body-tight: -1.51px;    /* Some body sections */
```

### Line Heights

```css
--leading-tight: 1.2;
--leading-normal: 1.5;
--leading-relaxed: 1.625;

/* Specific line heights */
--leading-hero: 75.1px;      /* Hero "infinite" */
--leading-hero-secondary: 63px; /* Hero secondary text */
--leading-body: 24px;        /* Body text */
--leading-body-mobile: 20px; /* Mobile body text */
```

---

## 📏 Spacing System

### Standard Spacing Scale (Tailwind-based)

```css
--spacing-0: 0px;
--spacing-1: 4px;
--spacing-2: 8px;
--spacing-3: 12px;
--spacing-4: 16px;
--spacing-5: 20px;
--spacing-6: 24px;
--spacing-8: 32px;
--spacing-10: 40px;
--spacing-12: 48px;
--spacing-16: 64px;
--spacing-20: 80px;
--spacing-24: 96px;
--spacing-32: 128px;
```

### Component-Specific Spacing

```css
/* Header */
--header-top: 41px;
--header-side: 54px;
--header-gap: 34px;

/* Buttons */
--button-gap: 2-3px (8-12px);
--button-padding-x: 24px (px-6);
--button-padding-y: varies by height;

/* Cards */
--card-padding: 16px-32px;
--section-gap: 24px (mobile) / 48px (desktop);
```

---

## 🔲 Border Radius

```css
/* Standard Radius */
--radius-sm: 8px;      /* Small elements */
--radius-md: 12px;     /* Medium elements, video box */
--radius-lg: 20px;     /* Large cards, sections */
--radius-xl: 16px;     /* Buttons */
--radius-2xl: 24px;    /* Modals */

/* Component Specific */
--button-radius: 12px;
--card-radius: 20px;
--modal-radius: 24px;
--input-radius: 12px;
--search-card-radius: 20px;  /* Bottom corners only, top left is 0 */
--search-tab-radius: 8px 8px 0 0;  /* Top corners only */

/* Elliptical Radius (Blur Effects) */
--blur-radius: 380.5px / 253px;    /* Creates oval shape */
--blur-radius-alt: 422px / 291px;  /* Alternative oval */
```

---

## 🌫️ Shadows

```css
/* Button & Card Shadows */
--shadow-button: 0px 2px 4px rgba(0, 0, 0, 0.25);
--shadow-card: 0px 4px 12px rgba(0, 0, 0, 0.25);
--shadow-modal: 0px 8px 24px rgba(0, 0, 0, 0.3);  /* 2xl shadow */

/* Search Box Shadows */
--shadow-search-tab: 0px -0.5px 4px rgba(0, 0, 0, 0.25);
--shadow-search-card: 0px 4px 12px rgba(0, 0, 0, 0.25);

/* Video Label Shadow */
--shadow-video-label: 0px 4px 4px rgba(0, 0, 0, 0.25);
```

### Tailwind Shadow Classes

```javascript
// Use in className
'shadow-[0px_2px_4px_#00000040]'    // Buttons
'shadow-[0px_4px_12px_#00000040]'   // Cards
'shadow-2xl'                         // Modals (built-in)
```

---

## 🎭 Background Effects

### Blur Circles (Orange Glow)

```css
/* Properties for blur effect divs */
.blur-effect {
  background: #fb6d26;
  border-radius: 380.5px / 253px;  /* Elliptical */
  filter: blur(150px);
  position: absolute;
}

/* Sizes */
--blur-large: 761px × 506px;
--blur-medium: 844px × 582px;
--blur-small: 1012px × 568px;

/* Alternative blur strength */
--blur-medium-strength: blur(150px);  /* Main blur */
--blur-gradient: blur(50px);          /* Bottom gradient overlay */
```

### Positioning Examples

```javascript
// Top section blur
top: 226px, left: calc(50% - 406px), width: 844px, height: 582px

// Left side blur (dual layer)
top: 1215px, left: -32px, width: 1012px, height: 568px
  // Contains two overlapping 761×506px circles

// Bottom section blur
top: 2860px, left: 226px, width: 1296px, height: 537px
  // Two circles with rotate-180
```

### Background Images (Hidden on Mobile)

All decorative background images use `hidden lg:block` to hide on mobile:
- Group images (group-86.png, group-5.png, group-87.png)
- Bottom overlay image (image-17.png)

---

## ✨ Animations

### Keyframes Definitions

```css
/* Fade In (downward) */
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}

/* Fade Up */
@keyframes fade-up {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}

/* Marquee (Horizontal Scroll) */
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

/* Placeholder Fade (Rotating Text) */
@keyframes placeholder-fade {
  0%, 100% {
    opacity: 0.7;
  }
  50% {
    opacity: 1;
  }
}

/* Spin (Loading) */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
```

### Animation Usage

```css
/* Fade-in with delay */
.animate-fade-in {
  animation: fade-in 1s ease forwards;
  opacity: 0;
  transform: translateY(-1rem);
}

/* Staggered delays using custom property */
--animation-delay: 200ms;
animation-delay: var(--animation-delay);

/* Marquee with custom duration */
.animate-marquee {
  animation: marquee var(--duration) infinite linear;
}
--duration: 25s;

/* Reverse direction */
animation-direction: reverse;

/* Placeholder animation */
.animate-placeholder {
  animation: placeholder-fade 4s ease-in-out infinite;
}
```

### Transition Classes

```css
/* Standard transitions */
.transition-all {
  transition-property: all;
  transition-duration: 300ms;
  transition-timing-function: ease;
}

/* Common hover effects */
.hover\:scale-105:hover {
  transform: scale(1.05);
}

.hover\:opacity-100:hover {
  opacity: 1;
}

.hover\:brightness-75:hover {
  filter: brightness(0.75);
}
```

---

## 🔘 Button Styles

### Primary Button (Orange)

```jsx
// Desktop
className="h-[53px] bg-[#fb6d26] rounded-xl shadow-[0px_2px_4px_#00000040] 
           hover:bg-[#ff7d36] hover:scale-105 transition-all duration-300 
           flex items-center gap-2 px-6 text-base text-black"

// Mobile
className="h-[48px] bg-[#fb6d26] rounded-xl shadow-[0px_2px_4px_#00000040] 
           hover:bg-[#ff7d36] hover:scale-105 transition-all duration-300 
           flex items-center gap-2 px-4 text-sm text-black"
```

### Secondary Button (White/Outline)

```jsx
// Desktop
className="h-[53px] bg-white rounded-xl shadow-[0px_2px_4px_#00000040] 
           hover:bg-gray-100 hover:scale-105 transition-all duration-300 
           flex items-center gap-2 px-6 text-base text-black"

// Mobile
className="h-[48px] bg-white rounded-xl shadow-[0px_2px_4px_#00000040] 
           hover:bg-gray-100 hover:scale-105 transition-all duration-300 
           flex items-center gap-2 px-4 text-sm text-black"
```

### Large CTA Button

```jsx
className="w-[242px] h-[69px] bg-white rounded-xl shadow-[0px_2px_4px_#00000040] 
           hover:bg-gray-100 hover:scale-105 transition-all duration-300 
           flex items-center gap-3 text-xl text-black"
```

### Button Elements

```jsx
// Button with arrow icon
<Button>
  <span>Join the waitlist</span>
  <img src="/resources/Arrow right.svg" alt="arrow" className="w-5 h-5" />
</Button>

// Loading state button
<Button disabled>
  <svg className="animate-spin h-5 w-5">...</svg>
  <span>Joining...</span>
</Button>
```

---

## 📦 Component Dimensions

### Header

```css
/* Desktop */
--header-height: auto;
--logo-size: 36px (text-4xl);
--button-height: 53px;
--header-padding-x: 54px;
--header-padding-y: 41px (from top);

/* Mobile */
--header-height: auto;
--logo-size: 24px (text-2xl);
--button-height: 48px;
--header-padding: 16px (px-4);
```

### Hero Section

```css
/* Desktop */
--hero-width: 867px;
--hero-top: 208px;  /* top-52 */
--title-size: 64px;

/* Mobile */
--hero-width: 100%;
--hero-padding: 16px;
--title-size: 32px;
```

### Search Box

```css
/* Desktop */
--search-container-width: 789px;
--search-card-height: 177px;
--search-tab-width: 280px;
--search-tab-height: 44px;
--textarea-width: 710px;
--textarea-height: 130px;
--textarea-top: 20px;
--textarea-left: 25px;

/* Mobile */
--search-container-width: 100%;
--search-card-min-height: 150px;
--search-tab-height: 44px;
--search-padding: 16px;

/* Send Button (Eclipse) */
--send-button-size-desktop: 45px;
--send-button-size-mobile: 40px;
--send-icon-size-desktop: 24px;
--send-icon-size-mobile: 20px;
```

### Section Cards

```css
/* "Why agen8?" Card */
--card-width-desktop: 1315px;
--card-height-desktop: 715px;
--card-min-height-mobile: 500px;
--card-padding-top: 52px (desktop), 24px (mobile);
--card-padding-x: 80px (desktop), 16px (mobile);

/* Video Box */
--video-width: 641px;
--video-height: 367px;
--video-aspect-ratio: 16/9;
--video-border: 12px solid white (desktop), 8px (mobile);

/* Video Label */
--label-width-desktop: 262px;
--label-height-desktop: 59px;
--label-width-mobile: 220px;
--label-height-mobile: 48px;
--label-top: -15px (desktop), -12px (mobile);
```

### Modal (Waitlist Popup)

```css
--modal-max-width: 450px;
--modal-padding-desktop: 32px;
--modal-padding-mobile: 24px;
--modal-border-radius: 24px;

/* Modal Elements */
--close-button-size: 24px;
--close-button-top-right: 16px;
--input-height: 48px;
--submit-button-height: 48px;
--success-icon-size: 64px (desktop), 56px (mobile);
```

### Logos (Company Marquee)

```css
--logo-height-desktop: 64px (h-16);
--logo-height-mobile: 40px (h-10);
--logo-width-range: 96px - 160px;
--logo-gap-desktop: 48px;
--logo-gap-mobile: 24px;
--logo-opacity-default: 0.8;
--logo-opacity-hover: 1;
```

---

## 📱 Responsive Breakpoints

```javascript
// Tailwind breakpoints
'sm': '640px',   // Small devices
'md': '768px',   // Tablets
'lg': '1024px',  // Desktop
'xl': '1280px',  // Large desktop
'2xl': '1536px', // Extra large

// Usage in agen8 landing:
// Mobile-first: Default styles = mobile
// Desktop: 'lg:' prefix for ≥1024px

// Examples:
'text-sm lg:text-base'      // 14px mobile, 16px desktop
'h-10 lg:h-16'              // 40px mobile, 64px desktop
'hidden lg:block'           // Hidden mobile, visible desktop
'lg:hidden'                 // Visible mobile, hidden desktop
'px-4 lg:px-0'              // 16px padding mobile, 0 desktop
```

### Mobile-Specific Rules

```javascript
// Hide decorative elements on mobile
'hidden lg:block'  // Background blur effects, images, decorative graphics

// Mobile-only elements
'lg:hidden'        // Mobile button containers

// Responsive layout
'flex-col lg:flex-row'         // Stack mobile, side-by-side desktop
'relative lg:absolute'         // Normal flow mobile, absolute desktop
'w-full lg:w-[specific]'       // Full width mobile, fixed desktop
```

---

## 🎯 Component Patterns

### Search Box with Rotating Examples

```javascript
// Example texts array
const exampleTexts = [
  "E.g., build automated CRM for Gmail/Outlook...",
  "E.g., create an automated Notion manager...",
  "E.g., develop an automated finance optimizer..."
];

// Rotation logic
React.useEffect(() => {
  const interval = setInterval(() => {
    setCurrentExampleIndex((prev) => (prev + 1) % 3);
  }, 4000);  // 4 seconds
  return () => clearInterval(interval);
}, []);

// Textarea with placeholder
<textarea
  placeholder={exampleTexts[currentExampleIndex]}
  className="placeholder:text-[#9b9b9b] 
             placeholder:transition-opacity 
             placeholder:duration-500"
/>
```

### Staggered Fade-In Animation

```javascript
// Add to elements with increasing delays
className="translate-y-[-1rem] animate-fade-in opacity-0"

// With custom delay
className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]"

// Delay progression:
// Element 1: 0ms (no delay)
// Element 2: 200ms
// Element 3: 400ms
// Element 4: 600ms
// Element 5: 800ms
```

### Modal States

```javascript
// Three states: idle, loading, success, error
const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

// Idle/Form State: Show input and submit button
// Loading State: Show spinner, disable inputs
// Success State: Show checkmark, success message
// Error State: Show error message, keep form visible
```

---

## 🖼️ Images & Icons

### Icon Sizes

```css
/* Social Icons */
--social-icon-size: 44px (w-11 h-11 desktop), 40px (mobile);

/* Arrow Icons (in buttons) */
--arrow-size-large: 24px (w-6 h-6);
--arrow-size-medium: 20px (w-5 h-5);
--arrow-size-small: 16px (w-4 h-4);

/* Infinity Logo */
--infinity-size-desktop: 40px (w-10 h-10);
--infinity-size-mobile: 32px (w-8 h-8);

/* Video Icon */
--video-icon-size-desktop: 24px (w-6 h-6);
--video-icon-size-mobile: 20px (w-5 h-5);

/* Play Button (in video placeholder) */
--play-button-size-desktop: 80px (w-20 h-20);
--play-button-size-mobile: 64px (w-16 h-16);
--play-icon-size-desktop: 40px;
--play-icon-size-mobile: 32px;
```

### Image Processing

```css
/* Company Logos */
.logo {
  object-fit: contain;
  opacity: 0.8;
  transition: all 300ms;
}

.logo:hover {
  opacity: 1;
  filter: brightness(0.75);
}

/* App Integration Image */
.app-image {
  object-fit: cover;
  transform: scale(1.25);  /* Desktop */
  transform: scale(1.1);   /* Mobile */
}
```

---

## 🔤 Text Patterns

### Brand Name Styling

```jsx
// Large brand name
<span className="text-black tracking-[-1.68px]">agen</span>
<span className="italic text-[#ff5500] tracking-[0]">8</span>

// With serif font (Libre Baskerville)
<span className="[font-family:'Libre_Baskerville',Helvetica]">agen</span>
<span className="[font-family:'Libre_Baskerville',Helvetica] italic text-[#ff5500]">8</span>
```

### Hero Title Pattern

```jsx
<h1>
  <span className="italic text-black tracking-[-4.92px] leading-[75.1px]">
    infinite
  </span>
  <span> </span>
  <span className="text-black tracking-[-1.51px]">
    POSSIBILITIES<br/>SINGLE
  </span>
  <span> </span>
  <span className="italic text-black tracking-[-4.51px]">
    prompt
  </span>
  <span>.</span>
</h1>
```

### Mixed Font Text

```jsx
<p>
  <span className="[font-family:'Microsoft_Sans_Serif-Regular',Helvetica]">
    Enable your limitless potential with{" "}
  </span>
  <span className="[font-family:'Libre_Baskerville',Helvetica] italic">
    agen8
  </span>
  <span className="[font-family:'Microsoft_Sans_Serif-Regular',Helvetica]">
    , You can now automate infinite number of apps simultaneously.
  </span>
</p>
```

---

## 🎨 Form Elements

### Input Field

```jsx
<input
  type="email"
  className="w-full px-4 py-3 
             border-2 border-gray-200 
             rounded-xl 
             focus:outline-none 
             focus:border-[#ff5500] 
             transition-colors
             disabled:opacity-50 
             disabled:cursor-not-allowed"
/>

// Error state
className="border-red-500 focus:border-red-600"
```

### Textarea (Search Box)

```jsx
<textarea
  className="w-full h-full p-4 
             text-base text-black 
             bg-transparent border-0 outline-none resize-none
             placeholder:text-[#9b9b9b] 
             placeholder:transition-opacity 
             placeholder:duration-500"
  style={{
    scrollbarWidth: 'thin',
    scrollbarColor: '#e0e0e0 transparent'
  }}
/>
```

---

## 🌐 Backdrop & Overlays

### Modal Backdrop

```jsx
className="fixed inset-0 z-50 
           flex items-center justify-center 
           bg-black/50 backdrop-blur-sm 
           animate-fade-in 
           px-4"
```

### Gradient Overlays

```css
/* Bottom gradient (above footer) */
.gradient-overlay {
  position: absolute;
  background: linear-gradient(
    0deg,
    rgba(255, 118, 39, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  filter: blur(50px);
}
```

---

## 📐 Layout Patterns

### Absolute Positioning (Desktop)

```javascript
// Pattern used throughout landing page
className="lg:absolute relative 
           top-0 lg:top-[XXXpx] 
           left-0 lg:left-[calc(50%-YYYpx)]"

// Centered elements
left: calc(50% - [half-width]px)

// Examples:
left: calc(50% - 433px)  // 867px wide element (867/2 = 433)
left: calc(50% - 657px)  // 1315px wide element (1315/2 = 657)
```

### Full-Width Mobile Pattern

```javascript
className="w-full lg:w-[XXXpx] 
           px-4 lg:px-0"
```

### Flexbox Patterns

```javascript
// Mobile stack, desktop row
className="flex flex-col lg:flex-row items-center justify-between"

// Side-by-side mobile buttons
className="flex flex-row items-center gap-3"

// Centered content
className="flex items-center justify-center"
```

---

## 🎭 Accessibility & UX

### Focus States

```css
/* Input focus */
.input:focus {
  outline: none;
  border-color: #ff5500;
}

/* Button focus (keyboard nav) */
.button:focus-visible {
  outline: 2px solid #ff5500;
  outline-offset: 2px;
}
```

### Disabled States

```css
.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.disabled:hover {
  transform: none;  /* Prevent hover effects */
}
```

### Loading States

```jsx
// Spinner icon
<svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
  <circle className="opacity-25" cx="12" cy="12" r="10" 
          stroke="currentColor" strokeWidth="4" />
  <path className="opacity-75" fill="currentColor" 
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
</svg>
```

### Success/Error Icons

```jsx
// Success checkmark
<svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
        d="M5 13l4 4L19 7" />
</svg>
```

---

## 📚 Best Practices

### 1. Responsive Design Approach

- **Mobile-first base styles**, then `lg:` overrides for desktop (≥1024px)
- Hide decorative elements on mobile: `hidden lg:block`
- Use relative positioning on mobile, absolute on desktop
- Full width on mobile (`w-full`), fixed widths on desktop

### 2. Color Usage

- Primary brand color (`#fb6d26`) for CTA buttons and highlights
- Accent color (`#ff5500`) for brand "8" and important text
- Black text on warm backgrounds for high readability
- White backgrounds for cards/modals to create hierarchy

### 3. Typography Hierarchy

- **Display text**: Libre Baskerville (italic for emphasis)
- **Body text**: Microsoft Sans Serif
- **Tracking**: Negative for large display text, zero for body
- **Line height**: Generous (1.5-1.6) for readability

### 4. Animation Guidelines

- **Subtle entrance animations** (fade-in, translate)
- **Staggered delays** (200ms increments) for sequential elements
- **Smooth transitions** (300ms ease) for hover states
- **Scale effects** (1.05x) for interactive elements

### 5. Spacing Consistency

- Use 4px base unit for spacing
- Increase spacing on desktop (2x mobile values common)
- Maintain visual breathing room with generous padding

### 6. Button Design

- **Consistent heights**: 53px (desktop), 48px (mobile)
- **Arrow icons** for forward actions
- **Scale on hover** (1.05x) for interactivity feedback
- **Shadow** for depth and elevation

---

## 🚀 Quick Reference

### Common Tailwind Classes

```javascript
// Backgrounds
'bg-[#fee7d2]'        // Main background
'bg-[#fb6d26]'        // Primary orange
'bg-white'            // Cards, buttons

// Text
'text-black'          // Primary text
'text-[#ff5500]'      // Accent orange
'text-base lg:text-lg'// Responsive sizing

// Spacing
'px-4 lg:px-0'        // Mobile padding, no desktop
'gap-3 lg:gap-6'      // Responsive gaps
'mt-6 lg:mt-8'        // Responsive margins

// Effects
'shadow-[0px_2px_4px_#00000040]'  // Button shadow
'hover:scale-105'     // Hover scale
'transition-all duration-300'     // Smooth transitions
'rounded-xl'          // 12px radius

// Layout
'flex items-center justify-between'
'absolute top-0 left-0'
'w-full lg:w-[789px]'

// Visibility
'hidden lg:block'     // Hide mobile, show desktop
'lg:hidden'           // Show mobile, hide desktop
```

### CSS Variables in Tailwind

```javascript
// Animation delay
'[--animation-delay:200ms]'

// Marquee duration
'[--duration:25s]'

// Font family
'[font-family:\'Libre_Baskerville\',Helvetica]'

// Text stroke
'[-webkit-text-stroke:0.5px_#fbc49c]'
```

---

## 📖 Implementation Notes

### Setting Up Fonts

```html
<!-- Add to <head> in index.html -->
<link href="https://fonts.googleapis.com/css?family=Libre+Baskerville:400,italic" 
      rel="stylesheet">
```

### Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-orange': '#fb6d26',
        'brand-orange-hover': '#ff7d36',
        'accent-orange': '#ff5500',
        'background-peach': '#fee7d2',
      },
      animation: {
        'fade-in': 'fade-in 1s ease forwards',
        'marquee': 'marquee var(--duration) infinite linear',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'none' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
};
```

---

## 🎯 Brand Voice & Personality

### Visual Identity
- **Modern & Clean**: Minimal UI with intentional whitespace
- **Warm & Inviting**: Peach/orange color palette
- **Dynamic**: Subtle animations and micro-interactions
- **Professional**: High contrast, readable typography

### Design Principles
1. **Simplicity**: Clear hierarchy, minimal cognitive load
2. **Consistency**: Unified spacing, color, and typography systems
3. **Responsiveness**: Seamless experience across all devices
4. **Accessibility**: High contrast, clear focus states, semantic HTML
5. **Performance**: Optimized animations, efficient asset loading

---

## 📌 Asset Checklist

### Required Images
- `/resources/infiinnnity.png` - Infinity logo (search box)
- `/resources/Arrow right.svg` - Right arrow icon (buttons)
- `/resources/Ellipse 9.svg` - Circle background (send button)
- `/resources/Send.svg` - Send icon
- `/resources/Frame 8.svg` - Favicon
- `/resources/majesticons_video.svg` - Video icon
- `/resources/anyAPP_image.png` - App integrations image
- Company logos: ACKO, build3, emergent, bookmyshow, etc.

### External Resources
- Social media icons (from animaapp CDN)
- Background images (from animaapp CDN)

---

**Last Updated**: January 2026  
**Version**: 1.0  
**Maintained By**: agen8 Design Team

---

*This design system is the single source of truth for all agen8 visual design decisions. When implementing features in the backend or main product, always reference this document to ensure brand consistency.*
