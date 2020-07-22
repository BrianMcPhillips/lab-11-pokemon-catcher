/* eslint-disable */
// import functions and grab DOM elements
import { rawPokemon } from './data/pokemon-list.js';
import { getUniqueArray, pushToEncounteredArray } from './Utils.js';
import { renderPokemon } from './renderPokemon.js';
// initialize state
const nextButton = document.getElementById('next-button');
const caughtDiv = document.querySelector('#pokemon-caught');
const pokemonDiv = document.querySelector('#pokemon-display');
const list = document.getElementById('pokemon-display');


//let rounds = 0;
const pokemon = rawPokemon.slice();
let pokemonEncountered = [];
let pokemonCaught = [];
let rounds = 0;

let displayedPokemon = getUniqueArray(pokemon);

function renderDisplayedPokemon(displayedPokemon) {
    for (let i = 0; i < displayedPokemon.length; i++) {
        const pokemonList = displayedPokemon[i];
        const domUpdate = renderPokemon(pokemonList);
        list.appendChild(domUpdate);
    }
}
pushToEncounteredArray(displayedPokemon, pokemonEncountered);

renderDisplayedPokemon(displayedPokemon);


nextButton.addEventListener('click', () => {
    const userInput = document.querySelector('input:checked');
    const captPokemon = userInput.value;
    
    rounds++;
    pokemonCaught.push(captPokemon);
    displayedPokemon.pop();
    displayedPokemon.pop();
    displayedPokemon.pop();
    displayedPokemon = getUniqueArray(pokemon);
    pushToEncounteredArray(displayedPokemon, pokemonEncountered);
    renderDisplayedPokemon(displayedPokemon);
    

    
    console.log(pokemonCaught);
    

});

console.log(pokemonEncountered);

//not working


/* for (let i = 0; i < displayedPokemon.length; i++) {
    const pokemonList = displayedPokemon[i];
    const domUpdate = renderPokemon(pokemonList);
    list.appendChild(domUpdate);
}
*/







// set event listeners to update state and DOM