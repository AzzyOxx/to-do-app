import styles from "./style.module.css"

export function BotaoFlutuante(){
    return(
        <div className={styles.botao}>
            <a href="/nova-tarefa">+</a>
        </div>
    )
}