import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import StarWarsCard from './components/StarWarsCard';
import axios from 'axios';

const App = () => {
  const [speciesData, setSpeciesData] = useState([]);

  useEffect(() => {
    axios
      .get('https://swapi.co/api/species/')
      .then(response =>
        response.data.results.map(species => ({
          name: species.name,
          height: species.average_height,
          eyeColor: species.eye_colors,
          hairColor: species.hair_colors,
          skinColor: species.skin_colors,
          classification: species.classification,
          designation: species.designation,
          lifeSpan: species.average_lifespan,
          language: species.language,
          homeWorld: species.homeworld,
        }))
      )
      .then(data => {
        setSpeciesData(data);
      });

  }, []);


  console.log("speciesData", speciesData)

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {speciesData.map(item => (
        <StarWarsCard
        key={item.name}
          name={item.name}
          height={item.height}
          eyeColor={item.eyeColor}
          hairColor={item.hairColor}
          skinColor={item.skinColor}
          classification={item.classification}
          designation={item.designation}
          lifeSpan={item.lifeSpan}
          language={item.language}
          homeWorld={item.homeWorld}
        />
      ))};
    </div>
  );
}

export default App;