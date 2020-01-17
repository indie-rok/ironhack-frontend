import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CountryDetail({ name, flag, cca3 }) {
  return (
    <Link to={cca3}>
      <span>{flag}</span> <span>{name.official}</span>
    </Link>
  );
}
