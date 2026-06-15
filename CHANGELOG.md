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

### 修复

- README logo 与 CI 徽章指向已删除的 `Dreamacro/*` 仓库，改为本仓库资源与 Actions
- `index.html` favicon、PWA manifest 图标改为本地 `public/` 资源
- GitHub Actions 移除无效的 `clash.razord.top` 部署域名，修复 workflow 权限

### 说明

- 基于官方 `0.1.0`（`9a32d9d`，2023-09-26）
- Git：`2a57b4a`

---

## [0.1.0] - 2023-09-26（上游基线）

官方 Clash Dashboard 最终发布，含 ClashX jsBridge 等。详见 upstream commit history。
