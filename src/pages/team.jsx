import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Team.module.css'

function Team() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Criata - Nossa equipe</title>
            </Head>
            <span className={styles.mini_box}>
                <Link href={'/about'}>
                    <img className={styles.arrow} src="./assets/components/arrow.svg" alt="arrow" />
                </Link>
                <h1 className={styles.title}>Conheça a nossa <span className={styles.bold}>equipe</span></h1>
            </span>
            <div className={styles.main}>
                <div className={styles.card_group}>
                    <div className={styles.card}>
                        <img className={styles.photo} src="./assets/images/team/bruno.svg" alt="" />
                        <p className={styles.member_name}>Bruno Salinas</p>
                        <p className={styles.member_prefix}>@brunosalinas</p>
                        <div className={styles.bio}>
                            <p className={styles.bio_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet cursus tellus, accumsan aliquet turpis. Ut vitae sodales erat. </p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.photo} src="./assets/images/team/david.svg" alt="" />
                        <p className={styles.member_name}>David Larrosa</p>
                        <p className={styles.member_prefix}>@davidlarrosa</p>
                        <div className={styles.bio}>
                            <p className={styles.bio_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet cursus tellus, accumsan aliquet turpis. Ut vitae sodales erat. </p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.photo} src="./assets/images/team/lorena.svg" alt="" />
                        <p className={styles.member_name}>Lorena Sobral</p>
                        <p className={styles.member_prefix}>@lorenasobral</p>
                        <div className={styles.bio}>
                            <p className={styles.bio_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet cursus tellus, accumsan aliquet turpis. Ut vitae sodales erat. </p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.photo} src="./assets/images/team/maria.svg" alt="" />
                        <p className={styles.member_name}>Maria Ramos</p>
                        <p className={styles.member_prefix}>@mariaramos</p>
                        <div className={styles.bio}>
                            <p className={styles.bio_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet cursus tellus, accumsan aliquet turpis. Ut vitae sodales erat. </p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.photo} src="./assets/images/team/miguel.svg" alt="" />
                        <p className={styles.member_name}>Miguel de Barros</p>
                        <p className={styles.member_prefix}>@miguelbarros</p>
                        <div className={styles.bio}>
                            <p className={styles.bio_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet cursus tellus, accumsan aliquet turpis. Ut vitae sodales erat. </p>
                        </div>
                    </div>
                </div>
                <img className={styles.ilus_bg} src="./assets/images/team/bg-ilus.svg" alt="background" />
                <img className={styles.bg} src="./assets/images/team/bg.svg" alt="background" />
            </div>
        </div>
    )
}

export default Team;