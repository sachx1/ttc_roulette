# TTC Roulette

A little web app that picks a random TTC (Toronto Transit Commission) subway station for you and suggests nearby restaurants, parks, and cafes to check out — using the Google Places API.

Live at: https://ttcroulette-50eba.web.app (Firebase Hosting)

## How it works

1. Click **"Lets Play!"** to pick a random subway station from the TTC line data.
2. The station name and its subway line indicator(s) are displayed.
3. Nearby places are fetched from Google Places and shown under the category you have selected (Restaurants, Parks, or Cafes) — switching the dropdown re-renders the list without a new API call.
4. Toggle between light and dark theme with the 🌙 button (saved to `localStorage`).

## Tech stack

- [Vite](https://vite.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [`@googlemaps/js-api-loader`](https://www.npmjs.com/package/@googlemaps/js-api-loader) for the Google Places API
- Firebase Hosting for deployment

## Project structure

```
src/
  mainv2.ts          # app entry point (renders the UI, wires up roulette + theme toggle)
  randomLogic.ts      # picks a random station, renders line color badges and place cards
  places.ts           # Google Places API calls (nearby restaurants/parks/cafes)
  toggleDisplay.ts     # light/dark theme toggle
  data/stations.json  # TTC station names, coordinates, and line/colour data
  style.css
```

## Getting started

### Prerequisites

- Node.js
- A Google Maps/Places API key with the Places API enabled

### Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the project root with your API key:

   ```
   VITE_GOOGLE_PLACES_API_KEY=your_api_key_here
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

### Other scripts

```bash
npm run build     # type-check and build for production (outputs to dist/)
npm run preview   # preview the production build locally
```

## Deployment

The site is deployed to Firebase Hosting from the `dist/` folder:

```bash
npm run build
firebase deploy
```

## License

This repository has no open-source license, so all rights to the code are reserved by the authors — it isn't licensed for reuse.
