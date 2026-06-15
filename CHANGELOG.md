# Changelog

Format based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

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
