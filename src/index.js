import React from 'react';
import ReactDOM from 'react-dom';
import Card from './componentes/Card';
import './index.css';

ReactDOM.render(
  <div>
    <Card titulo="Frutas" conteudo="As frutas são alimentos ricos em nutrientes e substâncias que contribuem com a saúde."></Card>
    
    <Card titulo="Verduras" conteudo="As verduras são tipos de plantas em forma de folhas e flores que são comestíveis."></Card>

    <Card titulo="Legumes" conteudo="É o nome genérico que se dá a frutos, caules, raízes e sementes usados na alimentação."></Card>

   
  </div>
  
,
  document.getElementById('root')
);

