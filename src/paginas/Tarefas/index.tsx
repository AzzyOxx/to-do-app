import { listenerCount } from "process";
import { BotaoFlutuante } from "../../componets/BotaoFlutuante";
import styles from './style.module.css'

export function Tarefas(){
    return (
        <div className={styles.conteiner}>
            <h2>Minhas tarefas</h2>
            <ul>
                <li>Cortar a grama</li>
                <li>Limpar a casa</li>
            </ul>

            <BotaoFlutuante />
        </div>
    )
}