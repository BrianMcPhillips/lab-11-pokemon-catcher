
// import functions and grab DOM elements
import { rawPokemon } from './data/pokemon-list.js';
import { getUniqueArray, pushToEncounteredArray, clearOldPokemon, findById, saveToLocalStorage } from './Utils.js';
import { renderPokemon } from './renderPokemon.js';
// initialize state
const nextButton = document.getElementById('next-button');
const caughtSpan = document.querySelector('#pokemon-caught');
//const pokemonSeen = document.querySelector('#pokemon-seen');
const list = document.getElementById('pokemon-display');


//let rounds = 0;
const pokemon = rawPokemon.slice();
let pokemonEncountered = [];
//let pokemonCaught = [];
let rounds = 0;


let displayedPokemon = getUniqueArray(pokemon);

function renderDisplayedPokemon(displayedPokemon) {
    for (let i = 0; i < displayedPokemon.length; i++) {
        const pokemonList = displayedPokemon[i];
        const domUpdate = renderPokemon(pokemonList);
        list.appendChild(domUpdate);
    }
}
//pushToEncounteredArray(displayedPokemon, pokemonEncountered);

renderDisplayedPokemon(displayedPokemon);


nextButton.addEventListener('click', () => {
    const userInput = document.querySelector('input:checked');
    const captPokemon = userInput.value; 
    
    
    
    
    pushToEncounteredArray(displayedPokemon, pokemonEncountered);
    rounds++;
    
    const capturedPokemon = findById(pokemonEncountered, captPokemon);
    
    if (userInput === null) {
        alert('Please Select A Pokemon');
    } 
    if (userInput === null) {
        rounds--;
    }
    if (rounds === 9) {
        nextButton.textContent = 'Go to results page';
    }
    
    capturedPokemon.captured++;
    
    if (rounds === 10) {
    
        saveToLocalStorage(pokemonEncountered);
        window.location.pathname = '../results-page/index.html';
    }
    
    
    clearOldPokemon();
    displayedPokemon = getUniqueArray(pokemon);
    
    renderDisplayedPokemon(displayedPokemon);
    caughtSpan.textContent = `Pokemon Captured = ${rounds}`;
    
    
    
  
    
    
});







/* for (let i = 0; i < displayedPokemon.length; i++) {
    const pokemonList = displayedPokemon[i];
    const domUpdate = renderPokemon(pokemonList);
    list.appendChild(domUpdate);
}
*/







// set event listeners to update state and DOM