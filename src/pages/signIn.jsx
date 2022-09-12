import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/SignIn.module.css';

function SignIn() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Criata - Logar</title>
            </Head>
            <main className={styles.main}>
                <div className={styles.box}>
                    <h1 className={styles.title}>Entrar</h1>
                    <input type="text" placeholder='E-mail' className={styles.input}  />
                    <input type="password" placeholder='Senha' className={styles.input} />
                    <Link href='/forgot'>
                        <h3 className={styles.sub}>Esqueceu a senha?</h3>
                    </Link>
                    <button className={styles.btn}>Entrar</button>
                    <Link href='/signUp'>
                        <h3 className={styles.sub}>Ainda não tem uma conta?</h3>
                    </Link>
                    <span className={styles.accounts}>
                        <img className={styles.icons} src="./assets/icons/google-icon.svg" />
                        <img className={styles.icons} src="./assets/icons/facebook-icon.svg" />
                        <img className={styles.icons} src="./assets/icons/linkedin-icon.svg" />
                        <img className={styles.icons} src="./assets/icons/github-icon.svg" />
                    </span>
                    <p className={styles.copyright}>Coaraci © 2022</p>
                </div>
                <img className={styles.ilus_bg} src="./assets/images/login/ilus-bg.svg" alt='ilustration-bg' />
                <img className={styles.ilus} src="./assets/images/login/ilus.svg" alt='ilustration' />
            </main >
        </div >
    );
}

export default SignIn;