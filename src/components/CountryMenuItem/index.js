import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./CountryMenuItem.css";

export default function CountryDetail({ name, flag, cca3 }) {
  return (
    <NavLink
      to={cca3}
      className="country-menu--item"
      activeClassName="country-menu--item__active"
    >
      <span>{flag}</span> <span>{name.official}</span>
    </NavLink>
  );
}
