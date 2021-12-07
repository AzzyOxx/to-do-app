import React from 'react';
import './App.css';
import { HeaderLadoDireito } from './componets/HeaderLadoDireito';
import { HeaderLadoEsquerdo } from './componets/HeaderLadoEsquerdo';
import { Rotas } from './rotas';


function App() {
  return (
    <div className="container">
      <header>
        {/* <p><strong>App Tarefas</strong></p>*/}
        <HeaderLadoEsquerdo />
        <HeaderLadoDireito />
          
      </header>
      <main>        
          <Rotas/>
      </main>
      <footer>
        <p>Feito com ReactJS & JsonServer </p>
      </footer>

    </div>
  );
}

export default App;
