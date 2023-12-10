import React, { useState } from "react";
import Card from "./Card/Card";
import {Card as MuiCard, CardContent, Typography } from '@mui/material';

const ListPokemon = ({ pokemonList }) => {
  const [characteristics, setCharacteristics] = useState({});
  const [showCharacteristics, setShowCharacteristics] = useState(false);

  const handleCardClick = async (pokemonId) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/characteristic/${pokemonId}/`);
      const data = await response.json();
      setCharacteristics(data);
      setShowCharacteristics(true);
    } catch (error) {
      console.error({message:error});
    }
  };

  return (
    <div>
      {pokemonList.map((pokemon) => (
        <Card
          key={pokemon.id}
          pokemonData={pokemon}
          onCardClick={() => handleCardClick(pokemon.id)}
        />
      ))}
      {showCharacteristics && (
        <MuiCard>
          <CardContent>
            <Typography variant="h5" component="div">
            </Typography>
            <Typography variant="body2" color="text.secondary">
            </Typography>
            </CardContent>

            <CardContent>
              <h2>Characteristics:</h2>
              <Typography component="p">Gene Modulo: {characteristics?.gene_modulo}</Typography>
              <Typography component="p">Highest Stat: {characteristics?.highest_stat?.name}</Typography>
              <Typography component="p">Possible Values: {characteristics?.possible_values?.join(", ")}</Typography>
          </CardContent>
        </MuiCard>
      )}
    </div>
  );
};

export default ListPokemon;


