import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ContextController from "./ContextController";
import "./App.css";
import Index from "./components/index/index.component";
import Lyrics from "./components/lyrics/lyrics.component";
import Navbar from "./components/navbar/navbar.component";

function App() {
  return (
    <div className="App">
      <ContextController>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/lyrics/track/:id" component={Lyrics} />
            </Switch>
          </div>
        </BrowserRouter>
      </ContextController>
    </div>
  );
}

export default App;
