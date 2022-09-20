import styles from '../styles/About.module.css'
import SideNav from '../component/side-nav'
import Support from '../component/support'
import Head from 'next/head'
import Link from 'next/link'

import { withPublic } from '../hook/route';

function About() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Criata - Sobre nós</title>
            </Head>
            <Support></Support>
            <section className={`${styles.intro} ${styles.section}`}>
                <div className={styles.main}
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-duration="350"
                    data-aos-offset="0">
                    
                    <img className={styles.bg} src="./assets/images/about/bg.svg" alt="background" />
                    <span className={styles.logo}>
                    <SideNav page={'about'}/>
                        <img className={styles.team_logo} src="./assets/images/about/team-logo.svg" alt="team-logo" />
                        <h3 className={styles.team_name} >COARACI</h3>
                    </span>
                    <div className={styles.box}>
                        <h1 className={styles.title}>Equipe <span className={styles.bold}>Coaraci</span></h1>
                        <p className={styles.text}>Somos uma equipe de 5 (cinco) integrantes, trazendo suas brasilidades e as cores, tendo como meta, possibilitar que qualquer pessoa tenha seu trabalho profissional organizado, de forma única e referente a sua identidade sem perder a praticidade.</p>
                        <p className={styles.text}>Nos conheça mais a seguir! </p>
                        <Link href='/team'>
                            <img className={styles.arrow} src="./assets/components/arrow.svg" alt="arrow" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default withPublic(About);