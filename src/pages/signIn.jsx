import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/SignIn.module.css';
import { withPublic } from '../hook/route';
import Support from '../component/support';
import { useState } from 'react';

function SignIn({ auth }) {
    const { loginWithGoogle, signInWithEmailAndPassword } = auth;

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <div className={styles.container}>
            <Head>
                <title>SignIn - Criata</title>
            </Head>
            <main className={styles.main}>
                <Support />
                <div className={styles.left}>
                    <h1 className={styles.title}>Login</h1>
                    <input type="text" placeholder='E-mail' className={styles.input} onChange={(e) => {setEmail(e.target.value)}} value={email}/>
                    <input type="password" placeholder='Senha' className={styles.input} onChange={(e) => {setPassword(e.target.value)}} value={password}/>
                    <button className={styles.btn} onClick={() => {signInWithEmailAndPassword(email, password)}}>Login</button>
                    <Link href='/signUp'>
                        <a className={styles.link}>Criar conta</a>
                    </Link>
                    <span className={styles.navlogs}>
                        <img onClick={loginWithGoogle} src="./assets/images/login/google.svg" />
                        <img src="./assets/images/login/github.svg" />
                        <img src="./assets/images/login/microsoft.svg" />
                    </span>
                    <p className={styles.copyright}>Coaraci © 2022</p>
                </div>
                <div className={styles.right}>
                    <img src="/assets/images/login/bg-ilus.svg" className={styles.background} />
                    <img src="/assets/images/login/ilus.svg" className={styles.ilus} />
                </div>
            </main >
        </div >
    );
}

export default withPublic(SignIn);