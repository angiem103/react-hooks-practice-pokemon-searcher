import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemonList, setPokemonList] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch(" http://localhost:3001/pokemon")
    .then(r => r.json())
    .then(pokemons => setPokemonList(pokemons))
  }, [])

  function onPokemonSearch(search){
    setSearch(search)
  }

  const filteredPokemons = !search ? [...pokemonList] : [...pokemonList].filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(search)
    })

  function addNewPokemon(newPokemon) {
    setPokemonList([...pokemonList, newPokemon])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddNewPokemon={addNewPokemon}/>
      <br />
      <Search onPokemonSearch={onPokemonSearch}/>
      <br />
      <PokemonCollection filteredPokemons={filteredPokemons} />
    </Container>
  );
}

export default PokemonPage;
