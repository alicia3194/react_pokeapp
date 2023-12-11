import React, { useState } from "react";
import { TextField, Button, Container} from "@mui/material";

const Search = ({ onSearch }) => {
  const [error, setError] = useState("");
  const [searchedPokemon, setSearchedPokemon] = useState([]);
  const [textInput, setTextInput] = useState("");

  const searchPokemon = async () => {
    try {
      if (!textInput || textInput.length <= 3) {
        setError("Invalid Pokémon name");
        return;
      }

      const lowercaseName = textInput.toLowerCase();

      if (searchedPokemon.includes(lowercaseName)) {
        setError("That Pokemon has already been searched!");
        return;
      }

      const responseApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${lowercaseName}`);
      const data = await responseApi.json();

      onSearch(data);
      setError("");
      setSearchedPokemon([...searchedPokemon, lowercaseName]);

    } catch (error) {
      setError("Pokémon not found");
    }
  };

  const handleButtonClick = () => {
    searchPokemon();
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ textAlign: 'center', mt: 4 }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search for your Pokémon"
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
        helperText={error}
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        color="error"
        onClick={handleButtonClick}
        sx={{ borderRadius: '50%',border: '1.2px solid black', width: '52px', height: '70px', fontSize: '16px', fontWeight: 'bold', color: 'white',background:"red" }}
      > Send
      </Button>
    </Container>
  );
};

export default Search;