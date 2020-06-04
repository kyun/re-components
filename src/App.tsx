import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ButtonPage from './pages/ButtonPage';
import IndexPage from './pages/IndexPage';
import InputPage from './pages/InputPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/button" exact component={ButtonPage} />
        <Route path="/input" exact component={InputPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
