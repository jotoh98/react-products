import React from "react";
import "./App.sass";
import { Container } from "react-bootstrap";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { HeaderNav } from "./components/HeaderNav";

function App() {
  return (
    <BrowserRouter>
      <header>
        <HeaderNav />
      </header>
      <Container>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
      <Switch>
        <Route path="/login">Login Page</Route>
        <Route path="/">Home Page</Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
