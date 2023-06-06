import { useState, useEffect } from 'react';
import Card from '../../components/card/card';

const Home = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokemonSet, setPokemonSet] = useState(
    'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0'
  );

  const getPokemons = async () => {
    const response = await fetch(pokemonSet);
    const { next, results } = await response.json();
    setPokemonSet(next);

    results.forEach(async (result) => {
      const response = await fetch(result.url);
      const data = await response.json();
      setAllPokemons((current) => {
        return [...current, data];
      });
    });
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center">
        <div className="container flex flex-wrap justify-center mt-6 mx-4">
          {allPokemons.map((pokemon, index) => {
            return (
              <Card
                key={index}
                data={pokemon}
                image={pokemon.sprites.other.dream_world.front_default}
              />
            );
          })}
        </div>
      </div>
      <button onClick={getPokemons} className="">
        More
      </button>
    </div>
  );
};

export default Home;
