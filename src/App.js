import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import ViewPokemonPage from './components/ViewPokemonPage';
import PokemonDetailPage from './components/PokemonDetailPage';
import Items from './components/Items'; // Import Items component
import KantoRegionMap from './components/KantoRegionMap'; // Import KantoRegionMap component
import ComparePokemon from './components/ComparePokemon';
import Location from './components/Location';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/view" element={<ViewPokemonPage />} />
          <Route path="/pokemon/:id" element={<PokemonDetailPage />} />
          <Route path="/items/:id" element={<Items />} /> {/* New route for Items */}
          <Route path ="/compare" element={<ComparePokemon />} />
          <Route path ="/location/:id" element={<Location />} />
          <Route path="/kanto-region-map" element={<KantoRegionMap />} /> {/* New route for Kanto Region Map */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
