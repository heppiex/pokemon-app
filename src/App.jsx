import { useState, useEffect } from 'react';

import Card from './components/card';

const App = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [nextSet, setNextSet] = useState(
    'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0'
  );

  const getPokemons = async () => {
    const response = await fetch(nextSet);
    const { results, next } = await response.json();
    setNextSet(next);

    results.forEach((pokemon) => {
      setAllPokemons((current) => [...current, pokemon.url]);
    });
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const morePokemons = () => {
    getPokemons();
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="container flex flex-wrap justify-center mt-6 mx-4">
          {allPokemons.map((pokemon) => {
            console.log(pokemon);
            return <Card />;
          })}
        </div>
      </div>
      <button onClick={morePokemons}>more</button>
    </>
  );
};

export default App;
