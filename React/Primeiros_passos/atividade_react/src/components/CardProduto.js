import React from 'react';
import '../CardProduto.css';

const CardProduto = ({ nome, preco, descricao, imagem }) => {
  return (
    <div className="card-produto">
      <img src={imagem} alt={nome} className="produto-imagem" />
      <div className="produto-info">
        <h3>{nome}</h3>
        <p className="produto-preco">
          {preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </p>
        <p className="produto-descricao">{descricao}</p>
      </div>
    </div>
  );
};

export default CardProduto;