import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Items() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/item/${id}`)
      .then(response => {
        setItem(response.data);
      })
      .catch(error => console.error('Error fetching item details:', error));
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>{item.name}</h2>
      <img src={item.sprites.default} alt={item.name} style={{ maxWidth: '200px' }} />
      <p>Description: {item.effect_entries[0].effect}</p>
    </div>
  );
}

export default Items;
