import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>Pokemon Catalogue</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/berries">Berries</Link>
    </div>
  );
};

export default Header;
