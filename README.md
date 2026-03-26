# FloatTodo

A lightweight floating desktop todo app for macOS & Windows, built with Electron.

![Platform](https://img.shields.io/badge/platform-macOS%20%7C%20Windows-lightgrey)
![Version](https://img.shields.io/badge/version-1.0.0-blue)

## Features

- **Always on top** — floats over all other windows, never gets buried
- **Minimize to bubble** — shrinks into a small floating dot when not in use
- **Urgent tag** — mark tasks as urgent with a red badge
- **Deadline support** — set due dates; overdue tasks show in yellow, today's in blue
- **Auto-sort** — urgent and due-today tasks bubble to the top automatically
- **Glassmorphism UI** — frosted glass look that blends with your desktop

## Download

Grab the latest installer from [Releases](https://github.com/pearfish223/Floatodo/releases):

| Platform | File |
|---|---|
| macOS (Apple Silicon) | `FloatTodo-1.0.0-arm64.dmg` |
| Windows | `FloatTodo Setup 1.0.0.exe` |

## Run from Source

Requires [Node.js](https://nodejs.org) 18+.

```bash
git clone https://github.com/pearfish223/Floatodo.git
cd Floatodo
npm install
npm start
```

## Build

```bash
# macOS
npm run build:mac

# Windows
npm run build:win
```

Output files will be in the `dist/` folder.

## Usage

| Action | How |
|---|---|
| Add task | Type in the input box, press **Enter** |
| Mark urgent | Click the 🚨 button before adding |
| Set deadline | Click the 📅 button to pick a date |
| Complete task | Click the circle on the left |
| Delete task | Hover over a task, click **✕** |
| Minimize to bubble | Click **●** in the top bar |
| Pin on top | Click **▲** in the top bar |
| Clear completed | Click **清除完成** at the bottom |
