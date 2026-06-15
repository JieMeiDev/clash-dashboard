<h1 align="center">
    <img src="src/assets/logo.png" alt="Clash" width="200">
    <br>
    Clash Dashboard
    <br>
</h1>

<h4 align="center">Web Dashboard for Clash External Controller</h4>

<p align="center">
    <a href="https://github.com/JieMeiDev/clash-dashboard/releases">
        <img src="https://img.shields.io/github/v/release/JieMeiDev/clash-dashboard?style=flat-square" alt="Version">
    </a>
    <a href="https://github.com/JieMeiDev/clash-dashboard/blob/master/CHANGELOG.md">
        <img src="https://img.shields.io/badge/changelog-0.1.17-blue?style=flat-square" alt="Changelog">
    </a>
</p>

## 声明

本仓库由 **[JieMeiDev](https://github.com/JieMeiDev)** 维护，用于 Clash External Controller 的 Web 管理界面。

- 基于官方 Clash Dashboard 最后公开版本（0.1.0）二次开发，当前 **v0.1.17**
- 与 Dreamacro 及原官方项目无隶属关系
- 完整变更见 [CHANGELOG.md](./CHANGELOG.md)

## 主要定制（v0.1.17）

- **Overview 总览**：实时上下行、总量、活跃连接、流量曲线
- **Statistics 统计**：局域网 / 目标 IP 下载 Top 10，按自然月累计，localStorage 持久化，一键清理
- **Connections**：透明代理优化列顺序；Destination IP / Chains 固定列宽；修复 Type 列错位
- **Apple 风格主题**：深色纯黑背景 + 分组卡片；浅色 iOS 风格
- **主题切换**（YACD 风格）：侧边栏 Auto / Dark / Light，偏好本地保存
- **字体统一**：页面标题 400 常规字重，标签/表头 500，层次靠字号与颜色区分
- 移除 Process 列及不适用的 Settings 开关（透明代理 / 路由器场景）
- About 页：Clash 源码指向 [JieMeiDev/clash](https://github.com/JieMeiDev/clash)

## 下载部署（推荐）

从 [Releases](https://github.com/JieMeiDev/clash-dashboard/releases) 下载 **`clash-dashboard-x.x.x-dist.zip`**（预编译静态包，**无需 Node、无需 build**）：

1. 解压 zip
2. 将解压出的**所有文件**（`index.html`、`assets/`、`sw.js` 等）上传到 Clash 的 external-ui 目录，例如 `/root/.config/clash/ui/db3/`
3. 在 `config.yaml` 中设置 `external-ui: ui/db3`（路径与目录名一致即可）
4. 浏览器访问 Clash External Controller；若连不上，检查 `secret` / 端口

```bash
# 示例：上传到 OpenWrt / 路由器
scp -O -r index.html assets sw.js workbox-*.js manifest.webmanifest icon.png logo.png \
  root@192.168.1.1:/root/.config/clash/ui/db3/
```

> **注意：** Release 里的 **Source code** 是源码，不能直接放进 ui 目录使用；请下载带 **`-dist.zip`** 的静态包。

部署后若样式未更新，硬刷新或清除 Service Worker 缓存。

## 开发

```bash
pnpm install   # 或 npm install
pnpm start     # http://localhost:3000/
pnpm build
```

## 部署到本地静态目录

仓库上级目录 `clashdb/` 为路由器部署用的静态产物目录：

```bash
./scripts/deploy-local.sh
```

## 部署到路由器（开发者）

若已本地 build，可直接上传 `dist/` 内容：

```bash
pnpm build
scp -O -r dist/* root@192.168.1.1:/root/.config/clash/ui/db3/
```

或使用上级目录同步脚本（目录布局为 `clashdb/clash-dashboard/` 时）：

```bash
./scripts/deploy-local.sh
scp -O -r ../clashdb/* root@192.168.1.1:/root/.config/clash/ui/db3/
```

## LICENSE

MIT License
