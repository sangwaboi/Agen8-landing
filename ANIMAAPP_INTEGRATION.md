# AnimaApp Integration Guide

## 🎨 AnimaApp → React Integration Complete!

Your project is now set up to work seamlessly with AnimaApp-generated code from Figma designs.

## 📁 File Structure (AnimaApp Pattern)

```
animaapp_lastTRY/
├── index.html                    ← Points to #app div
├── src/
│   ├── index.tsx                 ← Main entry point (AnimaApp style)
│   ├── index.css                 ← Global styles + Tailwind
│   ├── components/
│   │   └── ui/                   ← Reusable UI components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       └── index.ts
│   ├── lib/
│   │   └── utils.ts              ← cn() utility
│   └── screens/
│       └── MacbookPro/           ← AnimaApp generated screen
│           ├── MacbookPro.tsx    ← Component code
│           └── index.ts          ← Exports
```

## ✅ What's Been Set Up

1. **Entry Point**: `src/index.tsx` (AnimaApp standard)
   - Uses `getElementById("app")` as AnimaApp expects
   - Imports directly from screens folder

2. **Screen Structure**: `screens/MacbookPro/`
   - Component file: `MacbookPro.tsx`
   - Export file: `index.ts`

3. **Dependencies Installed**:
   - ✅ `lucide-react` - For AnimaApp icons
   - ✅ `@radix-ui/react-slot` - For component composition
   - ✅ `class-variance-authority` - For variants
   - ✅ Tailwind CSS - For styling

4. **Animations Configured**:
   - ✅ `animate-fade-in` added to Tailwind config
   - Works with AnimaApp's animation classes

## 🚀 How to Add New AnimaApp Screens

### Step 1: Export from AnimaApp

In AnimaApp, export your Figma design as React code. You'll get files like:

```
MacbookPro.tsx
index.ts
```

### Step 2: Create Screen Folder

```bash
mkdir -p src/screens/YourNewScreen
```

### Step 3: Copy AnimaApp Files

Place the generated files:
- `src/screens/YourNewScreen/YourNewScreen.tsx`
- `src/screens/YourNewScreen/index.ts`

### Step 4: Update Imports

AnimaApp may use different import paths. Update them:

**Before (AnimaApp might generate):**
```tsx
import { Button } from "@/components/ui/button";
```

**After (Update to relative paths):**
```tsx
import { Button } from "../../components/ui/button";
```

### Step 5: Update Main Entry

Edit `src/index.tsx`:

```tsx
import { YourNewScreen } from "./screens/YourNewScreen";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <YourNewScreen />
  </StrictMode>,
);
```

## 📝 Common AnimaApp Patterns

### 1. Data Arrays

AnimaApp often creates data arrays at the top:

```tsx
const companyLogos = [
  { name: "SCATR", src: "https://c.animaapp.com/.../img/frame-3.svg" },
];

const socialLinks = [
  { icon: "https://c.animaapp.com/.../img/instagram.svg", alt: "Instagram" },
];
```

✅ Keep these as-is. They work perfectly!

### 2. Absolute Positioning

AnimaApp uses lots of absolute positioning:

```tsx
<div className="absolute top-[1215px] left-[226px] w-[1296px] h-[537px]">
```

✅ This is normal for AnimaApp and preserves your Figma layout exactly!

### 3. Data Model IDs

AnimaApp adds tracking attributes:

```tsx
<div data-model-id="1:46">
```

✅ Keep these! They help track which Figma layer it came from.

### 4. Blur Effects

AnimaApp creates blur effects like this:

```tsx
<div className="blur-[150px] bg-[#fb6d26]" />
```

✅ Works perfectly with Tailwind!

### 5. Custom Animations

If AnimaApp uses custom animations, add them to `tailwind.config.js`:

```js
animation: {
  "fade-in": "fade-in 1s ease-out forwards",
  "slide-up": "slide-up 0.5s ease-out",
  // Add more as needed
},
keyframes: {
  "fade-in": {
    "0%": { opacity: "0", transform: "translateY(-1rem)" },
    "100%": { opacity: "1", transform: "translateY(0)" },
  },
  // Add more keyframes as needed
}
```

## 🎯 Icons from AnimaApp

AnimaApp may use:

1. **Lucide Icons** (already installed ✅):
   ```tsx
   import { ArrowRightIcon, VideoIcon } from "lucide-react";
   ```

2. **Image Icons** (from AnimaApp CDN):
   ```tsx
   <img src="https://c.animaapp.com/.../img/icon.svg" alt="Icon" />
   ```

3. **Need other icon libraries?**
   ```bash
   npm install react-icons
   npm install @heroicons/react
   ```

## 🔧 Troubleshooting

### Issue: Images not loading
- AnimaApp hosts images on their CDN
- Images load from `https://c.animaapp.com/...`
- ✅ This is normal and should work fine

### Issue: Import paths not working
- Change `@/components/ui/button` to `../../components/ui/button`
- Change `@/lib/utils` to `../../lib/utils`

### Issue: Component not found
- Check if the component exists in `src/components/ui/`
- If not, copy it from AnimaApp's output
- Or use our existing components (Button, Card, Input, Label)

### Issue: Animations not working
- Check if animation is defined in `tailwind.config.js`
- AnimaApp uses custom animations that need to be added manually

### Issue: Min-width/Min-height causing overflow
- AnimaApp sets fixed dimensions like `min-w-[1512px]`
- This preserves your Figma design exactly
- For responsive, you may need to adjust these values

## 📦 Additional Components

If AnimaApp code needs more UI components, install:

```bash
# Dialogs
npm install @radix-ui/react-dialog

# Dropdowns
npm install @radix-ui/react-dropdown-menu

# Tabs
npm install @radix-ui/react-tabs

# Tooltips
npm install @radix-ui/react-tooltip

# Popover
npm install @radix-ui/react-popover
```

## ✨ Best Practices

1. **Keep AnimaApp Structure**: Don't change the generated structure too much
2. **Update Imports**: Always update path aliases to relative paths
3. **Test After Integration**: Check browser for errors
4. **Keep Data Separate**: AnimaApp's data arrays are clean - keep them!
5. **Preserve data-model-id**: Helps track back to Figma layers
6. **Add Animations**: If AnimaApp uses custom animations, add to Tailwind config

## 🎨 Your Current Design

The MacbookPro screen is now live with:
- ✅ Peachy-orange background (#fee7d2)
- ✅ Orange blur effects (#fb6d26)
- ✅ Absolute positioned elements
- ✅ AnimaApp CDN images
- ✅ Fade-in animations
- ✅ Gradient backgrounds

**Live at:** http://localhost:5173/

## 📖 Quick Reference

| Task | Command/Action |
|------|----------------|
| Add new screen | Create folder in `src/screens/` |
| Update entry point | Edit `src/index.tsx` |
| Fix imports | Change `@/` to `../../` |
| Add animation | Update `tailwind.config.js` |
| Install icon library | `npm install lucide-react` |
| Check errors | Open browser console |

## 🚀 Next Steps

1. Export more screens from AnimaApp
2. Place them in `src/screens/`
3. Update import paths
4. Switch between screens in `src/index.tsx`
5. Build your complete application!

Happy designing! 🎨
