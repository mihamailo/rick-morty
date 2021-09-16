import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import './styles/global.css';
import MainLayout from './layouts/MainLayout';

function App() {

  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={About} />
        </Switch>
      </MainLayout>
    </Router>
  );
}

export default App;
