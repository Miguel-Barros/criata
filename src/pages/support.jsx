import Head from 'next/head';
import SideNav from '../component/side-nav';
import styles from '../styles/Support.module.css';

export default function Support() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Criata - Suporte</title>
            </Head>
            <main className={styles.main}>
                <SideNav />
                <div className={styles.box}>
                    <h1 className={styles.title}>Suporte <span className={styles.proj_name}>online</span></h1>
                    <p className={styles.p}>Qualquer problema em relação ao sistema, você pode solicitar ajuda para o nosso centro de suporte. Assim, poderá visualizar erros comuns e outros que podem te ajudar a solucionar o seu.</p>
                    <p className={styles.p}>Caso não consiga sanar suas dúvidas nos faça um comentário detalhando o ocorrido, para que poçamos visualizar e tentar resolver o mais rápido o  possível.</p>
                    <button className={styles.btn}>Contatar</button>
                </div>
                <img className={styles.ilus_bg} src="./assets/images/support/ilus-bg.svg" alt='ilustration' />
                <img className={styles.ilus} src="./assets/images/support/ilus.svg" alt='ilustration-bg' />
                <p className={styles.copyright}>Coaraci © 2022</p>
            </main>
        </div>
    )
}