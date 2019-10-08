import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
        <Link to="/introduccion"><h1>AGREGADOS PARA CONCRETO</h1></Link>
        <h2>MANUAL DE IDENTIFICACIÓN, PRÁCTICAS DE MINERALES Y ROCAS<br/>PARA SU USO COMO AGREGADOS PARA CONCRETO</h2>
        <p>Instituto Mexicano del Cemento y del Concreto A.C.</p>
    </div>
  );
}
 
export default Home;