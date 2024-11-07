import { useState } from "react";
import Card from "./Card";
import "./Form.css";
const Form = () => {
  const [serie, setSerie] = useState("");
  const [personajeFav, setPersonajeFav] = useState("");
  const [episodioFav, setEpisodioFav] = useState("");
  const [mostrarCard, setMostrarCard] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const serieOk = serie.trimStart() == serie && serie.trim().length >= 3;
    const personajeFavOk = personajeFav.trim().length >= 6;

    if (serieOk && personajeFavOk) {
      setError("");
      setMostrarCard(true);
    } else {
      setError("Por favor chequea que la información sea correcta");
      setMostrarCard(false);
    }
  };

  return (
    <div>
      <h2>LLene los siguientes datos</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Serie favorita </label>
          <input
            type="text"
            onChange={(e) => {
              setSerie(e.target.value);
              setMostrarCard(false);
              setError("");
            }}
          />
        </div>

        <div>
          <label>Personaje favorito </label>
          <input
            type="text"
            onChange={(e) => {
              setPersonajeFav(e.target.value);
              setMostrarCard(false);
              setError("");
            }}
          />
        </div>

        <div>
          <label>Episodio favorito </label>
          <input
            type="text"
            onChange={(e) => {
              setEpisodioFav(e.target.value);
              setMostrarCard(false);
              setError("");
            }}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>

      {error && <p class="error">{error}</p>}

      {mostrarCard && (
        <Card serie={serie} personaje={personajeFav} episodio={episodioFav} />
      )}
    </div>
  );
};
export default Form;
