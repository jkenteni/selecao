import { useState } from 'react';

function CadastroNotas({ onBack, onSubmit }) {
  const materias = ['Português', 'Matemática', 'Ciências', 'História', 'Geografia'];
  const [notas, setNotas] = useState({});

  const handleNotaChange = (materia, valor) => {
    setNotas((prev) => ({ ...prev, [materia]: valor }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(notas);
  };

  return (
    <div>
      <h2>Cadastro de Notas</h2>
      <form onSubmit={handleSubmit}>
        {materias.map((materia) => (
          <div key={materia}>
            <label>{materia}:</label>
            <input
              type="number"
              step="0.01"
              value={notas[materia] || ''}
              onChange={(e) => handleNotaChange(materia, e.target.value)}
              required
            />
          </div>
        ))}
        <br />
        <button type="button" onClick={onBack}>Voltar</button>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default CadastroNotas;
