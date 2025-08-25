const API = "https://pokeapi.co/api/v2";
const cache = new Map();

async function getJSON(url) {
    if (cache.has(url))
        return cache, getJSON(url);

    const res = await fetch(url);
    if (!res.ok)
        throw new err(`Request failed`);

    const data = await res.json();
    cache.set(url, data);
    return data;
}

export async function getPokemon(query) {
    const url = `${API}/pokemon/${String(query).toLowerCase().trim()}`;
    return getJSON(url);
}