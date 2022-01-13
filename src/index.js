import React from 'react';
import ReactDOM from 'react-dom';
import Card from './componentes/Card';
import './index.css';

ReactDOM.render(
  <div>
    <Card titulo="Card1" conteudo="Frutas"></Card>
    <Card titulo="Card2" conteudo="Verduras"></Card>
    <Card titulo="Card3" conteudo="Legumes"></Card>
  </div>
  
,
  document.getElementById('root')
);

