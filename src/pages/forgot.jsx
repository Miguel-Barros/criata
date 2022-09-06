import styles from '../styles/Forgot.module.css'
import { withPublic } from '../hook/route';
import Head from 'next/head';
import Link from 'next/link';

function Forgot({ auth }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Esqueceu a senha - Criata</title>
            </Head>
            <main className={styles.main}>
                <div className={styles.box}>
                    <h1 className={styles.title}>Esqueci a senha</h1>
                    <p className={styles.text}>Envie seu email cadastrado para que um código te redirecione para a alteração de senha</p>
                    <input className={styles.input} type="email" placeholder='Insira seu Email' />
                    <button className={styles.btn}>Enviar</button>
                    <Link href={'/signIn'}>
                        <button className={`${styles.btn} ${styles.delined}`}>Voltar</button>
                    </Link>
                    <p className={styles.copyright}>Coaraci © 2022</p>
                </div>
                <img className={styles.ilus_bg} src="./assets/images/forgot/ilus-bg.svg" alt="" />
                <img className={styles.ilus} src="./assets/images/forgot/ilus.svg" alt="" />
            </main>
        </div>
    )
}

export default withPublic(Forgot);