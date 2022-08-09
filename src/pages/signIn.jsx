import styles from '../styles/Index.module.css'
import Head from 'next/head'

export default function signIn() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Criata - SignIn</title>
            </Head>
            <main className={styles.main}>
                <p>Pão</p>
            </main >
        </div >
    )
}
