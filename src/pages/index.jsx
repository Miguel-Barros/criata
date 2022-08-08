import Head from 'next/head'
import styles from '../styles/Index.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Criata</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.left}>
          <span className={styles.navigation}>
            <a href=""><img src='assets/images/index/elipse.png' className={styles.elipse} /></a>
            <a href=""><img src='assets/images/index/elipse.png' className={styles.elipse} /></a>
            <a href=""><img src='assets/images/index/elipse.png' className={styles.elipse} /></a>
          </span>
          <div className={styles.box}>
            <h1 className={styles.title}>Bem vindo ao </h1>
            <h1 className={styles.logo}><b className={styles.b}>CRIATA</b></h1>
            <p className={styles.subtitle}>Somoss uma plataforma para criação e personalização de currículos e portifólios online. Faça o seu próprio design e crie uma página exclusiva para você, sem se preocupar com  a programação!</p>
            <a href="/signIn"><button className={styles.btn}>Vamos começar</button></a>
          </div>
        </div>
        <div className={styles.right}>
          <img src='assets/images/index/bg-index.svg' className={styles.background} />
          <img src='assets/images/index/ilus-index.svg' className={styles.ilus} />
        </div>
      </main >
    </div >
  )
}
