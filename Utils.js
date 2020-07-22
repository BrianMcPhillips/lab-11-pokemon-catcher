/* eslint-disable */
//import { rawPokemon } from './data/pokemon-list.js';
import { renderPokemon } from './renderPokemon.js';
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

export function findById(pokemons, id) {
    for (let i = 0; i < pokemons.length; i++) 
    { const pokemon = pokemons[i];
        if (pokemon.id === id) {
            return pokemon;
        
        }

    }
    return null;
}



export function pushToEncounteredArray(displayedPokemon, pokemonEncountered) {
    for (let i = 0; i < displayedPokemon.length; i++) {
        const currentDisplayedPokemon = displayedPokemon[i];
        if (findById(pokemonEncountered, displayedPokemon.pokemon)) {
            pokemonEncountered.quantity++;
            
            
            
        } else { pokemonEncountered.push({id: currentDisplayedPokemon.pokemon, quantity: 1})}
        
    }
}

export function renderDisplayedPokemon(displayedPokemon) {
    for (let i = 0; i < displayedPokemon.length; i++) {
        const pokemonList = displayedPokemon[i];
        const domUpdate = renderPokemon(pokemonList);
        list.appendChild(domUpdate);
    }
}