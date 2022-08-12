import Head from 'next/head';
import styles from '../styles/SignUp.module.css'
import Link from 'next/link'

export default function SignUp() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Sign Up - Criata</title>
            </Head>
            <main className={styles.main}>
                <div className={styles.left}>
                    <img src="/assets/images/signUp/bg-ilus.svg" className={styles.background} />
                    <img src="/assets/images/signUp/ilus.svg" className={styles.ilus} />
                </div>
                <div className={styles.right}>
                    <h1 className={styles.title}>Criar conta</h1>
                    <input type="text" placeholder='Nome completo' className={styles.input} />
                    <input type="text" placeholder='Nome de usuario' className={styles.input} />
                    <input type="text" placeholder='E-mail' className={styles.input} />
                    <input type="password" placeholder='Senha' className={styles.input} />
                    <input type="password" placeholder='Confirmar senha' className={styles.input} />
                    <button className={styles.btn}>Criar conta</button>
                    <Link href='/signIn'>
                        <a className={styles.link}>Fazer login</a>
                    </Link>
                    <p className={styles.copyright}>Coaraci © 2022</p>
                </div>
            </main >
        </div >
    );
}