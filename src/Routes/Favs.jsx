import React, { useState, useEffect } from "react";
import Card from "../Components/Card";

const Favs = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const existingFavorites = localStorage.getItem("favorites");
    const parsedFavorites = existingFavorites
      ? JSON.parse(existingFavorites)
      : []
    setFavorites(parsedFavorites);
  }, [])

  const handleRemoveFromFavorites = (id) => {
    const updatedFavorites = favorites.filter((item) => item.id !== id)
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
    setFavorites(updatedFavorites)
  }

  if (favorites.length === 0) {
    return <h1>You haven't added any favorites yet</h1>
  }

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favorites.map((dentist) => (
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
            onRemoveFromFavorites={handleRemoveFromFavorites}
          />
        ))}
      </div>
    </>
  );
};

export default Favs;
