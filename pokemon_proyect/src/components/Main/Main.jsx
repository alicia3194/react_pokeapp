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
      <Paper sx={{ mt: 4, p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={Logo} alt="Pokemon Cover" style={{ width: '100%', height: 'auto' }} />
        <Typography variant="h4" component="div" gutterBottom>
        Gotta catch'em all!!
        </Typography>
      </Paper>
      <Search onSearch={handleSearch} />
      <ListPokemon pokemonList={pokemonList} />
    </Container>
  );
};

export default Main;



