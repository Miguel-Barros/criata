import Head from 'next/head';
import styles from '../styles/Forgot.module.css'
import { withPublic } from '../hook/route';
import Link from 'next/link';

function Forgot({ auth }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Criata - Esqueceu a senha</title>
            </Head>
            <main className={styles.main}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="50"
                data-aos-offset="100">
                <div className={styles.box}>
                    <h1 className={styles.title}>Esqueci a senha</h1>
                    <p className={styles.text}>Insira seu <b>Email Cadastrado</b> para que seja enviado um código de verificação para sua <b>Caixa de Entrada</b>,
                        e assim possamos te redirecionar para a alteração de senha</p>
                    <input className={styles.input} type="email" placeholder='Insira seu Email' />
                    <button className={styles.btn} onClick={() => { }}>Enviar</button>
                    <Link href={'/signIn'}>
                        <button className={`${styles.btn} ${styles.delined}`}>Voltar</button>
                    </Link>
                </div>
                <p className={styles.copyright}>Coaraci © 2022</p>
                <img className={styles.ilus_bg} src="./assets/images/forgot/ilus-bg.svg" alt='ilustration-bg' />
                <img className={styles.ilus} src="./assets/images/forgot/ilus.svg" alt='ilustration' />
            </main >
        </div >
    );
}

export default withPublic(Forgot);