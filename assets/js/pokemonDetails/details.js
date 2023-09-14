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




// const pokemonList = document.getElementById("pokemonDetail");


// const aboutLink = document.querySelector('.about');
// const baseStatsLink = document.querySelector('.baseStats');
// const evolutionLink = document.querySelector('.evolution');
// const movesLink = document.querySelector('.moves');



// // quando clicar no pokemonList uma nova interface aparece, que eh direcionado por meio do link anchor tag para a nova pagina html
// //em seguida aparece as  informacoes sobre o pokemon clicado 
// const firstGenLimit = 151; // 151
// const limit = 10; //10
// let offset = 0;

// function aboutDetails(about) {
//     return `
//     <li>Species ${about.species}</li>
//     <li>Height ${about.height}</li>
//     <li>Weight ${about.weight}</li>
//     <li>Abilities ${about.ability}</li>

//     <h3>Breeding</h3>

//     <li>Gender  ${about.gender}</li>
//     <li>Egg Groups  ${about.egg_groups}</li>
//     <li>Egg Cycle  ${about.egg_cycle}</li>
    
//     `
// }
 
// function baseStatesDetails(base) {
//     return `
//     <li>HP ${base.}</li>
//     <li>Attack ${base}</li>
//     <li>Defense ${base}</li>
//     <li>Sp. Atk ${base}</li>
//     <li>Sp. Def ${base}</li>
//     <li>Speed ${base}</li>
//     <li>Total ${base}</li>
    
//     <h3>Types defenses</h3>
//     <p>The effectiveness of each type on ${pokemon.type}</p>
    
//     `
// }

// function evolutionDetails(evolution) {
//     return `
//     <h3>Evolution chain</h3>
//     <p>${evolution.evolution_chain}</p>
    
    
//     `
// }

// function movesDetails(moves) {
//     return `
    
//     <li>HP ${}</li>
//     `
// }


// buttonPokemonImage.forEach((button) => {
//   button.addEventListener('click', function() {

//     function loadPokemonItens(offset, limit) {
//         pokeApi.getPokemonsInfo(offset, limit).then((pokemons = []) => {
//           const newHtml = pokemons.map(aboutDetails, baseStatesDetails, evolutionDetails, movesDetails).join("");
//           pokemonDetail.innerHTML += newHtml;
//         });
//       }
    
// loadPokemonItens(offset, limit);

    

// // Add the "active" class to the "About" link and remove it from other links
//     aboutLink.classList.add('active');
//     baseStatsLink.classList.remove('active');
//     evolutionLink.classList.remove('active');
//     movesLink.classList.remove('active');
//   });
// });
