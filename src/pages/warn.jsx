import styles from '../styles/warn.module.css'
import Head from 'next/head'

export default function warn() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Criata - Aviso</title>
            </Head>
            <main className={styles.main}>
                <img className={styles.background} src="./assets/images/warn/background.svg" alt="background" />
                <img src="./assets/images/warn/ilustration.svg" alt="" />
                <div className={styles.left}>
                    left
                </div>
                <div className={styles.right}>
                    right
                </div>
            </main>
        </div>
    )
}
