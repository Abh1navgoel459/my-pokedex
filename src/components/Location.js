import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Location = () => {
  const { id } = useParams(); // Extracts the location ID from URL params
  const [locationData, setLocationData] = useState(null);

  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/location/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch location data');
        }
        const data = await response.json();
        setLocationData(data);
      } catch (error) {
        console.error('Error fetching location data:', error);
      }
    };

    fetchLocationData();
  }, [id]);

  if (!locationData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{locationData.name}</h2>
      <p>Description: {locationData.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default Location;
