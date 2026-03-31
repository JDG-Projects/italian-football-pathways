# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

**Stack**: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4

**Key conventions**:

- App Router at `src/app/` — use server components by default, add `"use client"` only when needed
- Path alias `@/*` maps to `src/*`
- Tailwind v4 uses `@import "tailwindcss"` in CSS (no `tailwind.config.js` needed); custom theme tokens go in `src/app/globals.css` under `@theme`
- React Compiler is enabled (`next.config.ts` → `reactCompiler: true`), so avoid manual `useMemo`/`useCallback` optimizations

**Current state**: Fresh scaffold — no domain logic implemented yet. The Tviy Sport features are yet to be built.

## Task Management

- Write plan to tasks/todo.md with checkable items
- Check in before starting implementation
- Mark items complete as you go
- Update tasks/lessons.md after any correction
