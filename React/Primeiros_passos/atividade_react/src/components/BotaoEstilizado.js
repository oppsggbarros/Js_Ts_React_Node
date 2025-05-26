import React from 'react';
import '../BotaoEstilizado.css'; // Importando o CSS externo

function BotaoEstilizado() {
  return (
    <button 
      className="botao-legal" 
      onClick={() => alert("Botão clicado!")}
    >
      Clique aqui
    </button>
  );
}

export default BotaoEstilizado;