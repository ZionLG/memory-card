const Card = (props) => {
  return (
    <div
      data-id={props.name}
      onClick={props.onClick}
      className="hover:cursor-pointer hover:shadow-2xl p-6 shadow-xl text-center flex-col flex gap-10"
    >
      <img className="w-48 h-60" src={props.img} alt={props.name} />
      <span className="font-bold text-3xl">{props.name}</span>
    </div>
  );
};

export default Card;
