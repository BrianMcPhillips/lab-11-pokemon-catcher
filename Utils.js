/* eslint-disable */
//import { rawPokemon } from './data/pokemon-list.js';
//import { renderPokemon } from './renderPokemon.js';
export function getRandomPokemon(pokemonArray) {
    const randomIndex = Math.floor(Math.random() * pokemonArray.length);

    return pokemonArray[randomIndex];
}

export function getUniqueArray(array) {
    let possibleItems = array.slice();
    const randomChoices = [];
    for (let i = 0; i < 3; i++) {
        const currentItem = getRandomPokemon(possibleItems);
        randomChoices.push(currentItem);
        possibleItems = removeItemFromArray(possibleItems, currentItem);
    }
    return randomChoices;
}

export function removeItemFromArray(array, removeItem) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        const currentItem = array[i];
        if (currentItem._id !== removeItem._id)
            newArray.push(currentItem);
    }
    return newArray;
}

export function findById(pokemons, name) {
    for (let i = 0; i < pokemons.length; i++) { 
        const pokemon = pokemons[i];
        if (pokemon.name === name) {
            return pokemon;
        
        }

    }
    return null;
}



export function pushToEncounteredArray(displayedPokemon, pokemonEncountered) {
    for (let i = 0; i < displayedPokemon.length; i++) {

        const currentDisplayedPokemon = displayedPokemon[i];
        const find = findById(pokemonEncountered, currentDisplayedPokemon.name);
        if (find) {
            find.quantity++;
            
            
            
        } else { 
            pokemonEncountered.push({name: currentDisplayedPokemon.name, quantity: 1, captured: 0})}
        
    }
}

export function clearOldPokemon() {
    const labels = document.querySelectorAll('label');
    labels[0].remove();
    labels[1].remove();
    labels[2].remove();
}

const dataKey = 'POKEMONDATA';
export function saveToLocalStorage(data) {
    const stringyData = JSON.stringify(data);
    localStorage.setItem(dataKey, stringyData);
    
    
}

export function loadFromLocalStorage() {
    const stringyData = localStorage.getItem(dataKey);
    const data = JSON.parse(stringyData);
    return data;
}