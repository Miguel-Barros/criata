import Head from 'next/head'
import styles from '../styles/Index.module.css'
import Link from 'next/link'
import Support from '../component/support'
import { withPublic } from '../hook/route'
import SideNav from '../component/side-nav'

function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Criata</title>
      </Head>
      <main className={styles.main}>
        <SideNav />
        <div className={styles.box}>
          <h1 className={styles.title}>Bem vindo ao <span className={styles.proj_name}>Criata</span></h1>
          <p className={styles.text}>Somos uma plataforma para criação e personalização de currículos e portifólios online. Faça o seu próprio design e crie uma página exclusiva para você, sem se preocupar com  a programação!</p>
          <Link href='/signIn'>
            <button className={styles.btn}>Vamos começar</button>
          </Link>
        </div>
        <img className={styles.ilus} src="./assets/images/index/ilus_index.svg" alt='ilustration' />
        <img className={styles.ilus_bg} src="./assets/images/index/ilus_bg.svg" alt='ilustration-bg' />
      </main >
    </div >
  )
}

export default withPublic(Index);
