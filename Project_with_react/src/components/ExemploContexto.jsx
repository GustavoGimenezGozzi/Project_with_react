import { useContext } from "react";
import { PacienteContext } from "../context/PacienteContext";

export default function ExemploContexto() {
  const { paciente, setPaciente } = useContext(PacienteContext);
  
  const atualizarPaciente = () => {
    setPaciente({ nome: "Maria", idade: 35 });
  };
  
  return (
    <section>
      <h3>Exemplo de Uso do Contexto</h3>
      <p>Paciente atual: {paciente.nome}, {paciente.idade} anos</p>
      <button onClick={atualizarPaciente}>
        Atualizar Paciente
      </button>
    </section>
  );
}
