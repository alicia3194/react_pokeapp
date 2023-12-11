import React, { useState } from "react";
import { Container, CssBaseline, Paper, Typography } from '@mui/material';
import ListPokemon from "./ListPokemon/ListPokemon";
import Search from "./Search/Search";
import Logo from "../../image/Logo.png";

const Main = () => {
  const [pokemonList, setPokemonList] = useState([]);

  const handleSearch = (pokemonData) => {
    setPokemonList([...pokemonList, pokemonData]);
  };

  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
      <img src={Logo} alt="Pokemon Cover" style={{ width: '320px', height: '200px' }} />
    <Typography variant="h4" component="div" gutterBottom>
      Gotta catch'em all!!
    </Typography>
     </div>
      <Search onSearch={handleSearch} />
      <ListPokemon pokemonList={pokemonList} />
    </Container>
  );
};

export default Main;



