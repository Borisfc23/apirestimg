import logoblack from "../assets/img/logo-black.svg";
import logowhite from "../assets/img/logo-white.svg";
import React, { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";
const NavBar = () => {
  const { darkMode, toggleModoOscuro } = useContext(DarkModeContext);

  return (
    <nav className={`navbar ${darkMode ? "modo-oscuro-nav" : ""}`}>
      <div className="contenedor-nav">
        <div className="logo">
          <img src={darkMode ? logowhite : logoblack} alt="Logo" />
        </div>
        <div className="modo-oscuro icono">
          <input
            type="checkbox"
            id="modoOscuroToggle"
            checked={darkMode}
            onChange={toggleModoOscuro}
          />
          <label htmlFor="modoOscuroToggle">
            <i className={`${darkMode ? "fas fa-sun" : "fas fa-moon"}`}></i>
          </label>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
