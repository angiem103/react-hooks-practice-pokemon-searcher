import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {

  const [image, setImage] = useState(pokemon.sprites.front)

  function changeImage() {
   if (image === pokemon.sprites.front){
     setImage(pokemon.sprites.back)
   } else {
     setImage(pokemon.sprites.front)
   }
  }

  return (
    <Card>
      <div onClick={changeImage}>
        <div className="image">
          <img alt="oh no!" src={image}/>
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
