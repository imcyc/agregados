import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import Introduccion from './components/Introduccion';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/introduccion" component={Introduccion} />
      </div>
    </Router>
  );
}

export default App;
