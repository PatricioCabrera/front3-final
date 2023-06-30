import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id, onRemoveFromFavorites }) => {
  const [buttonText, setButtonText] = useState("Add fav");

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
    <div className="card">
      <img src={"https://th.bing.com/th/id/OIP.tBFeNt8QSGZbIIzrIw3IewHaHa?pid=ImgDet&rs=1"} alt="" width={100} height={100} />
      <h3>{name}</h3>
      <p>{username}</p>
      <p>{id}</p>
      <button onClick={handleAddToFavorites} className="favButton">
        {buttonText}
      </button>
      <Link to={`/dentist/${id}`}>View More</Link>
    </div>
  );
};

export default Card;
