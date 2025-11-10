import { useState,useEffect } from 'react'

import './App.css'

function App() {
  const [imagem, setImagem] = useState(null);
  const [erro, setErro] = useState(null);
  const [carregando, setCarregando] = useState(true);

  async function buscarImagem() {
    try {
      setCarregando(true);
      setErro(null);

      const resposta = await fetch("https://api.thecatapi.com/v1/images/search");
      const dados = await resposta.json();

      setImagem(dados[0]);
    } catch (error) {
      setErro(" Não foi possível carregar a imagem. Tente novamente.");
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {                                                                                   
    buscarImagem();
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1> Gatinhos Fofos </h1>

      {carregando && <p>Carregando...</p>}
      
      {erro && <p style={{ color: "red" }}>{erro}</p>}

      {imagem && (
        <img
          src={imagem.url}
          alt="Gato"
         
        />
      )}

      <br />

      <button onClick={buscarImagem} style={{ padding: "10px 20px", cursor: "pointer" }}>
        Próxima imagem 
      </button>
    </div>
  );
}

export default App;