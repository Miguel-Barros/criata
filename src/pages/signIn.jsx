import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/SignIn.module.css';
import { withPublic } from '../hook/route';
import Support from '../component/support';
import { useState } from 'react';

function SignIn({ auth }) {
    const { loginWithGoogle, signInWithEmailAndPassword, logout } = auth;

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <div className={styles.container}>
            <Head>
                <title>SignIn - Criata</title>
            </Head>
            <main className={styles.main}>
                <div className={styles.box}>
                    <h1 className={styles.title}>Entrar</h1>
                    <input type="text" placeholder='E-mail' className={styles.input} onChange={(e) => { setEmail(e.target.value) }} value={email} />
                    <input type="password" placeholder='Senha' className={styles.input} onChange={(e) => { setPassword(e.target.value) }} value={password} />
                    <Link href='/signUp'>
                        <h3 className={styles.sub}>Esqueceu a senha?</h3>
                    </Link>
                    <button className={styles.btn} onClick={() => { signInWithEmailAndPassword(email, password) }}>Entrar</button>
                    <Link href='/signUp'>
                        <h3 className={styles.sub}>Criar conta</h3>
                    </Link>
                    <span className={styles.accounts}>
                        <img className={styles.icons} src="./assets/icons/google-icon.svg" />
                        <img className={styles.icons} src="./assets/icons/facebook-icon.svg" />
                        <img className={styles.icons} src="./assets/icons/linkedin-icon.svg"  />
                        <img className={styles.icons} src="./assets/icons/github-icon.svg" />
                    </span>
                    <p className={styles.copyright}>Coaraci © 2022</p>
                </div>
                <img className={styles.ilus_bg} src="./assets/images/login/ilus-bg.svg" alt="" />
            <img className={styles.ilus} src="./assets/images/login/ilus.svg" alt="" />
            </main >
        </div >
    );
}

export default withPublic(SignIn);