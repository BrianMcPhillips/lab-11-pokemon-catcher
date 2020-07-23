export function renderPokemon(pokemon) {
    const label = document.createElement('label');
    label.classList = 'pokemon';

    const inputButton = document.createElement('input');
    inputButton.type = 'radio';
    inputButton.name = 'pokemon-select';
    inputButton.value = pokemon.name;
    label.appendChild(inputButton);

    const img = document.createElement('img');
    img.src = pokemon.url_image;
    img.alt = pokemon.pokemon + ' image';
    img.id = 'pokemon-image';
    img.width = 200;
    img.height = 200;
    label.appendChild(img);

    const h3 = document.createElement('h3');
    h3.textContent = pokemon.name;
    label.appendChild(h3);

   
    return label;
}

    