const Card = () => {
  return (
    <div className="card flex flex-col m-3">
      <figure className="bg-gray-100 rounded-xl">
        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"
          alt=""
        />
      </figure>
      <p>#0001</p>
      <h1>Bulbasaur</h1>
      <div>
        <p>Grass</p>
        <p>Poison</p>
      </div>
    </div>
  );
};

export default Card;
