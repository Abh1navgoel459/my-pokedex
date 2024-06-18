// ComparePokemon.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

function ComparePokemon() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemon1, setPokemon1] = useState(null);
  const [pokemon2, setPokemon2] = useState(null);
  const [pokemon1Details, setPokemon1Details] = useState(null);
  const [pokemon2Details, setPokemon2Details] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    fetchPokemonList();
  }, []);

  const fetchPokemonList = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000');
      setPokemonList(response.data.results);
    } catch (error) {
      console.error('Error fetching Pokémon list:', error);
    }
  };

  const fetchPokemonDetails = async (pokemonName, setPokemonDetails) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      setPokemonDetails(response.data);
    } catch (error) {
      console.error(`Error fetching Pokémon details for ${pokemonName}:`, error);
    }
  };

  const handlePokemon1Change = async (event) => {
    const selectedPokemon = event.target.value;
    setPokemon1(selectedPokemon);
    fetchPokemonDetails(selectedPokemon, setPokemon1Details);
  };

  const handlePokemon2Change = async (event) => {
    const selectedPokemon = event.target.value;
    setPokemon2(selectedPokemon);
    fetchPokemonDetails(selectedPokemon, setPokemon2Details);
  };

  const renderPokemonDropdown = (valueSetter) => (
    <select onChange={valueSetter}>
      <option value="">Select Pokémon</option>
      {pokemonList.map((pokemon, index) => (
        <option key={index} value={pokemon.name}>{pokemon.name}</option>
      ))}
    </select>
  );

  const renderPokemonDetails = (pokemonDetails) => (
    pokemonDetails && (
      <div>
        <h3>{pokemonDetails.name}</h3>
        <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} style={{ maxWidth: '200px' }} />
        <p><strong>Type:</strong> {pokemonDetails.types.map(type => type.type.name).join(', ')}</p>
        <p><strong>Height:</strong> {pokemonDetails.height}</p>
        <p><strong>Weight:</strong> {pokemonDetails.weight}</p>
        <p><strong>Stats:</strong></p>
        <div>
          {pokemonDetails.stats.map((stat, index) => (
            <p key={index}>
              <strong>{stat.stat.name}:</strong> {stat.base_stat}
            </p>
          ))}
        </div>
      </div>
    )
  );

  const handleReturnHome = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', width: '100%' }}>
        <div style={{ marginRight: '50px', textAlign: 'center' }}>
          <h2>Pokémon 1</h2>
          {renderPokemonDropdown(handlePokemon1Change)}
          {renderPokemonDetails(pokemon1Details)}
        </div>
        <div style={{ textAlign: 'center' }}>
          <h2>Pokémon 2</h2>
          {renderPokemonDropdown(handlePokemon2Change)}
          {renderPokemonDetails(pokemon2Details)}
        </div>
      </div>
      <button onClick={handleReturnHome} style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}>
        Return to Home
      </button>
    </div>
  );
}

export default ComparePokemon;
