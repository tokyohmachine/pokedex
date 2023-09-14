const pokemonList = document.getElementById("pokemonDetail");

const firstGenLimit = 151; // 151
const limit = 1; //10
let offset = 0;

function convertPokemonToLi(pokemon) {
  return `
  <ol class="pokemon ${pokemon.type}">
    <div class="icons">
      <img class="arrow" width="30"  height="30" src="https://img.icons8.com/ios-glyphs/30/long-arrow-left.png" alt="long-arrow-left"/>
      <img class="heart" width="24" height="24" src="https://img.icons8.com/material-outlined/24/like--v1.png" alt="like--v1"/>
    </div>

    <li>
    <span class="number">#00${pokemon.number}</span>
    <span class="name">${pokemon.name}</span>

    <div class="detail">
        <ol class="types">
            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join("")}
        </ol>
    </div>

      <img class="specie-img" src="${pokemon.photo}" alt="${pokemon.name}">
    </li>

   
      
  </ol>
  `;
}

function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToLi).join("");
    pokemonDetail.innerHTML += newHtml;
  });
}

// Initial load of Pokémon items for the first generation
loadPokemonItens(offset, limit);




 