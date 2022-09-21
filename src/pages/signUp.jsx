import Head from 'next/head';
import Link from 'next/link';
import Support from '../component/support';
import styles from '../styles/SignUp.module.css';

import { withPublic } from '../hook/route';
import { useState } from 'react';

function SignUp({ auth }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');

    const { signUpWithEmailAndPassword } = auth;
    return (
        <div className={styles.container}>
            <Head>
                <title>Criata - Cadastrar</title>
            </Head>
            <Support></Support>
            <main className={styles.main}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-duration="350"
                data-aos-offset="100">
                <img className={styles.ilus_bg} src="./assets/images/signUp/ilus-bg.svg" alt='ilustration-bg' />
                <img className={styles.ilus} src="./assets/images/signUp/ilus.svg" alt='ilustration' />
                <div className={styles.box}
                    data-aos="fade-left"
                    data-aos-offset="500"
                    data-aos-delay="200"
                    data-aos-duration="500">
                    <h1 className={styles.title}>Cadastre-se</h1>
                    <input type="text" placeholder='Nome Completo' className={styles.input} onChange={(e) => setName(e.target.value)} value={name} />
                    <input type="email" placeholder='E-mail' className={styles.input} onChange={(e) => setEmail(e.target.value)} value={email} />
                    <input type="password" placeholder='Senha' className={styles.input} onChange={(e) => setPassword(e.target.value)} value={password} />
                    <input type="password" placeholder='Confirmar senha' className={styles.input} onChange={(e) => setCPassword(e.target.value)} value={cpassword} />
                    <button className={styles.btn} onClick={() => signUpWithEmailAndPassword(name, email, password, cpassword)}>Criar conta</button>
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