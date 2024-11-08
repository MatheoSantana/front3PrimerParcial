import "./Card.css";
const Card = ({ serie, personaje, episodio }) => {
  return (
    <div class="card">
      <h3>Datos obtenidos</h3>
      <p>La mejor serie: {serie}</p>
      <p>El mejor personaje: {personaje}</p>
      {episodio.trim().length != 0 && <p>El mejor episodio: {episodio}</p>}
    </div>
  );
};

export default Card;
