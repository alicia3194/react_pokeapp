// Card.jsx
import React from 'react';
import './Card.css';

const Card = ({ pokemonData, onCardClick }) => {
  const { name, sprites } = pokemonData; // nombre para la imagen del pokemon en la api
  const { front_default } = sprites; //iamgen frontal predeterminada de la api

  const handleClick = () => {
    onCardClick(pokemonData.id);
  };

  return (
   <div className="card" onClick={handleClick}>
      <h2>{name}</h2>
      <img src={front_default} alt={name} />
    </div>
  );
};

export default Card;

