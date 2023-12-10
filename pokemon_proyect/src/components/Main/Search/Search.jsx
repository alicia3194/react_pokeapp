import React, { useState } from "react";
import { TextField, Button, Container} from "@mui/material";

const Search = ({ onSearch }) => {
  const [textInput, setTextInput] = useState("");
  const [error, setError] = useState("");

  const searchPokemon = async () => {
    try {
      if (!textInput) {
        setError("Pokemon not found");
        return;
      }
  
      const responseApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${textInput.toLowerCase()}`);
      const data = await responseApi.json();
  
      onSearch(data);
      setError(""); 
    } catch (error) {
      console.log({message:error});
    }
  };

  const handleInputChange = (e) => {
    setTextInput(e.target.value);
    setError(""); 
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ textAlign: 'center', mt: 4 }}>
      <TextField
        fullWidth
        variant="outlined"
        label="Search for your Pokémon"
        placeholder="Search for your Pokémon"
        value={textInput}
        onChange={handleInputChange}
        error={Boolean(error)}
        helperText={error}
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        color="error"
        onClick={searchPokemon}
        sx={{ borderRadius: '50%', width: '50px', height: '50px', fontSize: '1.2rem', fontWeight: 'bold', color: 'white' }}
      > Send
      </Button>
    </Container>
  );
};

export default Search;

