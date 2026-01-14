# 🚀 Anima to Production: Complete Transformation Guide

> **Copy this entire prompt and give it to AI when working with new Anima-generated code**

---

## 📋 CONTEXT: What We're Starting With

I have an **Anima-generated React/TypeScript application** that needs to be transformed from broken, static code into a **production-ready, responsive, interactive application** with backend integration.

### What Anima Typically Generates (Problems):
1. ❌ **Static, non-interactive UI** - Just visual mockup with no functionality
2. ❌ **Desktop-only with absolute positioning** - No mobile responsiveness
3. ❌ **Broken asset paths** - Images reference wrong directories
4. ❌ **External CDN dependencies** - Links to animaapp.com for images
5. ❌ **No state management** - No React hooks or interactivity
6. ❌ **No backend integration** - No API calls, database, or data persistence
7. ❌ **Build errors** - TypeScript errors, missing types, unused imports
8. ❌ **No real buttons/links** - Buttons don't do anything
9. ❌ **Inline hardcoded styles** - No organized design system
10. ❌ **Minimal file structure** - Everything in one component

---

## 🎯 GOAL: What We Need to Achieve

Transform the Anima code into:
- ✅ **Fully responsive** (mobile-first with Tailwind breakpoints)
- ✅ **Interactive & functional** (forms, modals, state management)
- ✅ **Backend-integrated** (Supabase for database, authentication)
- ✅ **Production-ready** (builds without errors, optimized assets)
- ✅ **Deployable** (Netlify/Vercel-ready with proper config)
- ✅ **Brand-consistent** (following the design system)
- ✅ **Accessible** (proper focus states, keyboard navigation)

---

## 📁 REQUIRED FILE STRUCTURE

```
project-root/
├── public/                          # Static assets (Vite serves this)
│   └── resources/                   # All images, SVGs, fonts
│       ├── logo.png
│       ├── icon.svg
│       └── [all other assets]
│
├── src/
│   ├── screens/                     # Page-level components
│   │   └── [PageName]/
│   │       ├── index.ts             # Export barrel
│   │       └── [PageName].tsx       # Main page component
│   │
│   ├── components/                  # Reusable components
│   │   └── ui/                      # shadcn/ui components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       └── index.ts
│   │
│   ├── lib/                         # Utilities & configs
│   │   ├── supabase.ts             # Supabase client
│   │   └── utils.ts                # Helper functions (cn, etc.)
│   │
│   ├── App.tsx                      # Main app component
│   ├── main.tsx                     # Entry point
│   ├── index.css                    # Global styles + Tailwind
│   └── index.tsx                    # Alternative entry (if used)
│
├── dist/                            # Build output (gitignored)
│
├── index.html                       # HTML entry point
├── package.json                     # Dependencies
├── vite.config.ts                  # Vite configuration
├── tailwind.config.js              # Tailwind configuration
├── postcss.config.js               # PostCSS configuration
├── tsconfig.json                   # TypeScript configuration
├── netlify.toml                    # Netlify deployment config
├── DESIGN_SYSTEM.md                # Design specifications
└── .gitignore

```

---

## 🔧 REQUIRED DEPENDENCIES

### Core Dependencies (package.json)

```json
{
  "dependencies": {
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-router-dom": "^7.11.0",
    "@supabase/supabase-js": "^2.89.0",
    "@radix-ui/react-slot": "^1.2.4",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "tailwind-merge": "^3.4.0",
    "tailwindcss-animate": "^1.0.7",
    "lucide-react": "^0.562.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^5.1.1",
    "vite": "^7.2.4",
    "typescript": "~5.9.3",
    "tailwindcss": "^3.4.17",
    "autoprefixer": "^10.4.23",
    "postcss": "^8.5.6",
    "@types/react": "^19.2.5",
    "@types/react-dom": "^19.2.3",
    "@types/node": "^24.10.1"
  }
}
```

### Install Commands

```bash
# Core stack
npm install react react-dom react-router-dom

# Supabase (backend)
npm install @supabase/supabase-js

# UI components (shadcn/ui dependencies)
npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge

# Animations
npm install tailwindcss-animate

# Icons (optional)
npm install lucide-react

# Dev dependencies
npm install -D vite @vitejs/plugin-react typescript tailwindcss autoprefixer postcss
npm install -D @types/react @types/react-dom @types/node
```

---

## ⚙️ CONFIGURATION FILES

### 1. vite.config.ts

```typescript
import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  publicDir: "./public",  // ← CRITICAL: Serve static assets from public/
  base: "./",             // ← CRITICAL: Relative paths for deployment
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
});
```

**Key Points:**
- `publicDir: "./public"` - Ensures `/resources/` images are served correctly
- `base: "./"` - Makes paths relative for any hosting platform

### 2. netlify.toml (Deployment)

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "20"
```

### 3. tailwind.config.js

```javascript
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      // Add custom animations
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "none" },
        },
        "marquee": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "fade-in": "fade-in 1s ease forwards",
        "marquee": "marquee var(--duration) infinite linear",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
```

### 4. src/lib/supabase.ts (Backend Setup)

```typescript
import { createClient } from '@supabase/supabase-js';

// Replace with your actual values
const supabaseUrl = 'https://YOUR_PROJECT_ID.supabase.co';
const supabaseAnonKey = 'YOUR_ANON_KEY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types (example)
export interface WaitlistEntry {
  id?: string;
  email: string;
  created_at?: string;
}
```

### 5. src/lib/utils.ts

```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## 🎨 DESIGN SYSTEM TO FOLLOW

I have a **complete design system** documented in `DESIGN_SYSTEM.md`. Here are the key values:

### Colors

```javascript
// Primary
'#fb6d26'  // Primary orange (buttons, CTAs)
'#ff7d36'  // Hover state
'#ff5500'  // Accent orange (brand highlights)

// Backgrounds
'#fee7d2'  // Main page background (warm peach)
'#ffffff'  // Cards, modals, buttons
'#ffdfc4'  // Secondary sections

// Text
'#000000'  // Primary text
'#9b9b9b'  // Placeholder/secondary text
```

### Typography

```javascript
// Fonts
'Libre Baskerville'          // Display, headings, brand name (italic for emphasis)
'Microsoft Sans Serif'       // Body text, buttons

// Font Sizes (Desktop → Mobile)
text-5xl: 64px → 32px       // Hero titles
text-4xl: 52px → 24px       // Large headings
text-2xl: 40px → 21px       // Subheadings
text-base: 16px → 14px      // Body text

// Letter Spacing
--tracking-brand: -1.68px   // Brand name "agen"
--tracking-italic: -4.92px  // Large italic display text
```

### Components

```javascript
// Buttons
Height: 53px (desktop), 48px (mobile)
Border-radius: 12px
Shadow: 0px 2px 4px rgba(0,0,0,0.25)
Padding: px-6 (desktop), px-4 (mobile)
Hover: scale(1.05) + color change

// Cards
Border-radius: 20px
Shadow: 0px 4px 12px rgba(0,0,0,0.25)
Background: white

// Modals
Border-radius: 24px
Max-width: 450px
Backdrop: bg-black/50 backdrop-blur-sm
```

### Responsive Breakpoints

```javascript
// Mobile-first approach
Default (< 768px)  = Mobile styles
lg: (≥ 1024px)     = Desktop styles

// Usage patterns:
'w-full lg:w-[789px]'        // Full width mobile, fixed desktop
'px-4 lg:px-0'               // Padding mobile, none desktop
'hidden lg:block'            // Hide mobile, show desktop
'text-sm lg:text-base'       // 14px mobile, 16px desktop
```

---

## 🔨 TRANSFORMATION PROCESS (Step-by-Step)

### PHASE 1: Setup & Asset Fixing

#### Step 1: Fix Asset Paths
```bash
# Move all assets from root or wrong location
mv resources/* public/resources/
# OR if assets are scattered:
mkdir -p public/resources
cp [source]/*.{png,jpg,svg,pdf} public/resources/
```

**Update image references in code:**
```javascript
// BEFORE (Anima generates):
src="https://c.animaapp.com/mk3i7h91/img/logo.png"
src="/static/logo.png"

// AFTER:
src="/resources/logo.png"
```

#### Step 2: Install Dependencies
```bash
npm install
npm install @supabase/supabase-js  # For backend
```

#### Step 3: Verify Build Configuration
- Check `vite.config.ts` has `publicDir: "./public"`
- Check `tailwind.config.js` includes all content paths
- Check `netlify.toml` exists with correct settings

---

### PHASE 2: Make Responsive (Mobile-First)

#### Step 4: Remove Fixed Sizing from Main Container

```javascript
// BEFORE (Anima generates):
<div className="bg-[#fee7d2] w-[1512px] h-[4254px]">

// AFTER (Responsive):
<div className="bg-[#fee7d2] overflow-hidden w-full min-h-screen">
```

#### Step 5: Convert Absolute Positioning to Responsive Layout

**Pattern to follow:**

```javascript
// BEFORE (Desktop-only absolute):
<div className="absolute top-[474px] left-[calc(50%-394px)] w-[789px]">

// AFTER (Mobile-first responsive):
<div className="lg:absolute relative 
                top-0 lg:top-[474px] 
                left-0 lg:left-[calc(50%-394px)] 
                w-full lg:w-[789px] 
                px-4 lg:px-0 
                mt-8 lg:mt-0">
```

**Key responsive patterns:**
- `relative lg:absolute` - Normal flow mobile, positioned desktop
- `w-full lg:w-[XXpx]` - Full width mobile, fixed desktop
- `px-4 lg:px-0` - Padding mobile, none desktop
- `text-sm lg:text-base` - Smaller text mobile
- `h-10 lg:h-16` - Smaller heights mobile

#### Step 6: Hide Decorative Elements on Mobile

```javascript
// Background blur effects, decorative images
<div className="hidden lg:block ...">
  {/* Blur circles, background images, etc. */}
</div>
```

#### Step 7: Create Mobile-Specific Layouts

```javascript
// Example: Mobile-only button container
<div className="lg:hidden flex flex-row gap-3 px-4 mt-6">
  {/* Mobile buttons */}
</div>

// Desktop-only navigation
<nav className="hidden lg:flex items-center gap-[34px]">
  {/* Desktop buttons */}
</nav>
```

---

### PHASE 3: Add Interactivity & State Management

#### Step 8: Add React Hooks for State

```javascript
import { useState, useEffect } from "react";

// Add state for:
const [isModalOpen, setIsModalOpen] = useState(false);
const [email, setEmail] = useState("");
const [isLoading, setIsLoading] = useState(false);
const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
const [errorMessage, setErrorMessage] = useState("");
```

#### Step 9: Make Buttons Functional

```javascript
// BEFORE (Anima - does nothing):
<Button className="...">Join the waitlist</Button>

// AFTER (Interactive):
<Button 
  onClick={() => setIsModalOpen(true)}
  className="...">
  Join the waitlist
</Button>

// Or with external link:
<Button asChild className="...">
  <a href="https://calendly.com/..." target="_blank" rel="noopener noreferrer">
    Schedule a call
  </a>
</Button>
```

#### Step 10: Add Animations

```javascript
// Staggered fade-in animations
className="translate-y-[-1rem] animate-fade-in opacity-0"

// With delay
className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]"

// Hover effects
className="hover:scale-105 hover:bg-gray-100 transition-all duration-300"

// Rotating text (useEffect)
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % texts.length);
  }, 4000);
  return () => clearInterval(interval);
}, []);
```

---

### PHASE 4: Backend Integration (Supabase)

#### Step 11: Set Up Supabase Client

Create `src/lib/supabase.ts`:
```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://YOUR_PROJECT.supabase.co';
const supabaseAnonKey = 'YOUR_ANON_KEY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

#### Step 12: Create Database Table (Run in Supabase SQL Editor)

```sql
-- Create table
CREATE TABLE waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Allow public INSERT
CREATE POLICY "Allow public insert" ON waitlist
  FOR INSERT TO anon WITH CHECK (true);

-- Allow public SELECT (for duplicate check)
CREATE POLICY "Allow public select" ON waitlist
  FOR SELECT TO anon USING (true);
```

#### Step 13: Implement Form Submission

```javascript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);
  setSubmitStatus("idle");
  setErrorMessage("");

  try {
    const { error } = await supabase
      .from("waitlist")
      .insert([{ email }])
      .select();

    if (error) {
      // Check for duplicate email
      if (error.code === "23505") {
        setErrorMessage("This email is already registered!");
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
      setSubmitStatus("error");
      setIsLoading(false);
      return;
    }

    // Success!
    setSubmitStatus("success");
    setIsLoading(false);

    // Reset after 2 seconds
    setTimeout(() => {
      setEmail("");
      setSubmitStatus("idle");
      setIsModalOpen(false);
    }, 2000);
  } catch (err) {
    console.error("Error:", err);
    setErrorMessage("Network error. Please check your connection.");
    setSubmitStatus("error");
    setIsLoading(false);
  }
};
```

#### Step 14: Create Modal with Form States

```javascript
{isModalOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center 
                  bg-black/50 backdrop-blur-sm px-4">
    <div className="bg-white rounded-2xl p-8 max-w-[450px] w-full">
      {/* Close button */}
      <button onClick={() => setIsModalOpen(false)}>×</button>
      
      {submitStatus === "success" ? (
        // Success state - show checkmark and message
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 rounded-full 
                          flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600">✓</svg>
          </div>
          <h2>You're on the list!</h2>
          <p>We'll reach out soon at {email}</p>
        </div>
      ) : (
        // Form state
        <form onSubmit={handleSubmit}>
          <h2>Join the waitlist</h2>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
            className={submitStatus === "error" 
              ? "border-red-500" 
              : "border-gray-200"}
          />
          
          {submitStatus === "error" && (
            <p className="text-red-600">{errorMessage}</p>
          )}
          
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <>
                <svg className="animate-spin">...</svg>
                <span>Joining...</span>
              </>
            ) : (
              <span>Join Waitlist</span>
            )}
          </Button>
        </form>
      )}
    </div>
  </div>
)}
```

---

### PHASE 5: Clean Up & Fix Errors

#### Step 15: Fix TypeScript Errors

```javascript
// BEFORE:
export const Page = (): JSX.Element => {  // ← React 19 error

// AFTER:
export const Page = (): React.JSX.Element => {

// Remove unused imports
// BEFORE:
import { Icon1, Icon2 } from "some-package";  // ← Unused

// AFTER:
// (deleted)
```

#### Step 16: Remove Unused Variables

```javascript
// BEFORE:
const { data, error } = await supabase...  // ← 'data' unused

// AFTER:
const { error } = await supabase...
```

#### Step 17: Test Build

```bash
npm run build
```

Fix any errors that appear. Common issues:
- Unused imports/variables
- Wrong JSX.Element type
- Missing return statements
- Type mismatches

---

### PHASE 6: SEO & Deployment

#### Step 18: Add Favicon & Meta Tags

In `index.html`:
```html
<head>
  <meta charset="utf-8" />
  <title>Your App - Tagline</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/resources/favicon.svg" />
  <link rel="apple-touch-icon" href="/resources/favicon.svg" />
  
  <!-- SEO Meta Tags -->
  <meta name="description" content="Your app description for search engines" />
  
  <!-- Open Graph (Social Sharing) -->
  <meta property="og:title" content="Your App - Tagline" />
  <meta property="og:description" content="Your app description" />
  <meta property="og:image" content="/resources/og-image.png" />
  <meta property="og:type" content="website" />
  
  <!-- Twitter Card -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:title" content="Your App - Tagline" />
  <meta property="twitter:description" content="Your app description" />
  <meta property="twitter:image" content="/resources/og-image.png" />
  
  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Libre+Baskerville:400,italic" rel="stylesheet">
</head>
```

#### Step 19: Deploy to Netlify

```bash
# Initialize git if not done
git init
git add .
git commit -m "Initial commit: Production-ready app"

# Push to GitHub
git remote add origin https://github.com/username/repo.git
git push -u origin main

# Connect to Netlify
# 1. Go to app.netlify.com
# 2. "New site from Git"
# 3. Select your repo
# 4. Build settings auto-detected from netlify.toml
# 5. Deploy!
```

---

## 🎯 KEY PATTERNS & BEST PRACTICES

### 1. Mobile-First Responsive Pattern

```javascript
// Always start with mobile, add lg: for desktop
className="
  /* Mobile defaults */
  w-full px-4 mt-6 text-sm h-10
  
  /* Desktop overrides */
  lg:w-[789px] lg:px-0 lg:mt-0 lg:text-base lg:h-16
"
```

### 2. Component State Management

```javascript
// Always destructure and organize states
const [isOpen, setIsOpen] = useState(false);         // Boolean toggles
const [formData, setFormData] = useState("");        // Form inputs
const [status, setStatus] = useState<Status>("idle"); // Type-safe status
const [error, setError] = useState("");              // Error messages
```

### 3. Loading States

```javascript
// Always show loading feedback
{isLoading ? (
  <><svg className="animate-spin" />Loading...</>
) : (
  <>Submit</>
)}
```

### 4. Error Handling

```javascript
// Always catch and display errors
try {
  // API call
} catch (err) {
  console.error("Error:", err);
  setErrorMessage("User-friendly error message");
  setStatus("error");
}
```

### 5. Button Patterns

```javascript
// Internal action (modal, state change)
<Button onClick={() => setIsOpen(true)}>Click</Button>

// External link (Calendly, website)
<Button asChild>
  <a href="URL" target="_blank" rel="noopener noreferrer">
    Visit
  </a>
</Button>

// Form submit
<Button type="submit" disabled={isLoading}>
  Submit
</Button>
```

### 6. Animation Delays

```javascript
// Stagger animations for visual appeal
<Element1 className="animate-fade-in" />  // 0ms
<Element2 className="animate-fade-in [--animation-delay:200ms]" />
<Element3 className="animate-fade-in [--animation-delay:400ms]" />
<Element4 className="animate-fade-in [--animation-delay:600ms]" />
```

---

## 🚨 COMMON ANIMA ISSUES & FIXES

### Issue 1: Images Not Loading
```javascript
// ❌ WRONG (Anima generates)
src="https://c.animaapp.com/xyz/img/logo.png"
src="/static/logo.png"

// ✅ FIX
src="/resources/logo.png"  // Must be in public/resources/

// AND in vite.config.ts:
publicDir: "./public"
```

### Issue 2: Not Mobile Responsive
```javascript
// ❌ WRONG (Anima generates)
<div className="w-[1512px] h-[4254px]">

// ✅ FIX
<div className="w-full min-h-screen overflow-hidden">
```

### Issue 3: Nothing Works/Buttons Don't Do Anything
```javascript
// ❌ WRONG (Anima generates)
<Button className="...">Click me</Button>

// ✅ FIX
<Button onClick={handleClick} className="...">
  Click me
</Button>
```

### Issue 4: Build Errors
```javascript
// ❌ WRONG
export const Page = (): JSX.Element => {}  // React 19 error

// ✅ FIX
export const Page = (): React.JSX.Element => {}

// Also remove ALL unused imports/variables
```

### Issue 5: Assets Missing in Production
```bash
# ❌ WRONG: Assets in root or /static
project/
├── logo.png  ← Wrong location
└── static/   ← Wrong location

# ✅ FIX: Move to public/resources
project/
└── public/
    └── resources/
        └── logo.png  ← Correct!

# AND update vite.config.ts
publicDir: "./public"
```

---

## ✅ CHECKLIST (Copy & Use)

### Pre-Development
- [ ] Clone/download Anima-generated code
- [ ] Review file structure
- [ ] Identify all image assets
- [ ] Check existing dependencies

### Setup Phase
- [ ] Create `public/resources/` directory
- [ ] Move all assets to `public/resources/`
- [ ] Update all image src paths to `/resources/...`
- [ ] Install required dependencies (see list above)
- [ ] Configure `vite.config.ts` with `publicDir: "./public"`
- [ ] Set up Tailwind config with animations
- [ ] Create `netlify.toml` for deployment

### Make Responsive
- [ ] Remove fixed width/height from main container
- [ ] Convert absolute positioning to `relative lg:absolute`
- [ ] Add mobile-first responsive classes (`w-full lg:w-[X]`)
- [ ] Add padding on mobile (`px-4 lg:px-0`)
- [ ] Scale down fonts for mobile (`text-sm lg:text-base`)
- [ ] Hide decorative elements on mobile (`hidden lg:block`)
- [ ] Create mobile-specific layouts where needed (`lg:hidden`)
- [ ] Test on multiple screen sizes

### Add Interactivity
- [ ] Add useState hooks for all interactive elements
- [ ] Make buttons functional (onClick handlers)
- [ ] Add external links to buttons (Calendly, etc.)
- [ ] Implement modals/popups
- [ ] Add form inputs with state
- [ ] Implement loading states
- [ ] Add error handling
- [ ] Add success states
- [ ] Implement animations (fade-in, hover effects)

### Backend Integration
- [ ] Set up Supabase project
- [ ] Create database tables
- [ ] Enable RLS (Row Level Security)
- [ ] Create policies for public access
- [ ] Create `src/lib/supabase.ts`
- [ ] Implement API calls (insert, select, etc.)
- [ ] Add error handling for API calls
- [ ] Test duplicate email handling
- [ ] Test form validation

### Clean Up
- [ ] Fix all TypeScript errors
- [ ] Remove unused imports
- [ ] Remove unused variables
- [ ] Change `JSX.Element` to `React.JSX.Element`
- [ ] Run `npm run build` successfully
- [ ] Check for console errors
- [ ] Test all interactive features

### SEO & Deployment
- [ ] Add favicon to `public/resources/`
- [ ] Update `index.html` with meta tags
- [ ] Add Open Graph tags
- [ ] Add Twitter Card tags
- [ ] Test build locally (`npm run build && npm run preview`)
- [ ] Push to GitHub
- [ ] Deploy to Netlify
- [ ] Test on live URL
- [ ] Verify images load on production
- [ ] Test mobile responsiveness on real devices

---

## 🎯 YOUR TASK

Using this guide, transform my Anima-generated code following this exact process:

1. **Analyze the current code** - Identify all Anima-specific issues
2. **Fix asset paths** - Move to `public/resources/` and update references
3. **Make responsive** - Apply mobile-first patterns with `lg:` breakpoints
4. **Add interactivity** - Implement state, forms, modals, animations
5. **Integrate backend** - Set up Supabase and implement API calls
6. **Clean up** - Fix all build errors and remove unused code
7. **Deploy** - Set up Netlify config and prepare for production

**Follow the DESIGN_SYSTEM.md for all styling decisions** - colors, fonts, spacing, shadows, etc.

---

## 📚 REFERENCE FILES

You should have these files as reference:
- `DESIGN_SYSTEM.md` - Complete design specifications
- `TRANSFORMATION_GUIDE.md` - This guide
- Working example: `src/screens/MacbookPro/MacbookPro.tsx`

---

**Start by showing me the current file structure and identifying which Anima-generated files need transformation!**
