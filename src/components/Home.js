import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <header className="App-header">
        <img src="http://www.imcyc.com/wp-content/uploads/2017/07/logo_200.png" alt="" title="" />
        <Link to="/introduccion"><h1>MANUAL DE AGREGADOS PARA CONCRETO</h1></Link>
        <p>Instituto Mexicano del Cemento y del Concreto A.C.</p>
      </header>
    </div>
  );
}
 
export default Home;