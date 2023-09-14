
class Pokemon {
      // about
      species;
      height;
      weight;
      ability;
      gender;
      egg_groups;
      egg_cycle;
      // base stats
      hp;
      attack;
      defense;
      sp_Atk;
      sp_Def;
      speed;
      total;
      // evolution
      evolution_chain;
      // moves
      moves;
    
  }
  
  
  const pokeApi = {}
  
  function convertPokeApiDetailToPokemon(pokeDetail) {
      const pokemon = new Pokemon()
      pokemon.species = pokeDetail.pokemon_species;
      pokemon.height = pokeDetail.height;
      pokemon.weight = pokeDetail.weight;
      pokemon.ability = pokeDetail.ability;
      pokemon.gender = pokeDetail.gender;
      pokemon.egg_groups = pokeDetail.egg_groups.map((group) => group);
      pokemon.egg_cycle = pokeDetail.egg_cycle;
      pokemon.hp = pokeDetail.stats[0].base_stat;
      pokemon.attack = pokeDetail.stats[1].base_stat;
      pokemon.defense = pokeDetail.stats[2].base_stat;
      pokemon.sp_Atk = pokeDetail.stats[3].base_stat;
      pokemon.sp_Def = pokeDetail.stats[4].base_stat;
      pokemon.speed = pokeDetail.stats[5].base_stat;
      pokemon.total = pokeDetail.stats.reduce((total, stat) => total + stat.base_stat, 0);
      pokemon.evolution_chain = pokeDetail.evolution_chain;
  
      return pokemon
  }
  
  pokeApi.getPokemonDetail = (pokemon) => {
      return fetch(pokemon.url)
          .then((response) => response.json())
          .then(convertPokeApiDetailToPokemon)
  }
  
  pokeApi.getPokemons = (offset = 0, limit = 5) => {
      const pokemon = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  
      return fetch(pokemon)
          .then((response) => response.json())
          .then((jsonBody) => jsonBody.results)
          .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
          .then((detailRequests) => Promise.all(detailRequests))
          .then((pokemonsDetails) => pokemonsDetails)
  }
  
  
  
  
  
    