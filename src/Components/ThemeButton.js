import React, { useContext } from "react";
import { UserContext } from "./Context";
import '../Styles/Header.css'

export default function ThemeButton() {
  const [theme,setTheme] = useContext(UserContext);
  const ChangeTheme = () => {
    console.log(theme);
    if (theme === "light") {
        setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
        <a href="#" class={`a-link-${theme}`} onClick={ChangeTheme}>Change Theme</a>
  );
}
