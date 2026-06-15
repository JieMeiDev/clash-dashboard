#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
VERSION="$(node -p "require('$ROOT/package.json').version")"
OUT="$ROOT/clash-dashboard-${VERSION}-dist.zip"

cd "$ROOT"

if command -v pnpm >/dev/null 2>&1; then
  pnpm build
else
  npm run build
fi

rm -f "$OUT"
(cd dist && zip -r "$OUT" .)

echo "Created: $OUT"
echo "Upload contents to Clash external-ui directory (e.g. ui/db3/)"
