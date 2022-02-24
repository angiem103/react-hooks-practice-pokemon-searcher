import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({filteredPokemons}) {


  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {filteredPokemons.map(pokemon => <PokemonCard pokemon={pokemon} key={pokemon.id}/>)}
    </Card.Group>
  );
}

export default PokemonCollection;
