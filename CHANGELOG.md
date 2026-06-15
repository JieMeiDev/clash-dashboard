# Changelog

Fork 自 [chmod777john/clash-dashboard](https://github.com/chmod777john/clash-dashboard)（Dreamacro 官方最后一版）。  
静态部署变更日志见上级目录 [../CHANGELOG.md](../CHANGELOG.md)。

格式基于 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.0.0/)。

---

## [0.1.1] - 2026-06-15

### 移除

- Connections 表格 **Process** 列（透明代理无进程信息）
- 连接详情侧栏中的 **进程 / 路径** 字段

### 新增

- **macOS 暗黑模式**：`src/styles/dark-mode.scss`，跟随 `prefers-color-scheme: dark`
- `index.html` 增加 `color-scheme` 与分主题 `theme-color` meta

### 说明

- 基于官方 `0.1.0`（`9a32d9d`，2023-09-26）
- Git：`2a57b4a`

---

## [0.1.0] - 2023-09-26（上游基线）

官方 Clash Dashboard 最终发布，含 ClashX jsBridge 等。详见 upstream commit history。
