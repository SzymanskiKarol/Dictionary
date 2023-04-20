import React from "react";
import MoonIcon from "../assets/icon-moon.svg";

export const DarkMode = ({ theme, setTheme }) => {
  const themeChange = (e) => {
    e.target.checked ? setTheme(true) : setTheme(false);
  };

  return (
    <div className="dark-mode">
      <div className="toggle-switch">
        <label>
          <input defaultChecked={theme} type="checkbox" onClick={themeChange} />
          <span className="slider"></span>
        </label>
      </div>
      <img src={MoonIcon} alt="" />
    </div>
  );
};
