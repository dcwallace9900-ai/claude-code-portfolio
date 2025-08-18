# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React/TypeScript portfolio website for Diana Wallace, a Technical Documentation Manager. It's built with Vite, React 18, TypeScript, and Tailwind CSS, featuring modern web development practices with accessibility considerations.

## Development Commands

- `npm run dev` - Start development server on port 3000
- `npm run build` - Build for production (runs TypeScript check + Vite build)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint with TypeScript support
- `npm run type-check` - Run TypeScript compiler checks without emitting files

## Architecture & Structure

### Component Architecture
- **Single Page Application**: All sections are rendered in `App.tsx` as a single-page layout
- **Component Structure**: Clean separation with dedicated components in `src/components/`
  - `Navigation` - Site navigation with smooth scrolling
  - `Hero` - Landing section
  - `About` - Personal introduction
  - `Background` - Education and certifications
  - `Projects` - Portfolio showcase
  - `Contact` - Contact form with validation

### Key Technical Details
- **TypeScript Configuration**: Strict mode enabled with path mapping (`@/*` aliases)
- **Accessibility First**: Includes skip links, ARIA labels, reduced motion support
- **Form Validation**: Uses React Hook Form + Zod for contact form
- **Animations**: Framer Motion for smooth interactions
- **Styling**: Custom Tailwind theme with extended colors, animations, and shadows
- **Icons**: Lucide React for consistent iconography

### State Management
- Form state managed by React Hook Form
- Component-level state with React hooks
- No global state management (appropriate for portfolio site)

### Styling System
- **Custom Tailwind Theme**: Extended with primary/gray/accent color palettes
- **Typography**: Inter for body text, Poppins for headings
- **Custom Animations**: Fade-in, slide-up, scale-in effects with reduced motion support
- **Responsive Design**: Mobile-first approach

### Type Definitions
Centralized in `src/types/index.ts`:
- Navigation items, skills, certifications, projects
- Contact form data with validation schema
- Section references for smooth scrolling

## Build & Deployment
- Production builds output to `dist/` directory
- Source maps enabled for debugging
- ESLint configured for React + TypeScript best practices
- Strict TypeScript compilation with unused variable detection