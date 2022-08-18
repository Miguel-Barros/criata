import Head from 'next/head';
import styles from '../styles/SignUp.module.css'
import Link from 'next/link'
import { withPublic } from '../hook/route';
import Support from '../component/support';
import { useState } from 'react';

function SignUp({ auth }) {
    const { createUserWithEmailAndPassword } = auth;

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <div className={styles.container}>
            <Head>
                <title>Sign Up - Criata</title>
            </Head>
            <main className={styles.main}>
                <Support/>
                <div className={styles.left}>
                    <img src="/assets/images/signUp/bg-ilus.svg" className={styles.background} />
                    <img src="/assets/images/signUp/ilus.svg" className={styles.ilus} />
                </div>
                <div className={styles.right}>
                    <h1 className={styles.title}>Criar conta</h1>
                    {/* <input type="text" placeholder='Nome completo' className={styles.input} /> */}
                    {/* <input type="text" placeholder='Nome de usuario' className={styles.input} /> */}
                    <input type="text" placeholder='E-mail' className={styles.input} onChange={(e) => {setEmail(e.target.value)}} value={email}/>
                    <input type="password" placeholder='Senha' className={styles.input} minLength={6} onChange={(e) => {setPassword(e.target.value)}} value={password}/>
                    {/* <input type="password" placeholder='Confirmar senha' className={styles.input} /> */}
                    <button className={styles.btn} onClick={() => {createUserWithEmailAndPassword(email, password)}}>Criar conta</button>
                    <Link href='/signIn'>
                        <a className={styles.link}>Fazer login</a>
                    </Link>
                    <p className={styles.copyright}>Coaraci © 2022</p>
                </div>
            </main >
        </div >
    );
}

export default withPublic(SignUp);