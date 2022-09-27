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
                        <p><b>Desenvolvedor de software</b> e <b>Gerente de projetos</b>. <b>Programador em Java</b>, <b>React Native</b> e <b>PHP</b>.
                            Recém formado em serviço de tecnologia da informação (TI) na Universidade de São Paulo (USP).
                        </p>
                    </div>
                    <div className={styles.card}>
                        <img src="./assets/images/team/david.svg" alt="david" />
                        <h2>David Larrosa</h2>
                        <h3>@davidlarrosa</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci magni natus explicabo quia, nemo aspernatur eligendi commodi veniam laboriosam perspiciatis eum voluptatum, nihil ipsum fuga nisi esse exercitationem quidem earum!</p>
                    </div>
                    <div className={styles.card}>
                        <img src="./assets/images/team/lorena.svg" alt="lorena" />
                        <h2>Lorena Sobral</h2>
                        <h3>@lorenasobral</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci magni natus explicabo quia, nemo aspernatur eligendi commodi veniam laboriosam perspiciatis eum voluptatum, nihil ipsum fuga nisi esse exercitationem quidem earum!</p>
                    </div>
                    <div className={styles.card}>
                        <img src="./assets/images/team/maria.svg" alt="maria" />
                        <h2>Maria Ramos</h2>
                        <h3>@mariaramos</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci magni natus explicabo quia, nemo aspernatur eligendi commodi veniam laboriosam perspiciatis eum voluptatum, nihil ipsum fuga nisi esse exercitationem quidem earum!</p>
                    </div>
                    <div className={styles.card}>
                        <img src="./assets/images/team/miguel.svg" alt="miguel" />
                        <h2>Miguel de Barros</h2>
                        <h3>@miguelbarros</h3>
                        <p><b>Desenvolvedor Full-Stack</b>, <b>UI/UX Design</b> & <b>CTO</b>.
                            Pra mim, você só pode descobrir o quão ambicioso é, somente na sua falha.
                            Pois é dai que se tem a certeza se você vai desistir ou continuar.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withPublic(Team);