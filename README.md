# Typing Master (React + Vite)

A modern, interactive typing practice web app built with React, Vite, and Tailwind CSS. Improve your typing speed and accuracy with real-time feedback, customizable tests, and a leaderboard to track your progress.

---

## Features

- ⚡ **Fast & Modern Stack:** Built with [React](https://react.dev/), [Vite](https://vitejs.dev/), and [Tailwind CSS](https://tailwindcss.com/) for instant reloads and a smooth UI.
- 🎯 **Typing Practice:** Practice with motivational quotes, numbers, and punctuation. Switch between uppercase, lowercase, and custom time modes.
- 📊 **Real-Time Results:** Get instant feedback on WPM, accuracy, and mistakes after each test.
- 🏆 **Leaderboard:** Will be add on in Future.
- 🎨 **Themes:** Switch between multiple color themes for a personalized experience.
- 🔒 **Login/Signup:** Will be Add on in Future.
- 📱 **Desktop Design:** Works great on desktop.

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/monkey-typingmaking.git
cd Monkey_TypingMaking/Frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

---

## Project Structure

```
src/
  components/      # UI components (Navbar, Footer, Home, LeaderBoard, etc.)
  context/         # React Context providers for state management
  Provider/        # Static data (quotes, numbers)
  App.jsx          # Main app routes
  main.jsx         # App entry point
  index.css        # Tailwind CSS styles
```

---

## Key Files

- **`src/components/Home.jsx`**  
  Main typing test logic, real-time feedback, and UI controls.

- **`src/components/Navbar.jsx` & `Footer.jsx`**  
  Navigation, theme switcher, and quick links.

- **`src/context/ToggleContext.jsx`, `QuotesChange.jsx`, `Testcontext.jsx`**  
  Global state management for theme, quotes, and test results.

- **`src/Provider/Provider.json`**  
  Motivational quotes and number-based typing challenges.

---

## Customization

- **Add More Quotes:**  
  Edit `src/Provider/Provider.json` to add your own quotes or number challenges.

- **Themes:**  
  Update theme options in `Footer.jsx` to add or modify color schemes.

---

## Expanding the ESLint Configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

## Credits

- [Remix Icon](https://remixicon.com/) for icons
- [GSAP](https://greensock.com/gsap/) for animations
- [Headless UI](https://headlessui.com/) for accessible UI components

---

## License

MIT

---

