import React from "react";
import styles from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { ROUTES } from "../../helpers/RoutesPath";

const Nav = (props) => {
  const { onSearch } = props;
  return (
    <div>
      <Link to={ROUTES.HOME}>Home</Link>
      <Link to={ROUTES.ABOUT}>About</Link>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Nav;
