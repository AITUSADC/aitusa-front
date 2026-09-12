# AITUSA Frontend

A modern Next.js web application for the AITU Student Association (AITUSA). This project showcases student clubs, events, and gallery content.

## Table of Contents

- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Docker Compose](#docker-compose)
- [Project Structure](#project-structure)
- [Available Routes](#available-routes)
- [Development Workflow](#development-workflow)
- [Building for Production](#building-for-production)
- [Tech Stack](#tech-stack)
- [Contributing](#contributing)

## Project Overview

AITUSA is a monorepo with a Next.js frontend and a NestJS backend. It provides information about student clubs, events, and galleries.

**Key Features:**

- Student clubs directory
- Event gallery showcase
- Dynamic club pages with detailed information
- Modern UI with Tailwind CSS
- Type-safe development with TypeScript

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v22.12 or higher)
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

The frontend will be available at [http://localhost:3000](http://localhost:3000), and the backend API at [http://localhost:3001/api](http://localhost:3001/api).

The server automatically reloads when you save changes to your files (hot reload).

### 4. Start Editing

- Edit pages by modifying files in the `apps/web/app/` directory
- Edit components in the `apps/web/components/` directory
- Changes are reflected immediately in your browser

## Docker Compose

Install and start Docker Desktop (or Docker Engine with the Compose plugin on Linux), then run from the repository root:

```bash
docker compose up --build -d --wait
```

This builds and starts both applications in production mode:

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend health: [http://localhost:3001/api/health](http://localhost:3001/api/health)
- API through the frontend: [http://localhost:3000/api/health](http://localhost:3000/api/health)

The frontend waits for the API health check before starting. Both services restart automatically unless explicitly stopped. No database or other external service is currently required; the API serves mock data.

Compose works without an `.env` file. If a root `.env` exists, Compose reads `NEXT_PUBLIC_AITUSA_*` values from it and passes them to the frontend build. Missing values use the application's default contact links. Set `WEB_PORT` and `API_PORT` in that file to change the host ports (defaults: 3000 and 3001). Internal container ports stay fixed, and the frontend proxies `/api/*` to `http://api:3001` over the Compose network.

Public environment values and the API rewrite destination are embedded during the Next.js build. Re-run `docker compose up --build -d --wait` after changing code or public settings. Local `.env` files are excluded from the Docker build context. The first build needs internet access to download images, npm dependencies, and Google Fonts used by the frontend.

```bash
docker compose ps             # Service status and health
docker compose logs -f        # Follow logs (Ctrl+C to exit)
docker compose down           # Stop and remove containers
```

For development with hot reload, use `npm run dev` as described above.

## Project Structure

```
aitusa-front/
├── apps/
│   ├── api/                      # NestJS backend workspace
│   │   ├── src/
│   │   │   ├── clubs/           # Clubs API module and data
│   │   │   ├── app.module.ts    # Root NestJS module
│   │   │   └── main.ts          # Backend entry point
│   │   ├── nest-cli.json
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── web/                      # Next.js frontend workspace
│       ├── app/                  # Next.js App Router
│       ├── components/           # Reusable React components
│       ├── public/               # Static assets
│       ├── package.json          # Frontend dependencies and scripts
│       ├── tsconfig.json         # TypeScript configuration
│       ├── next.config.ts        # Next.js configuration
│       ├── postcss.config.mjs    # PostCSS configuration
│       └── eslint.config.mjs     # ESLint configuration
├── package.json                  # npm workspaces and root scripts
├── package-lock.json             # Shared dependency lockfile
└── README.md                    # This file
```

## Available Routes

Your application has the following routes:

| Route                | Description                                  |
| -------------------- | -------------------------------------------- |
| `/[lang]`                  | Localized home page                          |
| `/[lang]/clubs`             | Clubs listing - Browse all student clubs     |
| `/[lang]/clubs/[club-name]` | Club detail - View specific club information |
| `/[lang]/gallery`           | Gallery - View event photos and media        |

Backend API routes:

| Route                           | Description                    |
| ------------------------------- | ------------------------------ |
| `/api/health`                   | Backend health check           |
| `/api/clubs-mock-data?lang=ru`  | Localized clubs list           |
| `/api/club-mock-data?slug=...`  | Club details by slug           |

The frontend uses the same `/api/...` paths. Next.js rewrites those requests to the NestJS backend configured by `API_URL` (defaults to `http://localhost:3001`).

**Example URLs:**

- Home: http://localhost:3000/en
- Clubs: http://localhost:3000/en/clubs
- Specific Club: http://localhost:3000/en/clubs/chess-club
- Gallery: http://localhost:3000/en/gallery

## Development Workflow

### Common Tasks

#### Edit a Page

1. Navigate to the file in `apps/web/app/`
2. Make your changes using JSX/TSX
3. The page automatically reloads in your browser

**Example:** To edit the localized home page, open `apps/web/app/[lang]/page.tsx`:

```typescript
export default function Home() {
  return <div className="text-brand-blue">Aitusa main page</div>;
}
```

#### Create a New Component

1. Create a new file in `apps/web/components/` (e.g., `apps/web/components/my-component.tsx`)
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

For global styles, edit `apps/web/app/globals.css`.

## Building for Production

### Build the Application

```bash
npm run build
```

This builds the NestJS backend into `apps/api/dist/` and the frontend into `apps/web/.next/`.

### Start the Production Server

```bash
npm start
```

The frontend runs on [http://localhost:3000](http://localhost:3000), and the backend runs on [http://localhost:3001/api](http://localhost:3001/api).

### Available Scripts

| Command         | Purpose                                  |
| --------------- | ---------------------------------------- |
| `npm run dev`       | Start frontend and backend in watch mode |
| `npm run dev:web`   | Start only the Next.js frontend          |
| `npm run dev:api`   | Start only the NestJS backend            |
| `npm run build`     | Build all workspaces                      |
| `npm start`         | Run both production builds               |
| `npm run lint`      | Run ESLint in all workspaces              |
| `npm run typecheck` | Check TypeScript in all workspaces        |

## Tech Stack

- **Frontend:** [Next.js 16.2.4](https://nextjs.org) with React 19
- **Backend:** [NestJS 12](https://nestjs.com)
- **Language:** [TypeScript](https://www.typescriptlang.org) - Type-safe JavaScript
- **Runtime:** [React 19.2.4](https://react.dev) - UI library
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com) - Utility-first CSS framework
- **Linting:** [ESLint 9](https://eslint.org) - Code quality tool
- **Package Manager:** npm (or yarn/pnpm/bun)

## Troubleshooting

### Port 3000 Already in Use

If port 3000 is occupied, run only the frontend on a different port:

```bash
npm run dev:web -- --port 3002
```

For a different backend port, set both `API_PORT` for NestJS and `API_URL` for Next.js.

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
