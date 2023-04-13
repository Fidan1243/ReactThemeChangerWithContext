import { useContext, useEffect } from "react";
import "../Styles/App.css";
import { UserContext } from "./Context";
import Header from './Header';
import Main from "./Main";
function App() {
  const {theme} = useContext(UserContext);
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`App ${theme}`}>
      <Header></Header>
      <Main></Main>
    </div>
  );
}

export default App;
