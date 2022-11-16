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
            <div className={styles.main}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-duration="350"
                data-aos-offset="0">
                <SideNav page={'about'} />
                <img className={styles.bg} src="./assets/images/about/bg.svg" alt="background" />
                <img className={styles.plant1} src="./assets/images/about/plants.svg" alt="plants" />
                <img className={styles.plant2} src="./assets/images/about/plants.svg" alt="plants" />
                <span className={styles.logo}>
                    <img src="./assets/images/about/team-logo.svg" alt="team-logo" />
                    <h3>COARACI</h3>
                </span>
                <span className={styles.content}>
                    <h1 className={styles.title}>Equipe <span className={styles.bold}>Coaraci</span></h1>
                    <p className={styles.text}>Somos uma equipe de 5 (cinco) integrantes,
                        trazendo suas brasilidades e as cores, tendo como meta, possibilitar que qualquer pessoa tenha seu trabalho
                        profissional organizado, de forma única e referente a sua identidade sem perder a praticidade.<br />
                        Nos conheça mais a seguir!</p>
                    <Link href='/team'>
                        <img className={styles.icon} src="./assets/components/arrow.svg" alt="arrow" />
                    </Link>
                </span>
                <p className={styles.copyright}>Coaraci © 2022</p>
            </div>
        </div>
    )
}

export default withPublic(About);