# TTC Roulette

A little web app for exploring Toronto by subway: spin for a random TTC (Toronto Transit Commission) station or search for a specific one, and get nearby restaurants, parks, and cafes to check out — using the Google Places API.

Live at: https://ttcroulette-50eba.web.app (Firebase Hosting)

## Features

- **Homepage** — choose between Roulette mode and Search mode.
- **Roulette mode** (`/roulette`) — click **"Lets Play!"** to pick a random subway station. You get the station name, its subway line badge(s), and nearby places from Google Places for the selected category (Restaurants, Parks, or Cafes). Switching the category re-renders the list without a new API call.
- **Search mode** (`/search`) — *in progress.* Type a station name, pick it from live suggestions, and see the same station details and nearby places as Roulette mode.
- **Light/dark theme** — toggle with the 🌙 button; your choice is saved to `localStorage`.

### Planned

- **More cities** — expand beyond Toronto's TTC to other cities' transit systems.

## Tech stack

- [Vite](https://vite.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [`@googlemaps/js-api-loader`](https://www.npmjs.com/package/@googlemaps/js-api-loader) for the Google Places API
- Firebase Hosting for deployment

## Project structure

```
src/
  mainv2.ts           # app entry point: renders the theme toggle + page container, starts the router
  router.ts           # client-side routing between /, /roulette and /search (History API)
  home.ts             # homepage with the Roulette / Search mode buttons
  roulette.ts         # roulette page ("Lets Play!" button, station details, nearby places)
  search.ts           # search page (in progress)
  randomLogic.ts      # picks a random station, renders line color badges and place cards
  stations.ts         # station data helpers (random pick, search by name)
  places.ts           # Google Places API calls (nearby restaurants/parks/cafes)
  toggleDisplay.ts    # light/dark theme toggle
  data/stations.json  # TTC station names, coordinates, and line/colour data
  style.css
```

Pages are swapped in place by `router.ts` without a full page reload. Firebase Hosting rewrites every path to `index.html` (see `firebase.json`), so URLs like `/search` also work when opened directly or refreshed.

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
