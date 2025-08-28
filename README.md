## Mini Pokedex Search & Gallery

## What this app is 
- A mini Pokedex that: 
- fetches data from the public PokeAPI 
- Search a Pokemon by name or ID (ex: pikachu or 25)
- See a simple card with a picture, types, stats, and abilities
- Browse a gallery with Next / Prev page buttons

## My initial thought process
- Start small: make search -> show one Pokemon.
- Add gallery: show a list of pokemon with pagination.
- Keep files organized: split code into 3 modules as per rubric.
- Handle errors: show error messages if something goes wrong.
- Only basic styling: focus on the project working first.

## What I wanted to work
- Search by name or ID ✅
- Pokemon detail card (image, types, stats, abilities) ✅
- Paginated gallery with Next/Prev ✅
- Uses fetch with async/await ✅
- Basic error messages (ex: “Pokemon not found”)❌

## How it works (step by step)

### Search flow
- You type a name/ID and press Search.
- The app calls the PokeAPI with fetch.
- If it succeeds, the page shows the Pokemon card.
- If it fails, the status area shows an error message.
- Each card has a basic stats and abilities dropdown

### Gallery flow
- On page load, the app requests a page of Pokemon names.
- For each one, it grabs a small image and shows a tile.
- Clicking a tile loads that Pokemon’s card.
- Next/Prev buttons change the page.

## Files
- index.html – the page structure (form, status, card, gallery)
- styles.css – light styles so it’s readable
- api.js – talks to the API (fetch calls)
- ui.js – updates the page (small helper functions)
- main.js – connects everything (events, state, page loads)

## Future ideas
- Type badges: Color tags for types (fire, water, etc.).
- Partial search: Find Pokémon by partial name (e.g., “char” -> Charmander/Charmeleon/Charizard).
- Stats bars: Simple bars for HP/Attack/etc. (no chart library needed).
- Favorites: ⭐ button to save Pokémon to a small list (use localStorage).
- Compare mode: Pick two Pokémon and compare stats side-by-side.
- Team builder: Pick 6 Pokémon, show total stats and type weaknesses.
- Evolution chain: Show “evolves from → evolves to” with small sprites.



