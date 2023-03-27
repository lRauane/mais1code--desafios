import "./styles.css";

const Cards = ({name, time}) => {
  return (
    <div className="card">
      <strong>{name}</strong>
      <small>{time}</small>
    </div>
  );
}

export default Cards;
