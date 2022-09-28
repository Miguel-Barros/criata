import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/404.module.css'

export default function Found() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Criata - Erro 404</title>
            </Head>
            <div className={styles.box}>
                <span className={styles.blur} />
                <img className={styles.ilus} src="/assets/images/404/404.svg" alt="NotFound"
                    data-aos="zoom-out"
                    data-aos-easing="ease-in-back"
                    data-aos-duration="350"
                    data-aos-offset="0" />
                <span className={styles.content}
                    data-aos="fade-right"
                    data-aos-offset="500"
                    data-aos-delay="200"
                    data-aos-duration="500">
                    <h1 className={styles.title}>Error 404</h1>
                    <h3 className={styles.sub_title}>PAGINA NÃO ENCONTRADA</h3>
                    <p className={styles.text}>
                        Desculpe, mas parece que a página solicitada <b>Não Existe</b>. Por favor, volte para a <b>Pagina Principal</b>.
                        <br />Caso você ache que algo está quebrado entre em <b>Contato </b>
                        com nosso suporte e nos relate um problema.</p>
                    <span className={styles.buttons}>
                        <Link href={'/'}>
                            <button className={styles.btn}>Pagina Principal</button>
                        </Link>
                        <Link href={'/support'}>
                            <button className={`${styles.btn} ${styles.secundary}`}>Contate-nos</button>
                        </Link>
                    </span>
                </span>
                <p className={styles.copyright}>Coaraci © 2022</p>
            </div>
        </div>
    )
}
