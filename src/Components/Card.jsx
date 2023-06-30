import React, { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import { ContextGlobal } from "./utils/global.context"

const Card = ({ name, username, id, onRemoveFromFavorites }) => {
  const [buttonText, setButtonText] = useState("Add fav")
  const { theme } = useContext(ContextGlobal); // Accede al estado del tema desde el contexto

  useEffect(() => {
    const existingFavorites = localStorage.getItem("favorites");
    const favorites = existingFavorites ? JSON.parse(existingFavorites) : [];

    const isFavorite = favorites.some((item) => item.id === id);

    if (isFavorite) {
      setButtonText("Remove fav");
    }
  }, [id]);

  const handleAddToFavorites = () => {
    if (name) {
      const existingFavorites = localStorage.getItem("favorites");
      const favorites = existingFavorites ? JSON.parse(existingFavorites) : [];

      const isFavorite = favorites.some((item) => item.id === id);

      if (isFavorite) {
        const updatedFavorites = favorites.filter((item) => item.id !== id);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        onRemoveFromFavorites && onRemoveFromFavorites(id); // Llamar a la función de eliminación de favoritos en el componente Favs
        setButtonText("Add fav");
      } else {
        favorites.push({ name, username, id });
        localStorage.setItem("favorites", JSON.stringify(favorites));
        setButtonText("Remove fav");
      }
    }
  };

  return (
    <div className={`card ${theme === "dark" ? "dark" : "light"}`}>
      <img src="https://th.bing.com/th/id/OIP.tBFeNt8QSGZbIIzrIw3IewHaHa?pid=ImgDet&rs=1" alt="" className="card__image" />
      <h3 className="card__title">{name}</h3>
      <p className="card__username">{username}</p>
      <p className="card__id">{id}</p>
      <button onClick={handleAddToFavorites} className="card__button">
        {buttonText}
      </button>
      <Link to={`/dentist/${id}`} className="card__link">View More</Link>
    </div>
  );
};

export default Card;
