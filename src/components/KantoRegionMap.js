// src/components/KantoRegionMap.js

import React from 'react';
import InteractiveMap from './InteractiveMap'; // Import the InteractiveMap component
import { Link } from 'react-router-dom';

const KantoRegionMap = () => {
  return (
    <div style={styles.container}>
      <Link to="/" style={styles.homeButton}>
        Return to Home
      </Link>
      <InteractiveMap />
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
  },
  homeButton: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    padding: '10px 20px',
    cursor: 'pointer',
    backgroundColor: '#f44336',
    color: 'white',
    borderRadius: '8px',
    textDecoration: 'none',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
};

export default KantoRegionMap;
