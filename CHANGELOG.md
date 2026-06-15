# Changelog

Format based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

**Versioning:** bump `package.json` and add a changelog entry for every user-facing change before release.

---

## [0.1.12] - 2026-06-15

### Fixed

- **Mobile Proxies:** page can scroll vertically again (strategy groups and proxy list)
- Proxy group tags no longer block vertical swipe on iOS (`touch-action: pan-y`)

---

## [0.1.11] - 2026-06-15

### Changed

- **About** page: Clash core Source link now points to [JieMeiDev/clash](https://github.com/JieMeiDev/clash) archive mirror

---

## [0.1.10] - 2026-06-15

### Fixed

- **Mobile dark mode:** pinned Source IP column background now matches other columns (was `#1c1c1e` vs card `#2c2c2e`)

---

## [0.1.9] - 2026-06-15

### Added

- **Mobile Connections** page: show in top nav (label **Conns**), responsive table and full-width detail drawer

### Changed

- On small screens, Connections table hides Network / Chains / Rule / Type columns (tap a row for full details)

---

## [0.1.8] - 2026-06-15

### Changed

- **Connections** column order optimized for transparent-proxy production use: Source IP → Destination IP → Speed → Upload → Download → Time → Network → Chains → Rule → Type
- Source IP is now the pinned (fixed) column when scrolling horizontally
- Default sort changed to **Time** descending (newest first)

---

## [0.1.7] - 2026-06-15

### Changed

- Connections table first column renamed from **Host** to **Destination IP**, showing `destinationIP:port` instead of domain host

---

## [0.1.6] - 2026-06-15

### Removed

- **Start at login**, **Set as system proxy**, and **Allow connect from Lan** from Settings — not applicable to transparent-proxy / router deployments
- ClashX jsBridge handlers for system proxy and start-at-login
- `allow-lan` read/write from the dashboard

---

## [0.1.5] - 2026-06-15

### Added

- **Redir port** and **TProxy port** fields on the Settings page (between HTTP and Mixed ports)
- Read/write via Clash API `redir-port` and `tproxy-port`

---

## [0.1.4] - 2026-06-15

### Added

- **About** page showing Clash core version and Clash Dashboard version with GitHub source links
- About entry (info icon) in the sidebar footer

---

## [0.1.3] - 2026-06-15

### Removed

- **Chinese (zh_CN) locale** — UI is English-only
- Language selector on the Settings page

### Fixed

- External controller edit button no longer hardcoded as「编辑」

---

## [0.1.2] - 2026-06-15

### Added

- **Overview** page with real-time upload/download speed, traffic totals, active connection count, and traffic chart (via Clash `/traffic` and `/connections` WebSockets)
- Overview set as the default landing page

---

## [0.1.1] - 2026-06-15

### Removed

- **Process** column on the Connections page (no process metadata under transparent proxy)
- Process / path fields in the connection detail drawer

### Added

- **macOS dark mode** via `prefers-color-scheme: dark` (`src/styles/dark-mode.scss`)
- `color-scheme` and theme-aware `theme-color` meta tags in `index.html`

### Fixed

- README logo and CI badge no longer point at deleted `Dreamacro/*` repositories
- Favicon and PWA manifest icons served from local `public/` assets
- GitHub Actions workflow permissions and invalid `clash.razord.top` deploy target

---

## [0.1.0] - 2023-09-26（上游基线）

官方 Clash Dashboard 最终发布，含 ClashX jsBridge 等。详见 upstream commit history。
