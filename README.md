# Reels Demo - Instagram Clone

A production-polished, frontend-only demo of an Instagram-style Reels app built with **Vite**, **React**, **Tailwind CSS**, and **Framer Motion**. Perfect for presentations and demos with **no backend required**.

![Reels Demo](https://img.shields.io/badge/React-18.3.1-blue) ![Vite](https://img.shields.io/badge/Vite-Latest-purple) ![Tailwind](https://img.shields.io/badge/Tailwind-3.x-cyan)

## ✨ Features

- 🔐 **Login System** with demo credentials (localStorage-based)
- 📱 **Vertical Reels Feed** with scroll-snap and autoplay
- ❤️ **Like Animation** with heart pop effect
- 💬 **Comments Panel** with add/view comments
- 📤 **Share Modal** with multiple share options
- 📖 **Stories** with animated gradient rings and viewer
- 👤 **Profile Pages** with posts grid and upload capability
- 💌 **Messages Drawer** with seeded conversations
- 🎬 **50 Seeded Reels** for instant demo readiness
- 📱 **Mobile-First** responsive design
- 🌙 **Dark Mode** Instagram-inspired theme

## 🚀 Quick Start

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

The app will be available at `http://localhost:8080`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🔑 Demo Credentials

Use these credentials to log in:

- **Email:** `demo@reels.com`
- **Password:** `demo123`

*Click "Forgot password?" on the login page to reveal these credentials in the UI.*

## 📁 Project Structure

```
src/
├── components/
│   ├── reels/           # Reels-specific components
│   │   ├── ReelItem.tsx
│   │   ├── StoriesBar.tsx
│   │   ├── StoryModal.tsx
│   │   ├── CommentsPanel.tsx
│   │   ├── ShareModal.tsx
│   │   └── MessagesDrawer.tsx
│   ├── ui/              # shadcn UI components
│   └── ProtectedRoute.tsx
├── data/
│   └── seedData.ts      # 50 seeded reels + users
├── pages/
│   ├── Login.tsx
│   ├── Reels.tsx
│   ├── Profile.tsx
│   └── NotFound.tsx
├── store/
│   ├── useAuthStore.ts  # Zustand auth state
│   └── useReelsStore.ts # Zustand reels state
└── App.tsx
```

## 🎥 Adding Sample Videos

For the best demo experience, add 3 short (5-10s) sample videos:

1. Create a `public/videos/` directory
2. Add your sample videos:
   - `public/videos/sample1.mp4`
   - `public/videos/sample2.mp4`
   - `public/videos/sample3.mp4`

*Note: The app will work without videos, but they enhance the demo experience.*

## 🎨 Design System

The app uses a complete Instagram-inspired design system:

- **Dark Theme** with `#000` background
- **Instagram Gradient** for accents (purple → pink → orange)
- **Story Rings** with animated gradient borders
- **Smooth Animations** powered by Framer Motion
- **Mobile-First** responsive layouts

Colors and gradients are defined in `src/index.css` using CSS custom properties.

## 🔧 Configuration

### Changing Seed Data

Edit `src/data/seedData.ts` to modify:
- Number of reels (currently 50)
- User profiles and bios
- Comments and hashtags
- Stories and posts

### Resetting to Seed Data

Add this button anywhere in your app (dev mode):

```tsx
<button onClick={() => {
  localStorage.removeItem('reels_data');
  localStorage.removeItem('auth_user');
  window.location.reload();
}}>
  Reset to Seed Data
</button>
```

## 🎯 Key Interactions

### Reels Page
- **Vertical scroll** with snap-to-viewport
- **Double-tap** video to like
- **Click heart** button to toggle like
- **Click comment** to open comments panel
- **Click share** to open share modal
- **Click avatar** to view profile
- **Click story ring** to view stories

### Profile Page
- **Click avatar** to view user's stories
- **Upload button** (demo - uses localStorage)
- **Grid of posts** (tap to view)

### Stories
- Auto-advance with progress bars
- Tap to skip forward
- Close with X button

## 🚀 Performance

- **Windowed Rendering**: Only 3 reels in DOM at a time
- **Lazy Video Loading**: Videos load on-demand
- **Optimized Animations**: Hardware-accelerated via Framer Motion
- **Mobile-First**: Optimized for mobile viewports

## 🔒 Data Persistence

All data is stored in **localStorage**:
- `auth_user` - Current logged-in user
- `reels_data` - All reels with likes/comments
- `user_uploads` - Uploaded media (demo mode)

## 📱 Mobile Testing

Best experienced on mobile devices or mobile viewport:

1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Select a mobile device (iPhone 12, etc.)
4. Refresh page

## 🛠️ Tech Stack

- **Vite** - Build tool & dev server
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animation library
- **Zustand** - State management
- **React Router** - Client-side routing
- **shadcn/ui** - UI component library

## 📝 Scripts

```json
{
  "dev": "vite",           // Start dev server
  "build": "vite build",   // Build for production
  "preview": "vite preview" // Preview production build
}
```

## 🤝 Contributing

This is a demo project for educational purposes. Feel free to fork and customize!

## 📄 License

MIT - Feel free to use this project for learning and presentations.

---

**Made with ❤️ for demo presentations**
