import { useParams } from 'react-router-dom';

const Pokemon = () => {
  const { pokemon } = useParams();
  console.log(pokemon);
};

export default Pokemon;
