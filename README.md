<p align="center">
  <img src="./preview.png" alt="Portfolio Preview"/>
</p>

<h1 align="center">Ismatov O'lmasjon — Frontend Developer Portfolio</h1>

<p align="center">
  A production-ready personal portfolio built with React, TypeScript and Tailwind CSS.<br/>
  Focused on performance, reusable components and real-world frontend architecture.
</p>

<p align="center">
  <a href="https://ulmasjon96.github.io/My-Portfolio/"><b>🌐 Live Website</b></a>
</p>

---

## 📌 Project Goal

The purpose of this project is not only to present my work, but to demonstrate practical frontend engineering skills:

- component architecture
- performance optimization
- lazy loading
- UI/UX implementation
- real user interaction

This portfolio simulates a real commercial website rather than a simple landing page.

---

## 🧠 What Problems Were Solved

### 1. Slow Initial Load

Large React bundles often cause a blank screen on first load.

**Solution**

- Route-level code splitting
- Section lazy mounting (Intersection Observer)
- Vendor chunk separation (Vite manualChunks)

Result: faster first content render and smoother user experience.

---

### 2. Reusable UI System

Instead of writing styles repeatedly, I created reusable UI components:

- buttons
- inputs
- modal windows
- tooltips
- notifications

This improves maintainability and scalability.

---

### 3. User Interaction & Feedback

A contact form was implemented with validation and instant feedback.

**Features**

- input validation
- toast notifications
- Telegram Bot integration
- error handling

---

### 4. SEO & Social Sharing

Single Page Applications are often poorly indexed.

Implemented:

- meta tags
- Open Graph preview
- structured data
- social preview image

---

## ⚙️ Tech Stack

**Core**

- React
- TypeScript
- Vite

**UI & Styling**

- Tailwind CSS
- Shadcn UI
- Radix UI
- Framer Motion

**Functionality**

- React Hook Form
- i18next (multi-language)
- Telegram Bot API

**Optimization**

- Lazy loading
- Code splitting
- Bundle optimization
- SEO meta configuration

---

## 🧩 Architecture

- Component-based structure
- Separation of layout and sections
- Reusable UI components
- Dynamic project rendering
- Scroll-triggered component mounting

---

## 📁 Folder Structure

```
src
 ├── components
 │    ├── ui
 │    ├── layout
 │    └── sections
 ├── hooks
 ├── pages
 ├── i18n
 └── main.tsx
```

---

## 🚀 Performance Techniques Used

- Intersection Observer lazy mount
- Suspense + lazy imports
- Vendor bundle splitting
- Optimized assets
- Deferred heavy components

---

## 🌐 Live Demo

https://ulmasjon96.github.io/My-Portfolio/

---

## 📬 Contact

- Telegram: https://t.me/ulmasjon96
- GitHub: https://github.com/ulmasjon96

I am open to **Junior Frontend Developer** or **Internship** opportunities.

---

⭐ If you find this project interesting, consider giving it a star!
