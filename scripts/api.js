const API = "https://pokeapi.co/api/v2";
const cache = new Map();

// Helper to get + JSON with cache
async function getJSON(url) {
    if (cache.has(url)) return cache.get(url);
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Request failed (${res.status})`);
    const data = await res.json();
    cache.set(url, data);
    return data;
}

// Get a Pokemon by name
export async function getPokemon(q) {
    const url = `${API}/pokemon/${String(q).toLowerCase().trim()}`;
    return getJSON(url);
}

// List Pokemon with pages
export async function listPokemon(page = 0, pageSize = 20) {
    const offset = page * pageSize;
    const url = `${API}/pokemon?limit=${pageSize}&offset=${offset}`;
    return getJSON(url); // { count, next, previous, results: [{name, url}, ...] }
}

// Get sprite from a pokemon/:id JSON
export function pickSprite(pokemon) {
    return (
        pokemon.sprites?.other?.["official-artwork"]?.front_default ||
        pokemon.sprites?.front_default ||
        ""
    );
}