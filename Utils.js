/* eslint-disable */
//import { rawPokemon } from './data/pokemon-list.js';
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