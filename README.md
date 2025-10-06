# ❤️ Herz-Injektor

**Ein interaktives Schreib-Tool für Autoren** – 12 emotionale Fragen, die dir helfen, glaubwürdige Figurenmomente zu erschaffen.

Erstellt mit **React**, **Vite**, **TailwindCSS** und gehostet über **GitHub Pages**.

---

## 🚀 [Jetzt ausprobieren](https://Guevo8.github.io/herz-injektor)

_(Funktioniert auf Desktop & Mobil)_

---

## ✨ Features

- **12 kreative Fragen**, um Figurenemotionen zu erforschen
- **Automatische Speicherung** per localStorage
- **Copy-to-Clipboard-Funktion** für deinen Schreibprompt
- **Schickes UI** mit Tailwind & animierten Icons
- **Vollständig statisch** – keine Server nötig

---

## 🛠 Tech-Stack

| Technologie | Zweck |
|-------------|-------|
| React | UI-Komponenten |
| Vite | Build & Dev Server |
| TailwindCSS | Styling |
| Lucide-React | Icons |
| GitHub Pages | Hosting |
| GitHub Actions | Automatisches Deployment |

---

## 📦 Lokale Installation

Wenn du das Projekt auf deinem eigenen Rechner starten möchtest:

```bash
# 1. Repository klonen
git clone https://github.com/Guevo8/herz-injektor.git
cd herz-injektor

# 2. Abhängigkeiten installieren
npm install

# 3. Lokalen Server starten
npm run dev

# 4. App öffnen
# http://localhost:5173
```

---

## 🚢 Deployment auf GitHub Pages

### Voraussetzungen
- Node.js (v16+)
- npm
- Git

### Schritt-für-Schritt Setup

```bash
# Projekt-Struktur erstellen (siehe unten)

# Dependencies installieren
npm install

# Auf GitHub Pages deployen
npm run deploy
```

### Wichtige Konfigurationen

**`package.json`** – Homepage-Feld anpassen:
```json
{
  "homepage": "https://Guevo8.github.io/herz-injektor"
}
```

**`vite.config.js`** – Base-Path setzen:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/herz-injektor/'
})
```

---

## 📁 Projekt-Struktur

```
herz-injektor/
├── node_modules/
├── public/
│   └── favicon.ico
├── src/
│   ├── App.jsx          # Haupt-App-Komponente mit allen 12 Fragen
│   ├── index.css        # Tailwind-Imports
│   └── main.jsx         # React-Entry-Point
├── .gitignore           # Node.js gitignore
├── index.html           # HTML-Template
├── package.json         # Dependencies & Scripts
├── postcss.config.js    # PostCSS für Tailwind
├── tailwind.config.js   # Tailwind-Konfiguration
└── vite.config.js       # Vite-Build-Config
```

---

## 🤖 Automatisches Deployment (CI/CD)

Dieses Repository ist für automatisches Deployment über **GitHub Actions** vorbereitet.

### Setup

1. Erstelle `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    permissions:
      contents: write
      
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

2. In **Settings → Pages**: 
   - Source: **Deploy from a branch**
   - Branch: **gh-pages** / root

3. Bei jedem Push auf `main` wird automatisch deployed! 🎉

---

## 📝 Die 12 Fragen

1. **Charakter wählen** – Welche Figur steht im Mittelpunkt?
2. **Der alltägliche Wunsch** – Was will dein Charakter HEUTE?
3. **Warum es wichtig ist** – Emotionaler Grund dahinter
4. **Die Störung** – Was verhindert diesen Wunsch?
5. **Körperliche Reaktion** – Wie reagiert der Körper?
6. **Der innere Konflikt** – Unausgesprochene Gedanken
7. **Die kleine Rebellion** – Was tut er trotzdem?
8. **Die magische Versuchung** – Wie könnte Magie helfen?
9. **Warum er widersteht** – Persönlicher Grund
10. **Der sinnliche Moment** – 5-Sinne-Detail
11. **Die emotionale Erkenntnis** – Schmerzhafte Wahrheit
12. **Der Übergang** – Dann passiert... (Plot greift ein)

---

## 🎯 Verwendung

1. Beantworte die 12 Fragen Schritt für Schritt
2. Klicke auf **"Prompt generieren"**
3. Kopiere den generierten Schreibprompt
4. Öffne dein Schreibprogramm und leg los!

---

## 📄 Lizenz

Dieses Projekt ist Open Source und steht zur freien Verfügung.

---

## 🤝 Beitragen

Feedback, Issues und Pull Requests sind willkommen!

---

**Made with ❤️ for writers by writers**
