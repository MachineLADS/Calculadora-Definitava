import React, { useState } from 'react';

function App() {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [resultado, setResultado] = useState(null);

  const calcularImc = () => {
    if (altura > 0 && peso > 0) { // Ensure valid inputs
      const imc = peso / (altura * altura);
      setResultado(imc);
      alert(`O seu IMC é: ${imc.toFixed(2)}`);
    } else {
      alert("Por favor, insira valores válidos para altura e peso.");
    }
  };

  return (
    <>
      <div>
        <input
          type="number"
          value={altura}
          onChange={(e) => setAltura(+e.target.value)}
          placeholder="Altura (em metros)"
        />
      </div>
      <div>
        <input
          type="number"
          value={peso}
          onChange={(e) => setPeso(+e.target.value)}
          placeholder="Peso (em kg)"
        />
      </div>
      
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calcularImc();
        }}
      >
        <button type="submit">Calcular</button>
      </form>

      {resultado && (
        <div>
          <h2>Resultado IMC: {resultado.toFixed(2)}</h2>
        </div>
      )}
    </>
  );
}

export default App;