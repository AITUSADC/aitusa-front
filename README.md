# AITUSA Frontend

A modern Next.js web application for the AITU Student Association (AITUSA). This project showcases student clubs, events, and gallery content.

## Table of Contents

- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Routes](#available-routes)
- [Development Workflow](#development-workflow)
- [Building for Production](#building-for-production)
- [Tech Stack](#tech-stack)
- [Contributing](#contributing)

## Project Overview

AITUSA Frontend is a student-focused web application built with Next.js that provides information about student clubs, events, and galleries. The site is designed to be fast, responsive, and easy to navigate.

**Key Features:**

- Student clubs directory
- Event gallery showcase
- Dynamic club pages with detailed information
- Modern UI with Tailwind CSS
- Type-safe development with TypeScript

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** (v9 or higher) or **yarn**/pnpm/**bun**
- A code editor (VS Code recommended)
- Git (for version control)

To check your Node.js version:

```bash
node --version
npm --version
```

## Getting Started

### 1. Clone or Download the Project

```bash
# If cloned from a repository
git clone <repository-url>
cd aitusa-front
```

### 2. Install Dependencies

```bash
npm install
```

Or if you prefer another package manager:

```bash
yarn install
# or
pnpm install
# or
bun install
```

### 3. Run the Development Server

Start the local development server:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

The server automatically reloads when you save changes to your files (hot reload).

### 4. Start Editing

- Edit pages by modifying files in the `app/` directory
- Edit components in the `components/` directory
- Changes are reflected immediately in your browser

## Project Structure

```
aitusa-front/
├── app/                          # Next.js App Router (main application logic)
│   ├── layout.tsx               # Root layout component
│   ├── page.tsx                 # Home page (/)
│   ├── globals.css              # Global styles
│   ├── clubs/
│   │   ├── page.tsx            # Clubs listing page (/clubs)
│   │   └── [club-name]/
│   │       └── page.tsx        # Dynamic club detail page (/clubs/[club-name])
│   └── gallery/
│       └── page.tsx            # Gallery page (/gallery)
├── components/                   # Reusable React components
│   └── Button.tsx              # Button component
├── public/                       # Static assets (images, etc.)
├── package.json                 # Project dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── next.config.ts              # Next.js configuration
├── postcss.config.mjs           # PostCSS configuration (for Tailwind)
├── eslint.config.mjs            # ESLint configuration
└── README.md                    # This file
```

## Available Routes

Your application has the following routes:

| Route                | Description                                  |
| -------------------- | -------------------------------------------- |
| `/`                  | Home page - Main landing page                |
| `/clubs`             | Clubs listing - Browse all student clubs     |
| `/clubs/[club-name]` | Club detail - View specific club information |
| `/gallery`           | Gallery - View event photos and media        |

**Example URLs:**

- Home: http://localhost:3000/
- Clubs: http://localhost:3000/clubs
- Specific Club: http://localhost:3000/clubs/tech-club
- Gallery: http://localhost:3000/gallery

## Development Workflow

### Common Tasks

#### Edit a Page

1. Navigate to the file in `app/`
2. Make your changes using JSX/TSX
3. The page automatically reloads in your browser

**Example:** To edit the home page, open `app/page.tsx`:

```typescript
export default function Home() {
  return <div className="text-brand-blue">Aitusa main page</div>;
}
```

#### Create a New Component

1. Create a new file in `components/` (e.g., `components/my-component.tsx`)
2. Write your component:

```typescript
export default function MyComponent() {
  return <div>My Component</div>;
}
```

3. Import and use it in pages or other components

#### Run Linting

Check your code for errors and style issues:

```bash
npm run lint
```

### Styling

This project uses **Tailwind CSS** for styling. Add classes directly to JSX elements:

```typescript
<div className="bg-blue-500 text-white p-4 rounded-lg">
  Styled content
</div>
```

For global styles, edit `app/globals.css`.

## Building for Production

### Build the Application

```bash
npm run build
```

This creates an optimized production build in the `.next/` directory.

### Start the Production Server

```bash
npm start
```

The application will run on [http://localhost:3000](http://localhost:3000)

### Available Scripts

| Command         | Purpose                                  |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Start development server with hot reload |
| `npm run build` | Create optimized production build        |
| `npm start`     | Run the production build                 |
| `npm run lint`  | Run ESLint to check code quality         |

## Tech Stack

- **Framework:** [Next.js 16.2.4](https://nextjs.org) - React framework with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org) - Type-safe JavaScript
- **Runtime:** [React 19.2.4](https://react.dev) - UI library
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com) - Utility-first CSS framework
- **Linting:** [ESLint 9](https://eslint.org) - Code quality tool
- **Package Manager:** npm (or yarn/pnpm/bun)

## Troubleshooting

### Port 3000 Already in Use

If port 3000 is occupied, you can run the dev server on a different port:

```bash
npm run dev -- -p 3001
```

### Dependencies Installation Issues

Clear the cache and reinstall:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

Check that:

1. Node.js and npm versions match prerequisites
2. All TypeScript errors are resolved
3. Run `npm run lint` to check for code issues

## Contributing

When contributing to this project:

1. Create a new branch for your feature
2. Follow the existing code structure
3. Use TypeScript for type safety
4. Test your changes locally with `npm run dev`
5. Run `npm run lint` before committing
6. Ensure your code follows Tailwind CSS conventions

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features
- [React Documentation](https://react.dev) - React fundamentals
- [Tailwind CSS Docs](https://tailwindcss.com/docs) - Tailwind styling guide
- [TypeScript Handbook](https://www.typescriptlang.org/docs) - TypeScript reference

## Support

For issues or questions:

1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review the project structure and existing code
3. Check the browser console for error messages

---

**Happy coding! 🎓**
