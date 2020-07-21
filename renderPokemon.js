export function renderPokemon(pokemon) {
    const li = document.createElement('li');
    li.className = pokemon._id;

    const h3 = document.createElement('h3');
    h3.textContent = pokemon.pokemon;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = pokemon.url_image;
    img.alt = pokemon.pokemon + ' image';
    li.appendChild(img);

    /*const p = document.createElement('p');
    p.className = ''; */
    return li;
}

    