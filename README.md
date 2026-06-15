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
        <img src="https://img.shields.io/badge/changelog-0.1.15-blue?style=flat-square" alt="Changelog">
    </a>
</p>

## 声明

本仓库由 **[JieMeiDev](https://github.com/JieMeiDev)** 维护，用于 Clash External Controller 的 Web 管理界面。

- 基于官方 Clash Dashboard 最后公开版本（0.1.0）二次开发，当前 **v0.1.15**
- 与 Dreamacro 及原官方项目无隶属关系
- 完整变更见 [CHANGELOG.md](./CHANGELOG.md)

## 主要定制（v0.1.15）

- **Overview 总览**：实时上下行、总量、活跃连接、流量曲线
- **Connections**：透明代理优化列顺序；移动端 Conns 入口与详情抽屉
- **Apple 风格主题**：深色纯黑背景 + 分组卡片；浅色 iOS 风格
- **主题切换**（YACD 风格）：侧边栏 Auto / Dark / Light，偏好本地保存
- 移除 Process 列及不适用的 Settings 开关（透明代理 / 路由器场景）
- About 页：Clash 源码指向 [JieMeiDev/clash](https://github.com/JieMeiDev/clash)

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

## 部署到路由器

```bash
scp -O -r ../clashdb/* root@192.168.1.1:/root/.config/clash/ui/db3/
```

部署后若样式未更新，硬刷新或清除 Service Worker 缓存。

## LICENSE

MIT License
