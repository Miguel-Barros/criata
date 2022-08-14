import Head from 'next/head'
import styles from '../styles/Index.module.css'
import Link from 'next/link'

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Criata</title>
      </Head>
      <main className={styles.main}>
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
          <Link href="/suporte"> 
            <button type="button" className={styles.btn_suporte}>
              <svg xmlns="http://www.w3.org/2000/svg" width="2.5vw" height="2.5vw" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
              </svg>
              <br/> Suporte Online
            </button>
          </Link>
        </div>
      </main >
    </div >
  )
}
