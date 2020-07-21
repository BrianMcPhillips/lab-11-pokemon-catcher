/* eslint-disable */
// import functions and grab DOM elements
import { rawPokemon } from './data/pokemon-list.js';
import { getUniqueArray } from './Utils.js';
import { renderPokemon } from './renderPokemon.js';
// initialize state
const nextButton = document.getElementById('next-button');
const caughtDiv = document.querySelector('#pokemon-caught');
const pokemonDiv = document.querySelector('#pokemon-display');



//let rounds = 0;
const pokemon = rawPokemon.slice();
let pokemonEncountered = [];
let pokemonCaught = [];

const displayedPokemon = getUniqueArray(pokemon);

const list = document.getElementById('pokemon-display');
for (let i = 0; i < displayedPokemon.length; i++) {
    const pokemonList = displayedPokemon[i];
    const domUpdate = renderPokemon(pokemonList);
    list.appendChild(domUpdate);
}








// set event listeners to update state and DOM