const Card = ({ serie, personaje, episodio }) => {
  return (
    <div>
      <p>La mejor serie: {serie}</p>
      <p>El mejor personaje: {personaje}</p>
      {episodio.trim().length != 0 && <p>El mejor episodio: {episodio}</p>}
    </div>
  );
};

export default Card;
