import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Index.module.css'
import ArrowIcon from '../../public/assets/icons/arrow-down-right.svg'
import SideNav from '../component/side-nav'
import Support from '../component/support'
import { withPublic } from '../hook/route';

function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Criata</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className={styles.main}
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-duration="350"
        data-aos-offset="0">
        <div className={styles.col1}>
          <div className={styles.row1}>
            <h1 className={styles.title}>Bem vindo ao <br /><span className={styles.proj_name}>CRIATA</span></h1>
          </div>
          <div className={styles.row2}>
            <p className={styles.text}>Somos uma plataforma para criação e personalização de currículos e portifólios online. Faça o seu próprio design e crie uma página exclusiva para você, sem se preocupar com  a programação!</p>
            <SideNav page={'index'}/>
          </div>
          <div className={styles.row3}>
            <Link href='/signIn'>
              <button className={styles.btn}>Vamos começar</button>
            </Link>
            <Link href='/about'>
              <p className={styles.about}> Quem somos
                <Image
                  className={styles.icon}
                  src={ArrowIcon}
                  width={24}
                  height={24}
                />
              </p> 
            </Link>
          </div>
        </div>
        <div className={styles.col2}>
          <Support/>
          <img className={styles.ilus} src="./assets/images/index/ilus_index.svg" />
          <img className={styles.ilus_bg} src="./assets/images/index/ilus_bg.svg" />
        </div>
      </main >
    </div >
  )
}

export default withPublic(Index);
