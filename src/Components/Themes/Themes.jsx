import { FaCog } from "react-icons/fa";
import { themes } from "../../data";
import ThemeItem from "./ThemeItem";
import { BsMoon, BsSun } from "react-icons/bs";
import "./Themes.css";
import { useEffect, useState } from "react";

const Themes = () => {
  const [showSwitcher, setShowSwitcher] = useState(false);
  const [color, setColor] = useState(localStorage.getItem("color") || "Blue");

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark-theme"
  );

  const changeColor = (color) => {
    setColor(color);
  };

  useEffect(() => {
    document.documentElement.style.setProperty("--first-color", color);
    localStorage.setItem("color", color);
  }, [color]);

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div>
      <div className={`${showSwitcher ? "show-switcher" : ""} style__switcher`}>
        <div
          className="style__switcher-toggler"
          onClick={() => {
            setShowSwitcher(!showSwitcher);
          }}
        >
          <FaCog />
        </div>
        <div className="theme__toggler" onClick={toggleTheme}>
          {theme === "light-theme" ? <BsMoon /> : <BsSun />}
        </div>
        <h3 className="style__switcher-title">Style Switcher</h3>
        <div className="style__switcher-items">
          {themes.map((theme, index) => {
            return (
              <ThemeItem key={index} {...theme} changeColor={changeColor} />
            );
          })}
        </div>

        <div
          className="style__switcher-close"
          onClick={() => setShowSwitcher(!showSwitcher)}
        >
          &times;
        </div>
      </div>
    </div>
  );
};

export default Themes;
