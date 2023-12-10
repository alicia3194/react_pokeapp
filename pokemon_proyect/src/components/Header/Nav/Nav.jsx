import React from "react";
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const Nav = () => {
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'red' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Inicio
          </Typography>
          <Button color="inherit">New Pokemon</Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Nav;

