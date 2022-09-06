import Head from 'next/head';
import styles from '../styles/Support.module.css';

export default function Support() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Criata - Suporte</title>
            </Head>
            <main className={styles.main}>
                <div className={styles.left}>
                    <h1 className={styles.title}>Suporte Online</h1>
                    <p className={styles.p}>Somos uma plataforma para criação e 
                    personalização de currículos e portifólios online. Faça o seu próprio design e crie uma página exclusiva para você, sem se preocupar com  a programação!</p>
                    <button className={styles.btn}>Contatar</button>
                </div>
                <div className={styles.right}>
                    <img src="./assets/images/support/ilus.svg" alt="" />
                </div>
                <p className={styles.copyright}>Coaraci © 2022</p>
            </main>
        </div>
    )
}