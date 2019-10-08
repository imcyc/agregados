import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import Introduccion from './components/Introduccion';
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <header className="App-header">
          <img src="http://www.imcyc.com/wp-content/uploads/2017/07/logo_200.png" alt="" title="" />
          <Route exact path="/" component={Home} />
          <Route exact path="/introduccion" component={Introduccion} />
        </header>
      </div>
    </Router>
  );
}

export default App;
