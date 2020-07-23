// IMPORT MODULES under test here:
import { findById } from '../Utils.js';
import { rawPokemon } from '../data/pokemon-list.js';


const test = QUnit.test;

test('finds an item by name and returns object', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = { '_id':'5cef3501ef6005a77cd4fd29', 'name':'pidgey', 'id':21, 'species_id':16, 'height':3, 'weight':18, 'base_experience':50, 'type_1':'normal', 'type_2':'flying', 'attack':45, 'defense':40, 'hp':40, 'special_attack':35, 'special_defense':35, 'speed':56, 'ability_1':'keen-eye', 'ability_2':'tangled-feet', 'ability_hidden':'big-pecks', 'color_1':'#A8A878', 'color_2':'#A890F0', 'color_f':'#A8A295', 'egg_group_1':'flying', 'egg_group_2':'NA', 'url_image':'http://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png', 'generation_id':1, 'evolves_from_species_id':'NA', 'evolution_chain_id':6, 'shape_id':9, 'shape':'wings', 'pokebase':'pidgey', 'pokedex':'http://www.pokemon.com/us/pokedex/pidgey' };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(rawPokemon, 'pidgey');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
