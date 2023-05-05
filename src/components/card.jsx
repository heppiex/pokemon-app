const Card = ({ data: { id, name, types }, image }) => {
  console.log(image);
  return (
    <div className="card flex flex-col m-3">
      <figure className="bg-gray-100 rounded-xl">
        <img src={image} alt="" className="w-64 h-60" />
      </figure>
      <p>#{id}</p>
      <h1>{name.toUpperCase()}</h1>
      <div>
        <p>Grass</p>
        <p>Poison</p>
      </div>
    </div>
  );
};

export default Card;
