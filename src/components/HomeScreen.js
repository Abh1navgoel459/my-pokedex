import React from 'react';
import { Link } from 'react-router-dom';
import PokeballImage from './pokeball.png'; // Replace with your Pokeball image path
import CharizardImage from './charizard.png'; // Replace with Charizard image path
import BlastoiseImage from './blastoise.png'; // Replace with Blastoise image path

function HomeScreen() {
  return (
    <div style={styles.container}>
      <div style={styles.backgroundContainer}></div>
      <div style={styles.contentContainer}>
        <h1 style={styles.header}>Welcome to the Pokédex!</h1>
        <p style={styles.description}>Explore the world of Pokémon.</p>
        <div style={styles.buttonContainer}>
          <Link to="/view" style={styles.link}>
            <button style={styles.button}>View Pokémon</button>
          </Link>
          <Link to="/compare" style={styles.link}>
            <button style={styles.button}>Compare Pokémon</button>
          </Link>
          <Link to="/kanto-region-map" style={styles.link}>
            <button style={styles.button}>Kanto Region Map</button>
          </Link>
        </div>
      </div>
      <img src={CharizardImage} alt="Charizard" style={styles.leftImage} />
      <img src={BlastoiseImage} alt="Blastoise" style={styles.rightImage} />
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '50%',
    backgroundImage: `url(${PokeballImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: -1,
  },
  contentContainer: {
    zIndex: 1,
    backgroundColor: '#f0f0f0',
    color: '#333',
    padding: '20px',
    position: 'relative', // Ensure content is above the background
  },
  header: {
    fontSize: '3em',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  description: {
    fontSize: '1.5em',
    margin: '0',
    marginBottom: '30px',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
  },
  button: {
    padding: '15px 40px',
    fontSize: '18px',
    borderRadius: '8px',
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    marginBottom: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  leftImage: {
    position: 'absolute',
    left: '20%',
    transform: 'translateX(-50%)',
    top: '40%', // Adjusted vertical position
    width: '1000px', // Enlarged the image further
    height: 'auto',
    borderRadius: '50%',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    zIndex: 1,
  },
  rightImage: {
    position: 'absolute',
    right: '20%',
    transform: 'translateX(50%)',
    top: '25%', // Adjusted vertical position
    width: '1000px', // Enlarged the image further
    height: 'auto',
    borderRadius: '50%',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    zIndex: 1,
  },
};

export default HomeScreen;
