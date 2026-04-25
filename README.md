# retro-chiba

懷舊電玩歷史館 → https://retro.chiba.tw

家用主機編年史 + 掌機支線 + 街機/PC 支線，繁中／簡中／英／日四語。

## Dev

```bash
npm install
npm run dev
```

## Build & Deploy

```bash
npm run build
rsync -avz --delete dist/ chiba:/var/www/retro-chiba/
```
