const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMore");

const firstGenLimit = 151; // 151
const limit = 10; //10
let offset = 0;

function convertPokemonToLi(pokemon) {
  return `
      <li class="pokemon ${pokemon.type}">
          

          <div class="detail">
            <span class="number">#00${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

              <ol class="types">
                  ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join("")}
              </ol>
          </div>

         
          <img src="${pokemon.photo}" alt="${pokemon.name}">
          
      </li>
  `;
}

function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToLi).join("");
    pokemonList.innerHTML += newHtml;
  });
}

// Initial load of Pokémon items for the first generation
loadPokemonItens(offset, limit);


 // Event listener for Load More button
 loadMoreButton.addEventListener("click", () => {
   offset += limit;
   const qtdNextPage = offset + limit; // 0 + 10 / 152 + 10

   if (qtdNextPage >= firstGenLimit) {
     const newLimit = firstGenLimit - offset;
     loadPokemonItens(offset, newLimit);

     loadMoreButton.parentElement.removeChild(loadMoreButton);
   } else {
    loadPokemonItens(offset, limit);
  }

 });




 