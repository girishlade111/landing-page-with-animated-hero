# Landing Page with Animated Hero

A modern, visually stunning landing page featuring an animated hero section with typewriter effects, particle animations, and smooth scrolling testimonials. Built with Next.js, Tailwind CSS, and modern React patterns.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Scripts](#scripts)
- [Customization](#customization)
- [Stats](#stats)
- [License](#license)

---

## Overview

This is a production-ready landing page designed for AI/tech startups and builders. The page features:

- **Animated Hero Section** with typewriter text effects
- **Particle Animation System** with floating elements
- **Features Showcase** with icon-based cards
- **Testimonials Carousel** with infinite scroll marquee
- **Call-to-Action Section** with dual button options
- **Fully Responsive Design** for all screen sizes

---

## Features

### Core Features

- **Typewriter Animation**
  - Dynamic text cycling through predefined phrases
  - Smooth typing and deleting effects
  - Configurable speed settings

- **Particle System**
  - 20 floating particles with random properties
  - Multiple color variations (magenta, orange, white)
  - Continuous animation with varying durations
  - Interactive hover states

- **Hero Section**
  - Large animated headline with character-by-character reveal
  - Gradient background with blur effects
  - Animated decorative elements (wave lines, rotating circles)
  - Interactive CTA button with hover animations

- **Features Section**
  - 4 feature cards with numbered icons
  - Dark theme with accent colors
  - Responsive grid layout
  - Smooth hover transitions

- **Testimonials Section**
  - Infinite marquee scroll effect
  - Pauses on hover for readability
  - Author avatars with initials
  - Professional quotes and credentials

- **CTA Section**
  - Large typography with gradient background
  - Dual button options (primary/secondary)
  - Responsive button layouts

### UI/UX Highlights

- **Dark Theme** with `#002b36` and `#073642` color palette
- **Accent Color**: Magenta/Pink (`#d33682`)
- **Typography**: Lexend (headings) + Roboto (body)
- **Responsive Breakpoints**: Mobile (767px), Tablet (1199px), Desktop (1400px+)
- **Smooth Animations**: CSS keyframes for all motion effects

---

## Tech Stack

### Core Technologies

| Category | Technology | Version |
|----------|------------|---------|
| Framework | **Next.js** | 15.2.4 |
| Language | **TypeScript** | 5.x |
| Styling | **Tailwind CSS** | 3.4.17 |
| UI Components | **Radix UI** | Latest |
| Icons | **Lucide React** | 0.454.0 |
| Forms | **React Hook Form** | 7.54.1 |
| Validation | **Zod** | 3.24.1 |
| Animations | **Embla Carousel** | 8.5.1 |
| Charts | **Recharts** | 2.15.0 |
| Theme | **next-themes** | 0.4.4 |
| Analytics | **Vercel Analytics** | 1.3.1 |

### Development Tools

| Tool | Purpose |
|------|---------|
| **pnpm** | Package manager |
| **PostCSS** | CSS processing |
| **ESLint** | Code linting |
| **TypeScript** | Type checking |

### UI Component Library (Radix UI)

- `@radix-ui/react-accordion`
- `@radix-ui/react-dialog`
- `@radix-ui/react-dropdown-menu`
- `@radix-ui/react-navigation-menu`
- `@radix-ui/react-popover`
- `@radix-ui/react-select`
- `@radix-ui/react-slider`
- `@radix-ui/react-switch`
- `@radix-ui/react-tabs`
- `@radix-ui/react-toast`
- `@radix-ui/react-tooltip`
- And 20+ more Radix components

---

## Getting Started

### Prerequisites

Before running the project, ensure you have:

- **Node.js** 18.x or higher
- **pnpm** 8.x or higher (recommended)

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd landing-page-with-animated-hero

# Install dependencies using pnpm
pnpm install

# Or using npm
npm install

# Or using yarn
yarn install
```

### Running Development Server

```bash
# Start development server
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the page.

---

## Project Structure

```
landing-page-with-animated-hero/
├── app/                      # Next.js App Router
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page component
├── components/              # React components
│   ├── photography-banner.tsx   # Hero & main sections
│   ├── footer.tsx               # Footer component
│   └── theme-provider.tsx      # Theme context provider
├── public/                  # Static assets
│   ├── images/              # Hero images
│   ├── placeholder.jpg      # Placeholder images
│   └── placeholder.svg      # SVG placeholders
├── lib/                     # Utility functions
│   └── utils.ts             # Helper utilities
├── styles/                  # Additional styles
│   └── globals.css          # Global CSS
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── tailwind.config.ts       # Tailwind configuration
├── postcss.config.mjs       # PostCSS configuration
├── next.config.mjs          # Next.js configuration
└── README.md                # Project documentation
```

---

## Configuration

### Tailwind Configuration

The project uses Tailwind CSS with custom color schemes:

```typescript
// tailwind.config.ts
{
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        primary: 'hsl(var(--primary))',
        secondary: 'hsl(var(--secondary))',
        // ... more colors
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
```

### Next.js Configuration

```javascript
// next.config.mjs
{
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true }
}
```

### TypeScript Configuration

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES6",
    "strict": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "jsx": "preserve",
    "paths": { "@/*": ["./*"] }
  }
}
```

---

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |

---

## Customization

### Modifying Typewriter Text

Edit the `texts` array in `components/photography-banner.tsx`:

```typescript
const texts = ["builders.", "founders.", "your-text-here."]
```

### Changing Colors

Update CSS variables in `components/photography-banner.tsx`:

```css
background-color: #002b36;  /* Main background */
background: #d33682;       /* Accent color */
```

### Adding New Features

1. Add new feature object to the features list
2. Update the feature icons and text
3. The grid will automatically adjust

### Modifying Testimonials

Add or modify testimonial cards in the testimonials section:

```jsx
<div className="testimonial-card">
  <p className="testimonial-quote">"Your quote here"</p>
  <div className="testimonial-author">
    <div className="author-avatar">AB</div>
    <div className="author-info">
      <h4>Author Name</h4>
      <p>Role/Title</p>
    </div>
  </div>
</div>
```

---

## Stats

### Build Information

- **Bundle Size**: Optimized with Next.js automatic optimization
- **First Contentful Paint**: < 1.5s (estimated)
- **Lighthouse Score**: Optimized for performance

### Package Statistics

- **Total Dependencies**: 60+
- **Dev Dependencies**: 6
- **Total Files**: 30+

---

## Deployment

### Deploy to Vercel

The project is configured for seamless deployment on Vercel:

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy with default settings

**Live Demo**: [https://vercel.com/gileb64375-5584s-projects/v0-landing-page-with-animated-hero](https://vercel.com/gileb64375-5584s-projects/v0-landing-page-with-animated-hero)

### Build for Production

```bash
pnpm build
```

The optimized build output will be in the `.next` directory.

---

## License

This project is licensed under the MIT License.

---

## Acknowledgments

- Built with [v0](https://v0.app) by Vercel
- UI Components from [Radix UI](https://www.radix-ui.com)
- Icons from [Lucide](https://lucide.dev)
- Animations inspired by modern web design trends
