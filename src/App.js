import React from "react";
import { Nav } from "react-bootstrap";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import CountryMenuItem from "./components/CountryMenuItem";
import CountryDetail from "./components/CountryDetail";

import "./App.css";

import countries from "./data/countries";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const countriesMenu = countries.map(country => (
    <CountryMenuItem key={country.ccn3} {...country} />
  ));

  return (
    <div className="App">
      <Router>
        <Switch>
          <div className="app-container">
            <Nav className="countries-menu">{countriesMenu}</Nav>
            <Route path="/:country" component={CountryDetail} />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
