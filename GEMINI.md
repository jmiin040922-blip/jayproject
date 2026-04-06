# GEMINI.md - Project Overview & Instructions

## Project Overview
This project, **my-link**, appears to be a personal profile or portfolio site. The core application is located in the `my-profile/` directory and is built using modern web technologies.

### Main Technologies
- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Linting:** [ESLint](https://eslint.org/)

## Directory Structure
- `my-profile/`: The main Next.js application directory.
  - `app/`: Contains the application routes and components (App Router).
  - `public/`: Static assets like images and SVGs.
  - `package.json`: Project dependencies and scripts.
  - `tsconfig.json`: TypeScript configuration.
  - `next.config.ts`: Next.js specific configuration.

## Building and Running
All commands should be executed from within the `my-profile/` directory.

### Development
To start the development server with Hot Module Replacement (HMR):
```bash
cd my-profile
npm run dev
```
The application will be available at `http://localhost:3000`.

### Production Build
To create an optimized production build:
```bash
cd my-profile
npm run build
```

### Production Start
To start the production server after building:
```bash
cd my-profile
npm run start
```

### Linting
To run ESLint and check for code quality issues:
```bash
cd my-profile
npm run lint
```

## Development Conventions
- **App Router:** Follow Next.js App Router conventions for routing and data fetching.
- **TypeScript:** Ensure all new code is properly typed.
- **Tailwind CSS 4:** Use Tailwind utility classes for styling. Note the use of `@tailwindcss/postcss` in the configuration.
- **Components:** Place reusable UI components in a `components/` directory within `my-profile/` (if one is created) or within the `app/` directory as appropriate.
- **Icons/Images:** Store static assets in `my-profile/public/`.
