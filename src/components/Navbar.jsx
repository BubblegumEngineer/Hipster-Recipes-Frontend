import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header>
        <h1>Hipster Recipes</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/editrecipeform">Edit Recipes</Link>
          </li>

          <li>
            <Link to="/">Favorite Recipes</Link>
          </li>

          <li>
            <Link to="/addrecipeform">Share Your Recipe</Link>
          </li>

          <li>Login</li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Navbar;
