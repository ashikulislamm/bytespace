# ByteSpace

ByteSpace is a modern web platform for discovering online courses, digital assets, and creator resources. Built with Next.js 16 (App Router), React 19, Tailwind CSS v4, and TypeScript.

---

## Features

- **Home Landing Page (`/`)**: Interactive 3D hero section, infinite partner marquee carousel, popular course tabs, learning path categories, value proposition dashboard showcases, creator CTA, and testimonials.
- **Courses Search & Catalog (`/courses`)**: Search bar, category pills, level filters, sort controls, responsive course cards with student avatar stacks, and pagination.
- **Authentication Pages**: Split-screen Login (`/login`) and Registration (`/register`) interfaces with brand showcase panels.
- **Custom 404 Error Page**: Gradient typographic 404 screen with background grid and home return action.
- **Global Layout**: Sticky navigation bar with mobile drawer menu, smooth hover transitions, and multi-column footer with newsletter subscription.

---

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Typography**: Google Fonts (Poppins), Fontshare (Clash Display, Satoshi)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript

---

## Getting Started

### Prerequisites

- Node.js 18.18+ or later
- npm, pnpm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/ashikulislamm/bytespace.git

# Navigate to project directory
cd bytespace

# Install dependencies
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build the optimized production bundle
npm run build

# Start the production server
npm run start
```

---

## Project Structure

```
bytespace/
├── app/                  # Next.js App Router routes & layouts
│   ├── (auth)/
│   │   ├── login/        # Login page
│   │   └── register/     # Registration page
│   ├── courses/          # Courses catalog & search page
│   ├── not-found.tsx     # Custom 404 error page
│   ├── layout.tsx        # Root layout & font definitions
│   ├── page.tsx          # Home page
│   └── globals.css       # Tailwind v4 theme tokens & styles
├── components/
│   ├── cards/            # Course, category & testimonial cards
│   ├── layout/           # Navbar, Footer, and Logo components
│   ├── sections/         # Modular Home page sections
│   └── ui/               # Reusable UI primitives (buttons, inputs, badges)
├── data/                 # Domain mock datasets (courses, creators, categories)
├── lib/                  # Utility helpers and TypeScript interfaces
└── public/               # Static visual assets, icons, and illustrations
```
