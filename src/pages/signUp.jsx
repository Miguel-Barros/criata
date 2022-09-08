import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/SignUp.module.css';
import { withPublic } from '../hook/route';

function SignUp({ auth }) {

    return (
        <div className={styles.container}>
            <Head>
                <title>Criata - Cadastrar</title>
            </Head>
            <main className={styles.main}>
                <img className={styles.ilus_bg} src="./assets/images/signUp/ilus-bg.svg" alt='ilustration-bg' />
                <img className={styles.ilus} src="./assets/images/signUp/ilus.svg" alt='ilustration' />
                <div className={styles.box}>
                    <h1 className={styles.title}>Cadastre-se</h1>
                    <input type="text" placeholder='Nome Completo' className={styles.input} />
                    <input type="email" placeholder='E-mail' className={styles.input} />
                    <input type="password" placeholder='Senha' className={styles.input} />
                    <input type="password" placeholder='Confirmar senha' className={styles.input} />
                    <button className={styles.btn}>Criar conta</button>
                    <Link href='/signIn'>
                        <h3 className={styles.sub}>Já possui uma conta?</h3>
                    </Link>
                    <p className={styles.copyright}>Coaraci © 2022</p>
                </div>
            </main >
        </div >
    );
}

export default withPublic(SignUp);