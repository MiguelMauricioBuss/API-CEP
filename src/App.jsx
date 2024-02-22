import { useState } from 'react'
import './App.css'

function App() {

  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null)
  const handleBuscaCep = async (event) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      if (!response.ok) {
        throw new Error("Cep não localizado.");
      }
      setEndereco(await response.json());
    } catch (error) {
      console.error(error);
    }

  }
  return (
    <>
      <div className='container'><br />
        <h1>busca de endereço</h1>
        <input
          type="number"
          placeholder='Digite seu CEP'
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        /><br /><br />
        <button onClick={handleBuscaCep}>
          Buscar
        </button>
        <div className='endereco'>
          {endereco ? (<>
            <p>Cep: {endereco.cep} <br />  Rua: {endereco.logradouro} <br /> Complemento: {endereco.complemento}<br /> Bairro: {endereco.bairro}<br /> Localidade: {endereco.localidade}<br /> uf: {endereco.uf}<br /> Ibge: {endereco.ibge}<br /> Gia: {endereco.gia}<br /> Ddd: {endereco.ddd}<br /> Siafi: {endereco.siafi}</p>
           
          </>) : null}
        </div>
      </div>
    </>
  )
}

export default App
