import React from 'react';
import ReactDOM from 'react-dom';
import Card from './componentes/Card';
import './index.css';

ReactDOM.render(
  <div>
    <Card titulo="Cartao1" conteudo="Plantas"></Card>
    <Card titulo="Cartao2" conteudo="Frutas"></Card>
    <Card titulo="Cartao3" conteudo="Verduras"></Card>
  </div>
  
,
  document.getElementById('root')
);

