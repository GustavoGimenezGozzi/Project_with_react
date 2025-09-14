// ========================================
// EXEMPLOS DE TESTE - DESCOMENTE UM POR VEZ
// ========================================

// 1. COMPONENTES: Funcionais vs. Classe
/*
import { SaudacaoClasse } from "./components/SaudacaoClasse";
import SaudacaoFuncional from "./components/SaudacaoFuncional";
export default function App() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: 16 }}>
      <h1>Comparativo de Componentes</h1>
      <SaudacaoClasse />
      <SaudacaoFuncional />
    </main>
  );
}
*/

// 2. PROPS: Passagem de dados entre componentes
/*
import BoasVindas from "./components/BoasVindas";
export default function App() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: 16 }}>
      <h1>Props em Ação</h1>
      <BoasVindas nome="Marina" curso="Frontend com React" />
      <BoasVindas nome="João" curso="Mobile com React Native" />
    </main>
  );
}
*/

// 3. ESTADO: useState básico
/*
import Contador from "./components/Contador";
export default function App() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: 16 }}>
      <h1>useState Básico</h1>
      <Contador />
    </main>
  );
}
*/

// 4. ESTADO COM OBJETOS E ARRAYS (ATIVO)
import UsuarioInfo from "./components/UsuarioInfo";
import ListaNumeros from "./components/ListaNumeros";
export default function App() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: 16 }}>
      <h1>Estado com Objetos e Arrays</h1>
      <UsuarioInfo />
      <hr />
      <ListaNumeros />
    </main>
  );
}

// 5. ATUALIZAÇÕES SEGURAS DE ESTADO
/*
import ContadorSeguro from "./components/ContadorSeguro";
export default function App() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: 16 }}>
      <h1>Atualizações Seguras de Estado</h1>
      <ContadorSeguro />
    </main>
  );
}
*/

// 6. CICLO DE VIDA COM useEffect
/*
import CicloDeVida from "./components/CicloDeVida";
export default function App() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: 16 }}>
      <CicloDeVida />
    </main>
  );
}
*/

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
