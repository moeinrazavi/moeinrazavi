# Moein Razavi - Personal Portfolio

A stunning, Apple-inspired personal portfolio website built with modern web technologies.

## Features

- **Stunning Animations**: Smooth scroll-triggered animations powered by Framer Motion
- **Apple-like Design**: Clean, modern aesthetic with glassmorphism effects
- **Interactive Elements**: Hover effects, magnetic buttons, and animated gradients
- **Responsive Design**: Fully responsive across all devices
- **Dark Mode**: Beautiful dark theme with gradient accents
- **Performance Optimized**: Built with Next.js for optimal performance

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and Tailwind config
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main page component
├── components/
│   ├── Navigation.tsx   # Sticky navigation with mobile menu
│   ├── Hero.tsx         # Hero section with animated titles
│   ├── About.tsx        # About section with stats
│   ├── Skills.tsx       # Interactive skills showcase
│   ├── Experience.tsx   # Timeline-based experience section
│   ├── Projects.tsx     # Project gallery with filters
│   ├── Publications.tsx # Research publications
│   ├── Contact.tsx      # Contact section with CTA
│   └── Footer.tsx       # Footer with links
└── lib/
    └── utils.ts         # Utility functions
```

## Sections

1. **Hero**: Eye-catching introduction with animated titles and gradient effects
2. **About**: Personal summary with stats and education highlights
3. **Experience**: Interactive timeline showcasing career journey
4. **Skills**: Category-based skills with animated progress bars
5. **Projects**: Filterable project gallery with hover effects
6. **Publications**: Research papers with descriptions
7. **Contact**: Call-to-action with contact information

## Customization

### Colors
Edit `tailwind.config.ts` to modify the color scheme:
```typescript
colors: {
  accent: {
    blue: '#0071e3',
    purple: '#a855f7',
    pink: '#ec4899',
    cyan: '#06b6d4',
  },
}
```

### Content
Update the data in each component file to customize:
- Personal information in `Hero.tsx` and `About.tsx`
- Work experience in `Experience.tsx`
- Skills in `Skills.tsx`
- Projects in `Projects.tsx`
- Publications in `Publications.tsx`

## Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

## License

MIT License - Feel free to use this as a template for your own portfolio!

---

Designed and built by Moein Razavi
