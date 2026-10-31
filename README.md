# Sunil Rathod — Responsive Portfolio

A complete React + Vite portfolio with responsive layouts, mobile navigation, data-driven experience/project/skill sections, project filters, and a contact form that opens the visitor's email app.

## Run locally

1. Install Node.js LTS.
2. Extract this folder and open it in VS Code.
3. In the terminal run:
   ```bash
   npm install
   npm run dev
   ```
4. Build and check production output:
   ```bash
   npm run build
   npm run preview
   ```

## Update portfolio content dynamically

Edit `src/data/portfolio.js` to update your profile, experiences, projects, education, skills, and languages. Components map over this data automatically, so adding an item updates the page without rewriting the layout.

## Add your images

Place your actual screenshots/images in `public/projects/` using these filenames (or change the `image` values in `src/data/portfolio.js`):

- `bgc.jpg`
- `smart-buy.jpg`
- `lms.jpg`
- `youtube-clone.jpg`
- `portfolio-dashboard.jpg`
- `online-exam.jpg`
- `signature-detection.jpg`
- `hate-speech.jpg`
- `todo.jpg`
- Optional experience images: `cst.jpg`, `aishwi.jpg`, `unified-mentor.jpg`, `rinex.jpg`

If an image is missing, project cards show a styled placeholder rather than a broken image. For a real profile photo, add `public/profile.jpg` and change the hero visual or ask to integrate it.

## Resume and contact details

Copy your latest resume into `public/Sunil_Rathod_resume.pdf`. Update `profile.email` and `profile.linkedin` in `src/data/portfolio.js` with the exact addresses you want public. The LinkedIn URL is deliberately left generic because the exact profile URL was not provided in this task.

## Run without manually entering `npm run dev` each time

For development, `npm run dev` starts Vite; a running local development server is required. To open it with one click on Windows, create `start-portfolio.bat` containing:

```bat
@echo off
cd /d "%~dp0"
if not exist node_modules call npm install
start "Sunil Portfolio" cmd /k "npm run dev -- --host 127.0.0.1"
timeout /t 3 >nul
start http://127.0.0.1:5173
```

Double-click the file. For a portfolio that visitors can open any time without your PC/server running, deploy the built app to Vercel or Netlify. On Vercel use build command `npm run build` and output directory `dist`; future Git pushes can trigger automatic redeploys.

## Accuracy notes

BGC and LMS project descriptions are intentionally conservative because their precise implemented features were not provided. Replace their descriptions/technology tags in `src/data/portfolio.js` with exact details. The skill percentages are visual indicators for the UI, not independently verified assessments.
