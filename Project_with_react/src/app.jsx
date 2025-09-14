// ========================================
// PROJETO CARDIOLIFE - AULA 03/09/2025
// ========================================

import ExemploJSX from "./components/ExemploJSX";
import EstiloInline from "./components/EstiloInline";
import RelatorioPaciente from "./components/RelatorioPaciente";
import ListaExames from "./components/ListaExames";
import CardPaciente from "./components/CardPaciente";
import ExemploContexto from "./components/ExemploContexto";
import { PacienteProvider } from "./context/PacienteContext";

export default function App() {
  return (
    <PacienteProvider>
      <main style={{ fontFamily: "sans-serif", padding: 16 }}>
        <h1>CardioLife - Sistema de Cardiologia</h1>
        
        <ExemploJSX />
        <hr />
        
        <EstiloInline />
        <hr />
        
        <RelatorioPaciente nome="Ana" idade={45} />
        <hr />
        
        <h3>Exames Disponíveis:</h3>
        <ListaExames />
        <hr />
        
        <h3>Pacientes:</h3>
        <CardPaciente nome="Maria Silva" idade={52} status="Estável" />
        <CardPaciente nome="João Santos" idade={38} status="Monitoramento" />
        <CardPaciente nome="Ana Costa" idade={45} status="Alta" />
        <hr />
        
        <ExemploContexto />
      </main>
    </PacienteProvider>
  );
}

// 7. EVENTOS: onClick, onChange, onSubmit
/*
import BotaoEvento from "./components/BotaoEvento";
export default function App() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: 16 }}>
      <BotaoEvento />
    </main>
  );
}
*/

// 8. VIRTUAL DOM E RECONCILIAÇÃO
/*
import TextoDinamico from "./components/TextoDinamico";
export default function App() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: 16 }}>
      <TextoDinamico />
    </main>
  );
}
*/

// 9. RENDERIZAÇÃO CONDICIONAL
/*
import MensagemLogin from "./components/MensagemLogin";
export default function App() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: 16 }}>
      <MensagemLogin />
    </main>
  );
}
*/

// 10. COMPOSIÇÃO CONDICIONAL COM COMPONENTES
/*
import MensagemUsuario from "./components/MensagemUsuario";
export default function App() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: 16 }}>
      <MensagemUsuario ok={false} nome="Carlos" />
    </main>
  );
}
*/

// 11. LISTAS BÁSICAS
/*
import ListaNomes from "./components/ListaNomes";
export default function App() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: 16 }}>
      <ListaNomes />
    </main>
  );
}
*/

// 12. KEYS COM IDs ÚNICOS
/*
import ListaComIds from "./components/ListaComIds";
export default function App() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: 16 }}>
      <ListaComIds />
    </main>
  );
}
*/
