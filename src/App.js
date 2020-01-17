import React from "react";
import { Nav } from "react-bootstrap";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import countries from "./data/countries";

import "bootstrap/dist/css/bootstrap.min.css";
import CountryDetail from "./components/CountryDetail";

function App() {
  const countriesMenu = countries.map(country => (
    <CountryDetail key={country.ccn3} {...country} />
  ));

  console.log(countries);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Nav defaultActiveKey="/home" className="flex-column">
            {countriesMenu}
          </Nav>
          <Route></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
