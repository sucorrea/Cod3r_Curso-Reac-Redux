import "./App.css";

import Mega from './components/mega/Mega'
import Contador from './components/contador/Contador'
import Input from './components/formulario/Input'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Familia from "./components/basics/Familia";
import FamiliaMembro from "./components/basics/FamiliaMembro";
import Card from "./components/layout/Card";
import Primeiro from "./components/basics/Primeiro";
import ComParametro from "./components/basics/ComParametro";
import Fragment from "./components/basics/Fragment";
import Aleatorio from "./components/basics/Aleatorio";

const App = (_) => {
  return (
    <div className="App">
      <h1>FUNDAMENTOS REACTJS</h1>
      <div className="Cards">
        
        {/* 13 */}
        <Card titulo="#12 - Mega" color="#ffa700">
          <Mega qtde={6}/>        
          </Card>

        {/* 12 */}
        <Card titulo="#12 - Contador" color="#283655">
          <Contador numeroInicial={10} passoInicial={5}/>
        </Card>
        {/* 11 */}
        <Card titulo="#11 - Componente Controlado" color="#03FF00">
          <Input />
        </Card>
        {/* 10 */}
        <Card titulo="#10 - Comunicação Indireta" color="#1EE18D">
          <IndiretaPai />
        </Card>
        {/* 09 */}
        <Card titulo="#09 - Comunicação Direta" color="#51074a">
          <DiretaPai />
        </Card>
        {/* 08 */}
        <Card titulo="#08 - Condicional" color="#970000">
          <ParOuImpar numero={5} />
          <UsuarioInfo usuario={{nome: 'Sueli'}}/>
          <UsuarioInfo usuario={{email: 'oliver.sueli@gmail.com'}}/>
          <UsuarioInfo usuario={{}}/>
          <UsuarioInfo />
        </Card>
        {/* 07 */}
        <Card titulo="#07 - Repetição- Tabela" color="#0057e7">
          <TabelaProdutos />
        </Card>
        {/* 06 */}
        <Card titulo="#06 - Repetição" color="#d62d20 ">
          <ListaAlunos></ListaAlunos>
        </Card>
        {/* 05 */}
        <Card titulo="#05 - Componente com Filhos" color="#ffa700">
          <Familia sobrenome="Correa">
            <FamiliaMembro nome="Roberta" />
            <FamiliaMembro nome="Sueli" />
            <FamiliaMembro nome="Aparecido" />
          </Familia>
        </Card>
        {/* 04 */}
        <Card titulo="#04 - Desafio Aleatório" color="green">
          <Aleatorio min={1} max={55} />
        </Card>
        {/* 03 */}
        <Card titulo="#03 - Fragment" color="red">
          <Fragment />
        </Card>
        {/* 02 */}
        <Card titulo="#02 - ComParametro" color="#4f372d">
          {" "}
          <ComParametro
            titulo="Situacao do aluno"
            aluno="Sueli Correa de Oliveira"
            nota={8.6}
          />
        </Card>
        <Card titulo="#01 - Primeiro" color="#fe4a49">
          <Primeiro />
        </Card>{" "}
      </div>
    </div>
  );
};
export default App;