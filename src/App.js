import './App.css';
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navegador from './Navegador';
import About from './About';
import Proyectos from './Proyectos';
import Contacto from './Contacto';
//import * as data from './data.json';



function App() {
  
  return (
    <div className="App">
     <Navegador/>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="about" element={<About />} />
          <Route path="proyectos" element={<Proyectos />} />
          <Route path="contacto" element={<Contacto />} />
        </Routes>
       
   </div>
   
  );
}

export default App;
