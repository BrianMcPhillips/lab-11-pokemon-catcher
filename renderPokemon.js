export function renderPokemon(pokemon) {
    const label = document.createElement('label');
    label.classList = 'pokemon';

    const inputButton = document.createElement('input');
    inputButton.type = 'radio';
    inputButton.name = 'pokemon-select';
    label.appendChild(inputButton);

    const img = document.createElement('img');
    img.src = pokemon.url_image;
    img.alt = pokemon.pokemon + ' image';
    label.appendChild(img);

    const h3 = document.createElement('h3');
    h3.textContent = pokemon.pokemon;
    label.appendChild(h3);

    /*const p = document.createElement('p');
    p.className = ''; */
    return label;
}

    