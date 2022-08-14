import Head from 'next/head'
import styles from '../styles/Suporte.module.css'
import Link from 'next/link'

export default function Suporte() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Suporte</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.left}>
          <img src='assets/images/suporte/bg2-ilus.svg' className={styles.background2} />
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
            <h1 className={styles.title}>Suporte Online</h1>
            <p className={styles.subtitle}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            <Link href="">
              <button className={styles.btn}>Ver mais</button>
            </Link>
          </div>
          <p className={styles.copyright}>Coaraci © 2022</p>
        </div>
        <div className={styles.right}>
          <img src='assets/images/suporte/bg1-ilus.svg' className={styles.background1} />
          <img src='assets/images/suporte/ilus.svg' className={styles.ilus} />
        </div>
      </main >
    </div >
  )
}
