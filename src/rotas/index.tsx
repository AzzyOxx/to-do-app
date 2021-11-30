import { NovaTarefa } from '../paginas/NovaTarefa';
import { Tarefas } from '../paginas/Tarefas';
import {Routes, Route} from 'react-router-dom'

export function Rotas(){
    return(
        <Routes>
            <Route path="/" element={<Tarefas/>}/>
            <Route path="/nova-tarefa" element={<NovaTarefa/>}/>
        </Routes>
    )
}