import React from 'react';
import './App.css';
import { Rotas } from './rotas';


function App() {
  return (
    <div className="container">
      <header>
        <div className='menu'>
          <p><strong>App Tarefas</strong></p>        
          <nav>
            <button><a href="/">Tarefas</a></button>
            <button><a href="/nova-tarefa">Nova Tarefa</a></button>
          </nav>
        </div>
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
