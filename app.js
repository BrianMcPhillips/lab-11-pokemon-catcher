/* eslint-disable */
// import functions and grab DOM elements
import { rawPokemon } from './data/pokemon-list.js';
import { getRandomPokemon } from './Utils.js';
// initialize state
const nextButton = document.getElementById('next-button');
const caughtDiv = document.querySelector('#pokemon-caught');

let rounds = 0;
const pokemon = rawPokemon.slice();
// set event listeners to update state and DOM