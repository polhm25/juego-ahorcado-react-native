# Juego Ahorcado React Native

> **Language Note:** This application's user interface is in Spanish as it was developed for a Spanish-speaking academic context. The codebase and documentation follow English conventions for broader accessibility.

A **React Native & Expo** implementation of the classic Hangman word-guessing game. This project demonstrates modern mobile app development with React Native, component-based architecture, and game state management.

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [How It Works](#how-it-works)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
  - [Game Screen](#game-screen)
  - [Game Flow](#game-flow)
- [Game Rules](#game-rules)
- [Project Structure](#project-structure)
- [Technical Details](#technical-details)
- [Word Categories](#word-categories)

## About the Project

This is an implementation of the classic **Hangman** game for mobile devices using React Native and Expo. Players guess hidden words by selecting letters from the Spanish alphabet, with visual feedback through a progressive hangman drawing and word display.

This project demonstrates:
- **React Native** fundamentals (components, hooks, state management)
- **Expo** framework for cross-platform mobile development
- **TypeScript** for type-safe code
- **Component composition** and props-based communication
- **Game logic** and state management patterns
- **Responsive UI design** with React Native StyleSheet

## How It Works

The Hangman game follows these mechanics:

1. **Game Initialization:** A random word is selected from one of 23 categories
2. **Word Display:** The word is shown as dashes (one per letter)
3. **Player Input:** Player selects letters from the on-screen keyboard
4. **Letter Matching:**
   - If letter is in the word → display updates to show correct positions
   - If letter is not in the word → player loses one life
5. **Win Condition:** Player reveals all letters before lives reach 0
6. **Loss Condition:** Player runs out of lives (starts with 6)
7. **Scoring:** Wins and losses are tracked with win percentage

## Features

✨ **Extensive Word Database:**
- 23 categories (Nature, Home, Countries, Cars, Computers, Animals, Life, Mythology, Sports, Hobbies, Cooking, Football, Cosmos, Music, Cinema, Star Wars, Geek Culture, Video Games, and more)
- 50+ words per category
- Spanish vocabulary for native speaker engagement

📱 **Visual Gameplay Elements:**
- Progressive hangman ASCII art (7 stages, 0-6 lives)
- Large, readable word display with letter spacing
- Category label for context clues
- Responsive grid keyboard with Spanish alphabet (A-Z + Ñ)

🎮 **Game Management:**
- Live tracking of remaining lives
- Win/loss counter with percentage statistics
- Alert dialogs for game end states
- Automatic game reset for new rounds

⌨️ **Interactive Keyboard:**
- 26-letter Spanish alphabet + Ñ (27 total)
- Disabled buttons for already-guessed letters
- Visual feedback (gray appearance for used letters)
- Prevents duplicate letter selection

## Getting Started

### Prerequisites

- **Node.js** (v14 or later) with npm
- **Expo CLI** installed globally: `npm install -g expo-cli`
- An iOS simulator (Mac only), Android emulator, or physical device
- For web testing: any modern web browser

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/polhm25/juego-ahorcado-react-native.git
   cd juego-ahorcado-react-native/otro
   ```

2. **Install dependencies:**
   ```bash
   npm install
   
   ```

### Running the Application

#### Using Expo Development Server

```bash
npm start
```

This launches an interactive menu. Choose your platform:

**For Android:**
```bash
npm run android
```
(Requires Android Emulator or connected device)

**For iOS:**
```bash
npm run ios
```
(macOS only; requires iOS Simulator or connected device)

**For Web:**
```bash
npm run web
```
(Opens in your default web browser)

## Usage

### Game Screen

When you launch the app, you'll see:

```
┌─────────────────────────────────┐
│        NATURALEZA              │  ← Category (random)
├─────────────────────────────────┤
│                                 │
│         [Hangman Art]           │  ← Visual hangman (0-6 stages)
│        (ASCII Drawing)          │
│                                 │
├─────────────────────────────────┤
│         - - - - - - -           │  ← Word display (dashes & revealed letters)
├─────────────────────────────────┤
│  A  B  C  D  E  F  G  ...  Z   │  ← Spanish alphabet keyboard
│  Ñ  (letter buttons)            │
├─────────────────────────────────┤
│  Victorias: 3 (60%)             │  ← Score tracker
│  Derrotas: 2 (40%)              │
└─────────────────────────────────┘
```

### Game Flow

1. **Game Start:**
   - App initializes with `useEffect` hook
   - Random word selected from database
   - Category displayed as title
   - All 6 lives available

2. **Guessing a Letter:**
   - Player taps any available letter button
   - Button becomes disabled (gray)
   - Game checks if letter exists in word

3. **Correct Guess:**
   - All matching positions revealed in word display
   - Lives remain unchanged
   - Player continues guessing

4. **Wrong Guess:**
   - Lives decrease by 1
   - Hangman drawing progresses to next stage
   - Letter button stays disabled
   - Player continues guessing

5. **Win State (Word Complete):**
   - All letters revealed
   - Alert shows: "¡Ganaste! Felicidades, adivinaste la palabra"
   - Win counter increments
   - Player taps "Nueva partida" (New Game) to restart

6. **Lose State (Lives Exhausted):**
   - Lives reach 0
   - Alert shows: "¡Perdiste! La palabra era: [ANSWER]"
   - Loss counter increments
   - Player taps "Nueva partida" (New Game) to restart

## Game Rules

### Core Mechanics

1. **Word Selection:** A random word is chosen from the 23 categories
2. **Hidden Display:** Word is shown as dashes, one per letter
3. **Guessing:** Player selects letters to reveal matching positions
4. **Lives:** Player starts with 6 lives, loses 1 for each wrong guess
5. **Win:** Reveal all letters before lives reach 0
6. **Loss:** All lives exhausted before completing word

### Letter Matching

- Letter matching is **case-insensitive** (input A matches word A)
- Each letter can only be selected **once per game** (disabled after selection)
- Both correct and incorrect guesses count as "used" and disable the button

### Scoring

- **Victorias (Wins):** Count of completed words
- **Derrotas (Losses):** Count of failed attempts
- **Percentages:** Automatically calculated as `(wins × 100) / (wins + losses)`

## Project Structure

```
juego-ahorcado-react-native/
│   ├── App.tsx                 # Main game component (state & logic)
│   ├── components/
│   │   ├── Horca.tsx          # Hangman visual display
│   │   ├── Teclado.tsx        # Letter keyboard grid
│   │   ├── Tecla.tsx          # Individual letter button
│   │   └── Marcador.tsx       # Win/loss score tracker
│   ├── helpers/
│   │   └── Funciones.ts       # Core game logic utilities
│   ├── data/
│   │   └── palabras.json      # Word database (23 categories)
│   ├── assets/                # Images and icons
│   │   ├── ahorcado_0.png     # Hangman stages 0-6
│   │   ├── ahorcado_1.png
│   │   ├── ... (up to ahorcado_6.png)
│   │   ├── icon.png
│   │   ├── splash-icon.png
│   │   ├── adaptive-icon.png
│   │   └── favicon.png
│   ├── app.json               # Expo configuration
│   ├── package.json           # Dependencies and scripts
│   ├── tsconfig.json          # TypeScript configuration
│   ├── index.ts               # Entry point
│   └── node_modules/          # Dependencies (generated)
└── README.md                  # This file
```

### Component Descriptions

| Component | Purpose |
|-----------|---------|
| **App.tsx** | Main game logic; manages state (lives, word, display, score); handles game flow |
| **Horca.tsx** | Displays hangman visual progression (7 PNG images based on lives remaining) |
| **Teclado.tsx** | Renders 27-letter Spanish keyboard in grid layout |
| **Tecla.tsx** | Individual letter button; handles press events and disabled state styling |
| **Marcador.tsx** | Shows win/loss counters with percentage calculations |
| **Funciones.ts** | Game utilities: random word selection, display generation, letter matching |
| **palabras.json** | Word database organized by 23 categories |

### Technology Stack

- **Framework:** React Native 0.81.5
- **Build Tool:** Expo 54.0.22
- **Language:** TypeScript 5.9.2
- **Runtime:** React 19.1.0
- **Platform:** Android, iOS, Web (via Expo)

### Key Implementation Details

**State Management:**
- All game state lives in `App.tsx` using React hooks (`useState`)
- Game initialization on mount using `useEffect`
- Props drilling for component communication

**Game Logic (Funciones.ts):**
```typescript
// Selects random word from database
generarPalabraAleatoria() → { categoria, palabra }

// Creates initial display (dashes)
generarDisplayInicial(palabra) → "-------"

// Updates display with guessed letter
realizarIntento(palabra, display, letra) → { actualizado, display }
```

**Component Communication:**
- Parent-to-child: Props (`vidas`, `display`, `letrasUsadas`)
- Child-to-parent: Callbacks (`pulsarLetra`)

**Styling:**
- React Native `StyleSheet.create()` for performance
- Light theme (white/gray palette)
- Responsive to different screen sizes
- Safe area view for notched devices

### Grid Configuration
- 6×6 safe zone (uses SafeAreaView)
- Keyboard grid wraps with flexWrap
- Letter buttons: 40×40px with 2px margin

### Word Database
- 23 categories with 50-100+ words each
- Words stored lowercase in JSON
- Converted to uppercase during gameplay
- Categories: Naturaleza, Hogar, Países, Coches, Informática, Animales, Vida, mitología, Palabras extrañas, Salud, Deportes, Hobbies, Cocina, Futbol, El cosmos, Música, Cine, Star Wars, Frikadas, Videojuegos, and more


## Development Notes

- **TypeScript Enabled:** Type safety for better development experience
- **Expo New Architecture:** Using React Native New Architecture for improved performance
- **Portrait Orientation:** Locked to portrait mode for optimal UX
- **No External Styling:** Uses only React Native built-in components
- **Minimal Dependencies:** Only Expo, React, and React Native

## Language Note

This project uses **Spanish** for its game interface, including:
- Category names and word vocabulary
- Alert messages and UI labels
- All user-facing text

This makes it ideal for Spanish language learners or native Spanish speakers.

