# Landing Page Project

A modern, responsive landing page built with React, TypeScript, Vite, and Tailwind CSS.

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **class-variance-authority** - Component variant management

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   └── ui/              # Reusable UI components
│       ├── button.tsx
│       └── card.tsx
├── lib/
│   └── utils.ts         # Utility functions
├── screens/
│   └── MacbookPro/      # Landing page component
│       ├── MacbookPro.tsx
│       └── index.ts
├── App.tsx
├── main.tsx
└── index.css            # Global styles with Tailwind
```

## Features

- ✅ Modern, responsive design
- ✅ Reusable UI components with variants
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Accessible components with Radix UI
- ✅ Fast development with Vite HMR

## Customization

### Colors & Theme

Edit `src/index.css` to customize the color scheme using CSS variables.

### Components

All UI components are in `src/components/ui/` and can be easily customized or extended.

### Landing Page

The main landing page is in `src/screens/MacbookPro/MacbookPro.tsx`. Modify it to fit your needs.

## Contributing

Feel free to submit issues or pull requests!

## License

MIT
