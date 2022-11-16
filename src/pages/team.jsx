import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Team.module.css'

import { withPublic } from '../hook/route';
import { Icon } from '@iconify/react';

function Team() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Criata - Nossa equipe</title>
            </Head>
            <div className={styles.main}
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-duration="350"
            data-aos-offset="0">
                <img src="./assets/images/team/bg.svg" alt="background" className={styles.bg} />
                <Link href={'/about'}>
                    <Icon icon={'mdi:arrow-left'} className={styles.arrow} />
                </Link>
                <h1 className={styles.title}>Conheça nossa equipe <span>Coaraci</span></h1>
                <div className={styles.card_group}
                data-aos="fade-up"
                data-aos-easing="ease-in-back"
                data-aos-duration="700"
                data-aos-offset="20">
                    <div className={styles.card}>
                        <img src="./assets/images/team/bruno.svg" alt="bruno" />
                        <h2>Bruno Salinas</h2>
                        <h3>@brunosalinas</h3>
                        <p>Sou designer digital, e para mim o design é a principal interface do sistema, sendo uma comunicação direta com o usuário, permitindo uma melhor navegação e usabilidade do site. </p>
                    </div>
                    <div className={styles.card}>
                        <img src="./assets/images/team/david.svg" alt="david" />
                        <h2>David Larrosa</h2>
                        <h3>@davidlarrosa</h3>
                        <p>Sou programador full stack, e acredito que em todas as coisas o sucesso depende de uma preparação prévia, e sem tal preparação a falha é certa. Assim devemos nos empenhar para ter sempre um melhor resultado.</p>
                    </div>
                    <div className={styles.card}>
                        <img src="./assets/images/team/lorena.svg" alt="lorena" />
                        <h2>Lorena Sobral</h2>
                        <h3>@lorenasobral</h3>
                        <p>Sou analista documentacional e considero que o sistema começa entendendo as necessidades do usuário e esclarecendo-as, para que assim, sejam atendidas da melhor forma.</p>
                    </div>
                    <div className={styles.card}>
                        <img src="./assets/images/team/clara.svg" alt="maria" />
                        <h2>Maria Ramos</h2>
                        <h3>@mariaramos</h3>
                        <p>Sou administradora de Banco de dados e Designer, creio que para ter um bom sistema, o banco de dados é fundamental para que suas informações sejam armazenadas e consultadas.</p>
                    </div>
                    <div className={styles.card}>
                        <img src="./assets/images/team/miguel.svg" alt="miguel" />
                        <h2>Miguel de Barros</h2>
                        <h3>@miguelbarros</h3>
                        <p>Desenvolvedor Full-Stack, UI/UX Design & CTO. Para mim, você só pode descobrir o quão ambicioso é, somente na sua falha. Pois é dai que se tem a certeza se você vai desistir ou continuar.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withPublic(Team);