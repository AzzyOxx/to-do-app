import { BotaoFlutuanteHome } from '../../componets/BotaoFlutuanteHome'
import styles from './style.module.css'

export function NovaTarefa(){
    return (
        <div className={styles.conteiner}>
            <h2>Nova tarefa</h2>
            <form action="/" method="">{/*<form action="#" method="post">*/}
                <input type="Text" placeholder="Descrição"></input>
                <input type="submit" value="cadastrar"></input>
            </form>
            <BotaoFlutuanteHome />
        </div>
    )
}
