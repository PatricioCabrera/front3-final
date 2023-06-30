import React, { useContext } from "react";
import Card from "./Card";
import { ContextGlobal } from "./utils/global.context";

const Dentist = () => {
  const { state } = useContext(ContextGlobal);
  const { theme, data, loading, error } = state;

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className={`dentists ${theme === "dark" ? "dark" : "light"}`}>
      {data.length > 0 ? (
        <div className="cards">
          {data.map((item) => (
            <Card
              key={item.id}
              name={item.name}
              username={item.username}
              id={item.id}
            />
          ))}
        </div>
      ) : (
        <p>No dentists found.</p>
      )}
    </div>
  );
};

export default Dentist;
