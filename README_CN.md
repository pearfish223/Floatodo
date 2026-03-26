# FloatTodo 悬浮备忘录

一款轻量级桌面悬浮待办应用，支持 macOS 和 Windows，基于 Electron 构建。

![Platform](https://img.shields.io/badge/平台-macOS%20%7C%20Windows-lightgrey)
![Version](https://img.shields.io/badge/版本-1.0.0-blue)

## 功能特点

- **窗口置顶** — 始终悬浮在所有窗口之上，不会被遮住
- **缩成悬浮球** — 不用时缩成一个小圆点，随时唤出
- **紧急标签** — 标记紧急任务，显示红色"急"标签
- **截止日期** — 设置 DDL，逾期显示黄色，今日截止显示蓝色
- **自动排序** — 紧急和今日截止的任务自动置顶
- **磨砂玻璃 UI** — 半透明毛玻璃风格，与桌面融为一体

## 下载安装

从 [Releases](https://github.com/pearfish223/Floatodo/releases) 下载对应平台的安装包：

| 平台 | 文件 |
|---|---|
| macOS（Apple Silicon） | `FloatTodo-1.0.0-arm64.dmg` |
| Windows | `FloatTodo Setup 1.0.0.exe` |

## 从源码运行

需要 [Node.js](https://nodejs.org) 18 及以上版本。

```bash
git clone https://github.com/pearfish223/Floatodo.git
cd Floatodo
npm install
npm start
```

## 打包构建

```bash
# macOS
npm run build:mac

# Windows
npm run build:win
```

输出文件在 `dist/` 目录下。

## 使用说明

| 操作 | 方法 |
|---|---|
| 添加任务 | 在输入框输入内容，按 **Enter** |
| 标记紧急 | 添加前点击 🚨 按钮 |
| 设置截止日期 | 点击 📅 按钮选择日期 |
| 完成任务 | 点击左侧圆圈 |
| 删除任务 | 鼠标悬停后点击 **✕** |
| 缩成悬浮球 | 点击顶栏 **●** 按钮 |
| 置顶窗口 | 点击顶栏 **▲** 按钮 |
| 清除已完成 | 点击底部**清除完成** |
