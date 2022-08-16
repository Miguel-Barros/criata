import Head from 'next/head'
import styles from '../styles/Index.module.css'
import Link from 'next/link'
import Support from '../component/support'
import { withPublic } from '../hook/route'

function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Criata</title>
      </Head>
      <main className={styles.main}>
        <Support/>
        <div className={styles.left}>
          <span className={styles.navigation}>
            <Link href="/">
              <img src='/assets/images/index/elipse.png' className={styles.elipse} />
            </Link>
            <Link href="/">
              <img src='/assets/images/index/elipse.png' className={styles.elipse} />
            </Link>
            <Link href="/">
              <img src='/assets/images/index/elipse.png' className={styles.elipse} />
            </Link>
          </span>
          <div className={styles.box}>
            <h1 className={styles.title}>Bem vindo ao </h1>
            <h1 className={styles.logo}><b className={styles.b}>CRIA<span className={styles.b_TA}>TA</span></b></h1>
            <p className={styles.subtitle}>Somos uma plataforma para criação e personalização de currículos e portifólios online. Faça o seu próprio design e crie uma página exclusiva para você, sem se preocupar com  a programação!</p>
            <Link href="/signIn">
              <button className={styles.btn}>Vamos começar</button>
            </Link>
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

export default withPublic(Index);
