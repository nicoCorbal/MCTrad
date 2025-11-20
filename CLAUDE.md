# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a multilingual translation services website built with React + Vite. The site showcases translation services (sworn/certified translations) and supports 4 languages: Spanish (default), German, French, and English.

## Tech Stack

- **Framework**: React 19.2 with React Router DOM for routing
- **Build Tool**: Vite 7.2
- **Styling**: Tailwind CSS 3.4 with custom font (Inter)
- **Internationalization**: i18next with react-i18next, i18next-http-backend, and i18next-browser-languagedetector
- **Linting**: ESLint 9.x with React-specific plugins

## Development Commands

```bash
# Start development server (runs on http://localhost:5173 by default)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Architecture

### Application Structure

- **Entry Point**: `src/main.jsx` - Initializes React app with Suspense wrapper for i18n loading
- **Routing**: `src/App.jsx` - Defines client-side routes using React Router
  - `/` - HomePage
  - `/servicios` - ServicesPage (Services)
  - `/sobre-mi` - AboutPage (About)
  - `/contacto` - ContactPage (Contact)
- **Layout**: `src/components/Layout.jsx` - Wraps all pages with Header and Footer

### Internationalization (i18n)

- **Configuration**: `src/i18n/i18n.js`
- **Default Language**: Spanish (`es`)
- **Supported Languages**: `es`, `de`, `fr`, `en`
- **Translation Files**: Located in `public/locales/{lng}/translation.json`
- **Backend**: Uses HTTP backend to load translations from `/locales/{{lng}}/{{ns}}.json`
- **Language Switching**: Implemented in Header component via dropdown selector

### Component Organization

- **Components** (`src/components/`): Reusable UI components
  - `Layout.jsx` - Main layout wrapper with Outlet
  - `Header.jsx` - Navigation bar with language switcher
  - `Footer.jsx` - Site footer
- **Pages** (`src/pages/`): Route-specific page components
  - All pages use `useTranslation()` hook to access translated content
  - Translation keys are namespaced (e.g., `aboutPage.title`, `servicesPage.title`)

## Key Patterns

### Translation Usage

Components use the `useTranslation` hook from react-i18next:
```javascript
const { t, i18n } = useTranslation();
// Access translations: t('home'), t('aboutPage.title')
// Change language: i18n.changeLanguage('de')
```

### Routing

Uses React Router's `NavLink` for navigation with active state styling:
```javascript
<NavLink to="/servicios" className={({ isActive }) => isActive ? "text-blue-600" : "text-gray-600"}>
  {t('services')}
</NavLink>
```

## Adding New Translations

When adding new content:
1. Add translation keys to all 4 language files in `public/locales/{es,de,fr,en}/translation.json`
2. Use the `t()` function in components to access translations
3. Follow existing namespacing patterns (e.g., page-specific keys under `pageName.key`)

## Styling

- Uses Tailwind CSS utility classes
- Custom font: Inter (defined in `tailwind.config.js`)
- Responsive design with mobile-first approach
- Color scheme: Blue accent (`text-blue-600`), gray neutrals
