import { useNavigate } from 'react-router-dom';

const Card = ({ data: { id, name, types }, image }) => {
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(name);

  return (
    <div
      onClick={onNavigateHandler}
      className="card flex flex-col m-3 cursor-pointer"
    >
      <figure className="bg-gray-100 rounded-xl">
        <img src={image} alt="" className="w-64 h-60" />
      </figure>
      <p>#{id}</p>
      <h1>{name.toUpperCase()}</h1>
      <div>
        {types.map((type, index) => {
          const pokemonType = type.type.name;
          return (
            <p key={index}>{`${
              pokemonType.charAt(0).toUpperCase() + pokemonType.slice(1)
            }`}</p>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
