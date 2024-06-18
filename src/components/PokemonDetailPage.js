import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function PokemonDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState(null);
  const [evolutionChain, setEvolutionChain] = useState(null);
  const [evolutionSprites, setEvolutionSprites] = useState({});
  const columnCount = 4; // Change the column count as desired

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => {
        setPokemon(response.data);
        fetchEvolutionChain(response.data.species.url);
      })
      .catch(error => console.error('Error fetching Pokémon:', error));
  }, [id]);

  const fetchEvolutionChain = async (speciesUrl) => {
    try {
      const speciesResponse = await axios.get(speciesUrl);
      const evolutionChainUrl = speciesResponse.data.evolution_chain.url;
      const evolutionChainResponse = await axios.get(evolutionChainUrl);
      const chain = evolutionChainResponse.data.chain;
      setEvolutionChain(chain);

      // Fetch sprites for the evolution chain
      const sprites = await fetchEvolutionSprites(chain);
      setEvolutionSprites(sprites);
    } catch (error) {
      console.error('Error fetching evolution chain:', error);
    }
  };

  const fetchEvolutionSprites = async (chain) => {
    const sprites = {};

    const fetchSprite = async (name) => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      return response.data.sprites.front_default;
    };

    const traverseChain = async (chainLink) => {
      const sprite = await fetchSprite(chainLink.species.name);
      sprites[chainLink.species.name] = sprite;

      for (const evo of chainLink.evolves_to) {
        await traverseChain(evo);
      }
    };

    await traverseChain(chain);
    return sprites;
  };

  if (!pokemon || !evolutionChain) {
    return <div>Loading...</div>;
  }

  // Calculate the number of moves to display in each column
  const movesPerColumn = Math.ceil(pokemon.moves.length / columnCount);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '80vh', padding: '20px', position: 'relative' }}>
      <button 
        onClick={() => navigate('/view')} 
        style={{ position: 'absolute', top: '20px', left: '20px', padding: '10px 20px', cursor: 'pointer' }}
      >
        Back to View Pokémon Page
      </button>
      <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid #ccc', borderRadius: '8px', padding: '20px', maxWidth: '800px' }}>
        <div style={{ display: 'flex', marginBottom: '20px' }}>
          <div style={{ marginRight: '20px' }}>
            {pokemon.sprites && (
              <img src={pokemon.sprites.front_default} alt={pokemon.name} style={{ width: '100%', maxWidth: '200px' }} />
            )}
          </div>
          <div>
            <h2>{pokemon.name}</h2>
            <p><strong>Height:</strong> {pokemon.height}</p>
            <p><strong>Weight:</strong> {pokemon.weight}</p>
            <p><strong>Type:</strong> {pokemon.types.map(type => type.type.name).join(', ')}</p>
            <h3>Stats</h3>
            <ul>
              {pokemon.stats.map(stat => (
                <li key={stat.stat.name}>
                  <strong>{stat.stat.name}:</strong> {stat.base_stat}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px', marginBottom: '20px' }}>
          <h3>Evolution Chain</h3>
          {renderEvolutionChain(evolutionChain, evolutionSprites, navigate)}
        </div>
      </div>
      <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px', maxWidth: '800px' }}>
        <h3>Moves</h3>
        {Array.from({ length: columnCount }).map((_, columnIndex) => (
          <div key={columnIndex} style={{ float: 'left', width: `${100 / columnCount}%`, boxSizing: 'border-box' }}>
            {pokemon.moves.slice(columnIndex * movesPerColumn, (columnIndex + 1) * movesPerColumn).map(move => (
              <p key={move.move.name}>{move.move.name.replace(/-/g, ' ')}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const renderEvolutionChain = (chain, evolutionSprites, navigate) => {
  const handleClick = (name) => {
    navigate(`/pokemon/${name}`);
  };

  const renderChain = (chainLink) => (
    <div key={chainLink.species.name} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <img 
        src={evolutionSprites[chainLink.species.name]} 
        alt={chainLink.species.name} 
        style={{ marginRight: '10px', cursor: 'pointer' }} 
        onClick={() => handleClick(chainLink.species.name)} 
      />
      <p>{chainLink.species.name}</p>
      {chainLink.evolves_to.length > 0 && (
        <div style={{ marginLeft: '20px' }}>
          {chainLink.evolves_to.map(evo => renderChain(evo))}
        </div>
      )}
    </div>
  );

  return renderChain(chain);
};

export default PokemonDetailPage;
