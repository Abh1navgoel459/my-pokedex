import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import PokeballImage from './pokemon.png'; // Replace with the correct path to your pokemon.png

function ViewPokemonPage() {
  const [pokemonList, setPokemonList] = useState([]);
  const [itemsList, setItemsList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the list of Pokémon
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000')
      .then(response => {
        const fetches = response.data.results.map(pokemon => axios.get(pokemon.url));
        Promise.all(fetches)
          .then(responses => {
            const pokemons = responses.map(res => res.data);
            setPokemonList(pokemons);
          })
          .catch(error => console.error('Error fetching Pokémon details:', error));
      })
      .catch(error => console.error('Error fetching Pokémon list:', error));

    // Fetch the list of items
    axios.get('https://pokeapi.co/api/v2/item?limit=954')
      .then(response => {
        const fetches = response.data.results.map(item => axios.get(item.url));
        Promise.all(fetches)
          .then(responses => {
            const items = responses.map(res => res.data);
            setItemsList(items);
          })
          .catch(error => console.error('Error fetching item details:', error));
      })
      .catch(error => console.error('Error fetching item list:', error));
  }, []);

  if (!pokemonList.length || !itemsList.length) {
    return <div>Loading...</div>;
  }

  return (
    <div style={styles.container}>
      <img src={PokeballImage} alt="Pokemon" style={styles.pokeballImage} />
      <div style={styles.content}>
        <button 
          onClick={() => navigate('/')} 
          style={styles.homeButton}
        >
          Return to Home
        </button>
        <h2 style={styles.heading}>Pokemon</h2>
        <div style={styles.pokemonContainer}>
          {pokemonList.map(pokemon => (
            <Link to={`/pokemon/${pokemon.id}`} key={pokemon.id} style={styles.link}>
              <div style={styles.card}>
                <h3 style={styles.cardTitle}>{pokemon.name}</h3>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} style={styles.image} />
              </div>
            </Link>
          ))}
        </div>
        <h2 style={styles.heading}>Items</h2>
        <div style={styles.itemsContainer}>
          {itemsList.map(item => (
            <Link to={`/items/${item.id}`} key={item.id} style={styles.link}>
              <div style={styles.card}>
                <h3 style={styles.cardTitle}>{item.name.replace(/-/g, ' ')}</h3>
                <img src={item.sprites.default} alt={item.name} style={styles.image} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f0f0',
    position: 'relative',
  },
  pokeballImage: {
    width: '200px', // Adjust size as needed
    height: 'auto', // Maintain aspect ratio
    marginBottom: '20px', // Adjust spacing
  },
  content: {
    maxWidth: '80%',
    padding: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  homeButton: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    padding: '10px 20px',
    cursor: 'pointer',
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1em',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '1.5em',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  pokemonContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  itemsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  card: {
    border: '2px solid black', // Black border for each card
    borderRadius: '8px',
    padding: '10px',
    margin: '10px',
    maxWidth: '200px',
    textAlign: 'center',
    backgroundColor: '#fff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  cardTitle: {
    color: 'red', // Red text for card titles
    fontSize: '1.2em',
    margin: '10px 0',
  },
  image: {
    width: '120px',
    height: 'auto',
    borderRadius: '50%',
    marginBottom: '10px',
  },
};

export default ViewPokemonPage;
