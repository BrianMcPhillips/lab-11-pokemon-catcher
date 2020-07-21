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

let pokemonThrow1 = displayedPokemon[0];
let pokemonThrow2 = displayedPokemon[1];
let pokemonThrow3 = displayedPokemon[2];

console.log(pokemonThrow1);

renderPokemon(pokemonThrow1, pokemonThrow2, pokemonThrow3);

console.log(renderPokemon(pokemonThrow1));





// set event listeners to update state and DOM