const pokemonName = document.querySelector('.pokemon_nome');
const pokemonNumber = document.querySelector('.pokemon_numero');
const pokemonImage = document.querySelector('.pokemon_imagem');

const fetchPokemon = async (pokemon) =>{
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    const data = await APIResponse.json();
        return data;
}

const renderPokemon = async (pokemon) =>{
    const data = await fetchPokemon(pokemon);

    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
}

renderPokemon('gengar')
