// ya no es obligatorio importar React
import React from "react";
// Components
import Menu from "./Menu";
// un componente es una funcion
const Header = () => {
  return (
    <React.Fragment>
      <h1>Logo</h1>
      <Menu />
    </React.Fragment>
  );
};

export default Header;
