import Head from 'next/head'
import styles from '../styles/Index.module.css'
import Link from 'next/link'
import SideNav from '../component/side-nav'
import { withPublic } from '../hook/route';
import Support from '../component/support'

function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Criata</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-duration="350"
        data-aos-offset="0">
        <SideNav page={'index'}/>
        <Support />
        <div className={styles.box}>
          <h1 className={styles.title}>Bem vindo ao <span className={styles.proj_name}>Criata</span></h1>
          <p className={styles.text}>Somos uma plataforma para criação e personalização de currículos e portifólios online. Faça o seu próprio design e crie uma página exclusiva para você, sem se preocupar com  a programação!</p>
          <Link href='/signIn'>
            <button className={styles.btn}>Vamos começar</button>
          </Link>
        </div>
        <img className={styles.ilus} src="./assets/images/index/ilus_index.svg" />
        <img className={styles.ilus_bg} src="./assets/images/index/ilus_bg.svg" />
      </main >
    </div >
  )
}

export default withPublic(Index);