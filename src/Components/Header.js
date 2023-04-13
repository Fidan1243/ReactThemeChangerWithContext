import React, {useContext,useEffect} from 'react'
import '../Styles/Header.css';
import { UserContext } from './Context';
import ThemeButton from './ThemeButton';
export default function Header() {
    const [theme,setTheme] = useContext(UserContext);
    useEffect(() => {
        document.body.className = theme;
      }, [theme]);
  return (
    
    <header class={`links-${theme}`}>
      <div >
        <a  class={`a-main-${theme} `} href="index.html">Web Design</a>
        <a href="index.html" class={`a-2 a-link-${theme}`}>Main Page</a>
        <a href="#" class={`a-link-${theme}`}>About Us</a>
        <a href="login.html" class={`a-link-${theme}`}>Sign Up</a>
        <ThemeButton></ThemeButton>
      </div>
    </header>
  )
}
