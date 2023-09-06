
import Home from "./screens/Home/Home";
import Favoritos from "./screens/Favoritos/Favaritos";
import Personajes from "./screens/Personajes/Personajes";
import Menu from "./components/Menu/Menu";
import React from 'react';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Menu />
      <Switch>

        <Route path="/" exact={ true } component= { Home } />
        <Route path="/favoritos" component= { Favoritos } />
        <Route path="/personajes" component= { Personajes } />

      </Switch>
    </React.Fragment>
       
  );
}

export default App;
