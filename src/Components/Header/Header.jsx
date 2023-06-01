import React from "react";
import logo from "../Header/logo.png";
import { Link } from "react-router-dom";
import { ImSearch } from "react-icons/im";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/top_rated">Top Rated</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/popular">Popular</Link>
        <Link to="/upcoming_Movies">Upcoming Movies</Link>
      </div>
      <ImSearch />
    </nav>
  );
};

export default Header;
