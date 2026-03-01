# MiniAdmin

System-oriented admin dashboard built with **React + TypeScript**.

Live-demo - [MiniAdmin](https://mini-admin-psi.vercel.app/)


The goal of this project is to demonstrate scalable frontend architecture, reusable UI abstractions, and a consistent design system rather than visual experimentation.

---

## ⚙️ Tech Stack

- React
- TypeScript
- Vite
- Zustand
- Tailwind CSS
- CSS Variables (Design Tokens)
- JSONPlaceholder API

---

## 🏗 Architecture

The project follows an FSD-inspired structure with clear separation of responsibilities:

---

### Principles

- Page-level data orchestration
- Dumb UI components
- Feature isolation
- Strict typing across the app
- Reusable generic abstractions

---

### 1. Generic Table Component

The `Table<T>` component is fully typed and reusable:

- Generic data support
- Action column injection (edit/delete)
- Loading and error states

This allows reusing the same table across different entities.

---

### 2. Data Normalization

To avoid N+1 requests when rendering posts with author info:

- Users are fetched once
- Normalized into a `Record<number, User>`
- Passed into components via page-level orchestration

This reduces redundant API calls and unnecessary re-renders.

---

### 3. Design Token System

All UI styles rely on CSS variables:

- Surface tokens
- Text hierarchy
- Border system
- Accent system
- State colors
- Light / Dark parity

No hardcoded colors inside components.

Theme switching is controlled via `data-theme` attribute.

---

### 4. Loading States & Layout Stability

Skeleton components replicate the final layout structure to:

- Prevent layout shift
- Improve perceived performance
- Maintain UI consistency

---

## 🌗 Theming

Light and dark themes share identical token structure.

This ensures predictable styling and maintainable scaling.

---

## 📈 Performance Considerations

- Memoized derived data
- No redundant API calls
- Controlled re-renders
- Layout-stable skeletons

---

## 🚀 Run Locally

```bash
npm install
npm run dev