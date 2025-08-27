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
const pageSize = 12;