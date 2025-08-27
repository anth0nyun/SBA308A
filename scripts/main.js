//DOM functions
export function setText(el, text = "") { el.textContent = text; }
export function show(el) { el.classList.remove("hidden"); }
export function hide(el) { el.classList.add("hidden"); }

export function clear(el) { el.innerHTML = ""; }
export function li(text) {
    const item = document.createElement("li");
    item.textContent = text;
    return item;
}

// Pokemon card
export function renderCard({ root, data }) {
    const imgEl = root.querySelector("#sprite");
    const nameEl = root.querySelector("#name");
    const typesEl = root.querySelector("#types");
    const statsEl = root.querySelector("#stats");
    const abilitiesEl = root.querySelector("#abilities");

    // Name + id
    nameEl.textContent = `${data.name} (#${data.id})`;

    // Sprite
    imgEl.src = data.__sprite;
    imgEl.alt = data.name;

    // Types
    typesEl.textContent = `Type: ${data.types.map(t => t.type.name).join(", ")}`;

    // Stats
    clear(statsEl);
    data.stats.forEach(s => statsEl.appendChild(li(`${s.stat.name}: ${s.base_stat}`)));

    // Abilities
    clear(abilitiesEl);
    data.abilities.forEach(a => abilitiesEl.appendChild(li(a.ability.name)));
}
