
// import functions and grab DOM elements
import { rawPokemon } from './data/pokemon-list.js';
import { getUniqueArray, pushToEncounteredArray, clearOldPokemon } from './Utils.js';
import { renderPokemon } from './renderPokemon.js';
// initialize state
const nextButton = document.getElementById('next-button');
const caughtSpan = document.querySelector('#pokemon-caught');
const pokemonSeen = document.querySelector('#pokemon-seen');
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
    rounds++;
    const userInput = document.querySelector('input:checked');
    const captPokemon = userInput.value;
    pokemonCaught.push(captPokemon);
    clearOldPokemon();
    displayedPokemon = getUniqueArray(pokemon);
    pushToEncounteredArray(displayedPokemon, pokemonEncountered);
    renderDisplayedPokemon(displayedPokemon);
    caughtSpan.textContent = pokemonCaught.pokemon;
    pokemonSeen.textContent = `Pokemon Encountered ${pokemonEncountered.length}`;
    
    
    console.log(pokemonCaught);
    console.log(pokemonEncountered);
    console.log(rounds);
});







/* for (let i = 0; i < displayedPokemon.length; i++) {
    const pokemonList = displayedPokemon[i];
    const domUpdate = renderPokemon(pokemonList);
    list.appendChild(domUpdate);
}
*/







// set event listeners to update state and DOM