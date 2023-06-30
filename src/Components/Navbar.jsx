import React, { useContext, useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { ContextGlobal } from '../Components/utils/global.context'

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);
  const { theme } = state;
  const [currentTheme, setCurrentTheme] = useState(theme);

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  const handleThemeChange = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    dispatch({ type: "SET_THEME", payload: newTheme });
  }

  return (
    <nav className={`Navbar ${currentTheme}`}>
      <ul className={`Navbar__list ${currentTheme}`}>
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
          <Link className="Navbar__link" to="/favs">
            Favs
          </Link>
        </li>
      </ul>
      <button className="themeButton" onClick={handleThemeChange}>
        Change theme
      </button>
    </nav>
  )
}

export default Navbar
