import styles from './style.module.css'

export function HeaderLadoDireito(){
    return(
        <div className={styles.header_lado_direito}>
            <div className={styles.bloco}>
                <p>10</p>
                <span>Abertas</span>
            </div>
            <div className={styles.bloco}>
                <p>12</p>
                <span>feitas</span>
            </div>
        </div>
    )
}