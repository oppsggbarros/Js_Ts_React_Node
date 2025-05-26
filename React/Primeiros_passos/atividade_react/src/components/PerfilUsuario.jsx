import React from 'react';
import '../PerfilUsuario.css'; // Importando o CSS externo

function PerfilUsuario({ imagem, nome, bio }) {
  return (
    <div className="perfil-container">
      <img 
        src={imagem} 
        alt={`Foto de ${nome}`} 
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          border: '4px solid #3498db',
          objectFit: 'cover'
        }}
      />
      <h2 className="titulo-nome">{nome}</h2>
      <p className="bio">{bio}</p>
      <button 
        style={{
          backgroundColor: '#3498db',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
          marginTop: '15px'
        }}
        onClick={() => alert(`Você clicou no perfil de ${nome}`)}
      >
        Seguir
      </button>
    </div>
  );
}

export default PerfilUsuario;