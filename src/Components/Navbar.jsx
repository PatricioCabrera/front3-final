import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { state, dispatch } = useContext(ContextGlobal);
  const { theme } = state;

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    dispatch({ type: "SET_THEME", payload: newTheme });
  }

  return (
    <nav className={`Navbar ${theme}`}>
      {<ul className="Navbar__list">
        <li className="Navbar__item">
          <Link className="Navbar__link" to="/home">
            Home
          </Link>
        </li>
        <li className="Navbar__item">
          <Link className="Navbar__link" to="/contact">
            Contact
          </Link>
        </li>
        <li className="Navbar__item">
          <Link className="Navbar__link" to="/detail">
            Detail
          </Link>
        </li>
        <li className="Navbar__item">
          <Link className="Navbar__link" to="/favs">
            Favs
          </Link>
        </li>
      </ul>}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button className= "themeButton" onClick={handleThemeChange}>Change theme</button>
    </nav>
  )
}

export default Navbar