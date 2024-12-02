import React from 'react';
import { animals } from './animals';

const title = '';
const showBackground = false;
const images = Object.keys(animals).map((animal) => (
  <img
    key={animal}
    className="animal"
    alt={animal}
    src={animals[animal].image}
    onClick={(e) => displayFact(e, animal)}
  />
));

function displayFact(e, animalName) {
  const randomIndex = Math.floor(Math.random() * animals[animalName].facts.length);
  const fact = animals[animalName].facts[randomIndex];
  document.getElementById('fact').innerHTML = fact;
}

const App = () => (
  <div>
    <h1>{title || 'Click an animal for a fun fact!'}</h1>
    <div className="animals">{images}</div>
    <p id="fact"></p>
  </div>
);

export default App;
