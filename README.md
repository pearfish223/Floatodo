# FloatTodo 悬浮备忘录

A lightweight floating desktop todo app for macOS & Windows, built with Electron.
一款轻量级桌面悬浮待办应用，支持 macOS 和 Windows，基于 Electron 构建。

![Platform](https://img.shields.io/badge/platform-macOS%20%7C%20Windows-lightgrey)
![Version](https://img.shields.io/badge/version-1.0.0-blue)

---

## Features / 功能特点

- **Always on top** — floats over all other windows, never gets buried
  **窗口置顶** — 始终悬浮在所有窗口之上，不会被遮住
- **Minimize to bubble** — shrinks into a small floating dot when not in use
  **缩成悬浮球** — 不用时缩成一个小圆点，随时唤出
- **Urgent tag** — mark tasks as urgent with a red badge
  **紧急标签** — 标记紧急任务，显示红色"急"标签
- **Deadline support** — set due dates; overdue tasks show in yellow, today's in blue
  **截止日期** — 设置 DDL，逾期显示黄色，今日截止显示蓝色
- **Auto-sort** — urgent and due-today tasks bubble to the top automatically
  **自动排序** — 紧急和今日截止的任务自动置顶
- **Glassmorphism UI** — frosted glass look that blends with your desktop
  **磨砂玻璃 UI** — 半透明毛玻璃风格，与桌面融为一体

---

## Download / 下载安装

Grab the latest installer from [Releases](https://github.com/pearfish223/Floatodo/releases).
从 [Releases](https://github.com/pearfish223/Floatodo/releases) 下载对应平台的安装包。

| Platform / 平台 | File / 文件 |
|---|---|
| macOS (Apple Silicon) | `FloatTodo-1.0.0-arm64.dmg` |
| Windows | `FloatTodo Setup 1.0.0.exe` |

---

## Run from Source / 从源码运行

Requires [Node.js](https://nodejs.org) 18+.
需要 [Node.js](https://nodejs.org) 18 及以上版本。

```bash
git clone https://github.com/pearfish223/Floatodo.git
cd Floatodo
npm install
npm start
```

---

## Build / 打包构建

```bash
# macOS
npm run build:mac

# Windows
npm run build:win
```

Output files will be in the `dist/mac/` and `dist/win/` folders.
输出文件分别在 `dist/mac/` 和 `dist/win/` 目录下。

---

## Usage / 使用说明

| Action / 操作 | How / 方法 |
|---|---|
| Add task / 添加任务 | Type in the input box, press **Enter** / 输入内容后按 **Enter** |
| Mark urgent / 标记紧急 | Click 🚨 before adding / 添加前点击 🚨 按钮 |
| Set deadline / 设置截止日期 | Click 📅 to pick a date / 点击 📅 选择日期 |
| Complete task / 完成任务 | Click the circle on the left / 点击左侧圆圈 |
| Delete task / 删除任务 | Hover and click **✕** / 悬停后点击 **✕** |
| Minimize to bubble / 缩成悬浮球 | Click **●** in the top bar / 点击顶栏 **●** |
| Pin on top / 置顶窗口 | Click **▲** in the top bar / 点击顶栏 **▲** |
| Clear completed / 清除已完成 | Click **清除完成** at the bottom / 点击底部清除完成 |
