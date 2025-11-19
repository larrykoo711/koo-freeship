# 🚢 FreeShip - Next.js Starter Template

[![Next.js](https://img.shields.io/badge/Next.js-15.5-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-Apache%202.0-blue)](./LICENSE)

A feature-rich, production-ready Next.js 15 starter template with the latest tech stack and best practices. Perfect for quickly launching SaaS, Dashboard, or enterprise applications.

English | [简体中文](./README.md)

<div align="center">
  <img src="./screenshot.png" alt="FreeShip Dashboard Screenshot" width="100%" />
</div>

<br />

## ✨ Features

### 🎨 Modern UI System
- ⚡️ **shadcn/ui** - Beautiful, customizable component library
- 🎨 **TailwindCSS v4** - Latest version with enhanced performance
- 🌓 **Dark Mode** - Built-in theme switching support
- 📱 **Responsive Design** - Perfect adaptation for all devices

### 🚀 Latest Tech Stack
- ⚛️ **Next.js 15.5** - App Router + Server Components
- ⚛️ **React 19** - Latest features support
- 📘 **TypeScript 5.9** - Full type safety
- 🔐 **Clerk** - Enterprise-grade authentication

### 🛠 Developer Experience
- 💨 **Lightning Fast** - Hot reload + Turbopack
- 📏 **Code Quality** - ESLint v9 + Prettier
- 🎯 **Type Safety** - Strict TypeScript configuration
- 🎨 **Icon System** - Origami Wave design philosophy

### 📦 Out-of-the-Box Features
- 🎛 **Complete Dashboard Layout** - Sidebar + breadcrumb navigation
- 📊 **Data Tables** - TanStack Table integration
- 📋 **Form Handling** - React Hook Form + Zod validation
- 🍞 **Toast Notifications** - Elegant message system
- 🔍 **Command Palette** - Quick search functionality

## 🎯 Use Cases

- 🏢 **SaaS Applications** - Complete auth + Dashboard
- 📊 **Data Management Platforms** - Powerful tables and forms
- 🚚 **Logistics Management** - Example scenario integrated
- 💼 **Enterprise Backends** - Modern admin interface
- 🎨 **Rapid Prototyping** - Rich UI component library

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0 or higher
- pnpm 8.0 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/larrykoo711/koo-freeship.git

# Enter project directory
cd koo-freeship

# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env.local
```

### Configuration

Edit `.env.local` file to configure Clerk authentication:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key

# Auth Routes
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

> 💡 Get your API keys from [Clerk Dashboard](https://dashboard.clerk.com/)

### Running

```bash
# Development mode
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint

# Format code
pnpm format
```

Visit [http://localhost:3000](http://localhost:3000) to view the application

## 📁 Project Structure

```
koo-freeship/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (dashboard)/        # Dashboard layout group
│   │   ├── (errors)/           # Error pages
│   │   ├── sign-in/            # Sign-in page
│   │   ├── sign-up/            # Sign-up page
│   │   ├── layout.tsx          # Root layout
│   │   ├── favicon.ico         # Site icon
│   │   └── icon.png            # PWA icon
│   │
│   ├── components/             # React components
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── layout/             # Layout components
│   │   └── logo.tsx            # Logo component
│   │
│   ├── lib/                    # Utility functions
│   └── hooks/                  # Custom hooks
│
├── public/                     # Static assets
│   └── logo.svg               # SVG Logo
│
├── generate-icons.js          # Icon generation tool
└── components.json            # shadcn/ui config
```

## 🔧 Tech Stack Details

| Technology | Version | Description |
|------------|---------|-------------|
| Next.js | 15.5.4 | React full-stack framework |
| React | 19.2.0 | UI library |
| TypeScript | 5.9.3 | Type system |
| TailwindCSS | 4.1.14 | Atomic CSS |
| shadcn/ui | latest | UI component library |
| Clerk | 6.33.3 | Authentication |
| TanStack Table | 8.21.3 | Data tables |
| React Hook Form | 7.64.0 | Form handling |
| Zod | 4.1.12 | Schema validation |
| Lucide Icons | 0.545.0 | Icon library |

## 📚 Core Features

### 1. Authentication (Clerk)

```tsx
import { SignIn, SignUp } from "@clerk/nextjs"

// Built-in sign-in/sign-up pages
// Supports multiple login methods: email, social accounts, etc.
```

### 2. Data Tables (TanStack Table)

```tsx
import { DataTable } from "@/components/data-table"

// Powerful table features
// Sorting, filtering, pagination, column customization
```

### 3. Form Validation (React Hook Form + Zod)

```tsx
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

// Complete form solution
// Type-safe + real-time validation
```

### 4. Theme Switching

```tsx
import { ThemeProvider } from "next-themes"

// One-click light/dark mode toggle
// Automatic user preference saving
```

## 🎯 Best Practices

The project follows these best practices:

- ✅ **Server Components First** - Reduce client-side JS bundle
- ✅ **TypeScript Strict Mode** - Ensure type safety
- ✅ **Code Splitting** - Load components on demand
- ✅ **SEO Optimization** - Complete metadata configuration
- ✅ **Performance Optimization** - Image + font optimization
- ✅ **Accessibility** - ARIA labels + keyboard navigation

## 📖 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Clerk Documentation](https://clerk.com/docs)
- [Icon Design Guide](./ICON_DESIGN.md)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Changelog

See [CHANGELOG.md](./CHANGELOG.md) for version update history

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - Powerful React framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [Clerk](https://clerk.com/) - Excellent authentication solution
- [Vercel](https://vercel.com/) - Perfect deployment platform

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=larrykoo711/koo-freeship&type=date&legend=top-left)](https://www.star-history.com/#larrykoo711/koo-freeship&type=date&legend=top-left)

## 👥 Join Community

Join the FreeShip developer community to exchange ideas, share experiences, and learn together!

<div align="center">
  <img src="./wx_qrcode.jpg" alt="WeChat Community" width="200" />
  <p><strong>Scan to Join WeChat Group</strong></p>
  <p>💬 Password: <code>FreeShip</code></p>
  <p>Share Your Projects · Discuss Technical Issues · Get Latest Updates</p>
</div>

## 💬 Contact

- GitHub: [@larrykoo711](https://github.com/larrykoo711)
- Issues: [Submit an issue](https://github.com/larrykoo711/koo-freeship/issues)
- WeChat: Scan QR code above to join group

---

**If this project helps you, please give it a ⭐️ Star!**

Made with ❤️ by Larry Koo

---

<sub>Licensed under Apache License 2.0 - See [LICENSE](./LICENSE) file for details</sub>