import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkside from "../hooks/useDarkside.hook";

const Switcher = () => {
  const [colorTheme, setTheme] = useDarkside();
  const [isDarkMode, setDarkMode] = React.useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkMode(checked);
  };
  const defaultProperties = {
    dark: {
      circle: {
        r: 5,
      },
      mask: {
        cx: "80%",
        cy: "23%",
      },
      svg: {
        transform: "rotate(40deg)",
      },
      lines: {
        opacity: 0,
      },
    },
    light: {
      circle: {
        r: 5,
      },
      mask: {
        cx: "80%",
        cy: "0%",
      },
      svg: {
        transform: "rotate(90deg)",
      },
      lines: {
        opacity: 1,
      },
    },
    springConfig: { mass: 4, tension: 250, friction: 35 },
  };
  return (
    <DarkModeSwitch
      animationProperties={defaultProperties}
      style={{ marginBottom: "2rem" }}
      checked={isDarkMode}
      onChange={toggleDarkMode}
    //   moonColor="blue"
      size={120}
    />
  );
};

export default Switcher;
