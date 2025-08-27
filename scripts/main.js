import { getPokemon, listPokemon, pickSprite } from "./api.js";
import { setText, show, hide, renderCard, renderGallery } from "./ui.js";

// DOM refs
const form = document.getElementById("searchForm");
const queryInput = document.getElementById("query");
const statusEl = document.getElementById("status");
const cardEl = document.getElementById("card");
const galleryEl = document.getElementById("gallery");
const pagePrev = document.getElementById("pagePrev");
const pageNext = document.getElementById("pageNext");

// Variables
let currentId = null;
let page = 0;
const pageSize = 15;

// Load and render a single Pokemon by name
async function loadPokemon(q) {
    try {
        setText(statusEl, "Loading…");
        hide(cardEl);

        const data = await getPokemon(q);
        // attach sprite
        data.__sprite = pickSprite(data);

        renderCard({ root: cardEl, data });
        show(cardEl);
        setText(statusEl, "");
        currentId = data.id;
    } catch (err) {
        setText(statusEl, err.message || "Error loading Pokemon.");
        hide(cardEl);
    }
}

/** Load a page of Pokémon for the gallery */
async function loadPage(p = 0) {
    try {
        setText(statusEl, "Loading page…");

        const list = await listPokemon(p, pageSize);

        // Turn results into {id, name, sprite}
        const items = await Promise.all(
            list.results.map(async (r) => {
                const id = Number(r.url.split("/").filter(Boolean).pop());
                const full = await getPokemon(id);
                return { id, name: r.name, sprite: pickSprite(full) || full.sprites.front_default || "" };
            })
        )

        renderGallery({
            root: galleryEl,
            list: items,
            onPick: (id) => loadPokemon(id),
        });

        // Enable/disable page buttons
        page = p;
        pagePrev.disabled = page <= 0;
        pageNext.disabled = (p + 1) * pageSize >= list.count;

        setText(statusEl, "");
    } catch (err) {
        setText(statusEl, err.message || "Error loading page.");
    }
}

// Events
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const q = queryInput.value.trim();
    if (q) loadPokemon(q);
});

pagePrev.addEventListener("click", () => {
    if (page > 0) loadPage(page - 1);
});
pageNext.addEventListener("click", () => {
    loadPage(page + 1);
});

// // Initial minimal load
// loadPage(0);
// loadPokemon("pikachu");