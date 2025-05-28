// // // import logo from './logo.svg';
// // import './App.css';
// // import Ola from './components/Ativ1';
// // import Soma from './components/Ativ2';

// // function App() {
// //   return (
// //     <div className="App">
// //       <Ola />
// //       <Soma num1={5} num2={10} />
      
// //     </div>
// //   );
// // }

// // export default App;

// import React from 'react';
// import './App.css';
// import CardProduto from './components/CardProduto';

// const produtos = [
//   {
//     nome: "Smartphone",
//     preco: 2499.99,
//     descricao: "O mais recente smartphone com câmera tripla e tela AMOLED.",
//     imagem: "https://t34114.vtexassets.com/arquivos/ids/220785-800-auto?v=638404097665600000&width=800&height=auto&aspect=true"
//   },
//   {
//     nome: "Notebook",
//     preco: 4599.90,
//     descricao: "Notebook de alta performance com SSD de 512GB e 16GB RAM.",
//     imagem: "data:image/jpeg;base64,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"
//   },
//   {
//     nome: "Fone Bluetooth",
//     preco: 349.50,
//     descricao: "Fone sem fio com cancelamento de ruído e 20h de bateria.",
//     imagem: "https://lojasbecker.vtexassets.com/arquivos/ids/3639809-800-auto?v=638715916499330000&width=800&height=auto&aspect=true"
//   },
//   {
//     nome: "Smart TV 4K",
//     preco: 3299.00,
//     descricao: "TV 55 polegadas com resolução 4K e sistema operacional integrado.",
//     imagem: "data:image/jpeg;base64,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"
//   }
// ];

// function App() {
//   return (
//     <div className="App">
//       <h1>Catálogo de Produtos</h1>k
//       <div className="catalogo">
//         {produtos.map((produto, index) => (
//           <CardProduto
//             key={index}
//             nome={produto.nome}
//             preco={produto.preco}
//             descricao={produto.descricao}
//             imagem={produto.imagem}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;



// import React from 'react';
// import BotaoEstilizado from './components/BotaoEstilizado';

// function App() {
//   return (
//     <div>
//       <h1>Meu App</h1>
//       <BotaoEstilizado />
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import PerfilUsuario from './components/PerfilUsuario.jsx';

// function App() {
//   return (
//     <div>
//       <PerfilUsuario
//         imagem="https://media.discordapp.net/attachments/1222734760288190477/1258485304537518150/IMG-20230410-WA0000.jpg?ex=68360046&is=6834aec6&hm=d7b9b0fddb28d2488af998c7ead4755ce15b91a150377e564004367aefa2bbd4&=&format=webp"
//         nome="Gabriel Gravena"
//         bio="Desenvolvedor."
//       />
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';

// function Contador() {
//   // Inicializa o estado com valor 0
//   const [contador, setContador] = useState(0);

//   // Função para incrementar o contador
//   const incrementar = () => {
//     setContador(contador + 1);
//   };

//   // Função para zerar o contador
//   const zerar = () => {
//     setContador(0);
//   };

//   return (
//     <div style={{
//       textAlign: 'center',
//       margin: '20px',
//       padding: '20px',
//       border: '1px solid #ddd',
//       borderRadius: '8px',
//       maxWidth: '300px'
//     }}>
//       <h2>Contador: {contador}</h2>
//       <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
//         <button
//           onClick={incrementar}
//           style={{
//             padding: '8px 16px',
//             backgroundColor: '#4CAF50',
//             color: 'white',
//             border: 'none',
//             borderRadius: '4px',
//             cursor: 'pointer'
//           }}
//         >
//           Incrementar
//         </button>
//         <button
//           onClick={zerar}
//           style={{
//             padding: '8px 16px',
//             backgroundColor: '#f44336',
//             color: 'white',
//             border: 'none',
//             borderRadius: '4px',
//             cursor: 'pointer'
//           }}
//         >
//           Zerar
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Contador;


import React, { useState, useEffect, useRef } from 'react';

function BlocoNotas() {
  // Estado para armazenar a lista de notas
  const [notas, setNotas] = useState([]);
  // Estado para controlar o input atual
  const [novaNota, setNovaNota] = useState('');
  // Ref para focar no input
  const inputRef = useRef(null);

  // Carrega notas do localStorage quando o componente monta
  useEffect(() => {
    const notasSalvas = localStorage.getItem('notas');
    if (notasSalvas) {
      setNotas(JSON.parse(notasSalvas));
    }
    // Foca no input após carregar
    inputRef.current.focus();
  }, []);

  // Salva notas no localStorage sempre que elas mudam
  useEffect(() => {
    localStorage.setItem('notas', JSON.stringify(notas));
  }, [notas]);

  // Adiciona uma nova nota
  const adicionarNota = () => {
    if (novaNota.trim()) {
      setNotas([...notas, { id: Date.now(), texto: novaNota }]);
      setNovaNota('');
      inputRef.current.focus();
    }
  };

  // Remove uma nota pelo ID
  const removerNota = (id) => {
    setNotas(notas.filter(nota => nota.id !== id));
  };

  // Adiciona nota ao pressionar Enter
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      adicionarNota();
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.titulo}>Bloco de Notas</h2>
      
      <div style={styles.inputContainer}>
        <input
          ref={inputRef}
          type="text"
          value={novaNota}
          onChange={(e) => setNovaNota(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Digite uma nova nota..."
          style={styles.input}
        />
        <button onClick={adicionarNota} style={styles.botaoAdicionar}>
          Adicionar
        </button>
      </div>

      <ul style={styles.listaNotas}>
        {notas.map(nota => (
          <li key={nota.id} style={styles.itemNota}>
            <span>{nota.texto}</span>
            <button 
              onClick={() => removerNota(nota.id)} 
              style={styles.botaoRemover}
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Estilos do componente
const styles = {
  container: {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  titulo: {
    color: '#333',
    textAlign: 'center',
  },
  inputContainer: {
    display: 'flex',
    marginBottom: '20px',
    gap: '10px',
  },
  input: {
    flex: 1,
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
  botaoAdicionar: {
    padding: '10px 15px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  listaNotas: {
    listStyle: 'none',
    padding: 0,
  },
  itemNota: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    marginBottom: '8px',
    backgroundColor: 'white',
    borderRadius: '4px',
    boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
  },
  botaoRemover: {
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '25px',
    height: '25px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default BlocoNotas;