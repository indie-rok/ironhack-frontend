import React from "react";
import { Card, Container, Row, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

import countries from "../../data/countries";

import "./CountryDetail.css";

const getCountry = cca3 => countries.find(country => country.cca3 === cca3);

export default function CountryDetail({ match }) {
  const country = getCountry(match.params.country);

  const capitals = country.capital.map((capital, index) => (
    <span key={`capital-${index}`}>{capital}</span>
  ));

  const borders = country.borders.map(countryBorderCca3 => {
    const countryBorder = getCountry(countryBorderCca3);
    return (
      <ListGroup.Item>
        <Link to={`/${countryBorderCca3}`}>{countryBorder.name.official}</Link>
      </ListGroup.Item>
    );
  });

  return (
    <Container className="country-detail">
      <Card>
        <Card.Header>
          <h2>{country.name.official}</h2>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col>Capital</Col>
            <Col>{capitals}</Col>
          </Row>

          <hr />
        </Card.Body>

        <Card.Body>
          <Row>
            <Col>Area</Col>
            <Col>{country.area} km</Col>
          </Row>
          <hr />
        </Card.Body>

        <Card.Body>
          <Row>
            <Col>Borders</Col>
            <Col>
              <ListGroup>{borders}</ListGroup>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}
