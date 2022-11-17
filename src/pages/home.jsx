import styles from '../styles/Home.module.css';
import Head from "next/head";
import { withProtected } from '../hook/route';
import Nav from '../component/nav';
import { Icon } from '@iconify/react';
import Router from 'next/router';
import Swal from 'sweetalert2';

function Home({ auth }) {
    const { logout, user } = auth

    function click() {
        Swal.fire({
            icon: 'error',
            title: "Opps...",
            text: "Parece que essa função foi desativada por um administrador",
            showConfirmButton: false,
            timer: 2000,
            customClass: {
                container: styles.swal
            }
        })
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Criata - Home</title>
            </Head>
            <Nav />
            <main style={styles.main}>
                <img src="./assets/images/home/bg.svg" alt="background" className={styles.background} />
                <span className={styles.welcome}>
                    <h1>Crie o seu próprio design!</h1>
                    <p>e use um dos <b>templates</b> de exemplo para inspiração!</p>
                </span>
                <section className={styles.section}>
                    <div className={styles.card_group}>
                        <div className={styles.card} onClick={() => Router.push('/creation')}>
                            <Icon icon={'mdi:plus-circle-outline'} className={styles.plus} />
                        </div>
                        <div className={styles.card} onClick={click}>
                            <p>Template</p>
                            <span className={styles.blur}></span>
                            <img src="./assets/components/models/model1.png" alt="Template" className={styles.template} />
                        </div>
                        <div className={styles.card} onClick={click}>
                            <p>Template</p>
                            <span className={styles.blur}></span>
                            <img src="./assets/components/models/model2.png" alt="Template" className={styles.template} />
                        </div>
                        <div className={styles.card} onClick={click}>
                            <p>Template</p>
                            <span className={styles.blur}></span>
                            <img src="./assets/components/models/model3.png" alt="Template" className={styles.template} />
                        </div>
                    </div>
                    <div className={styles.card_group}>
                        <div className={styles.card} onClick={click}>
                            <p>Template</p>
                            <span className={styles.blur}></span>
                            <img src="./assets/components/models/model3.png" alt="Template" className={styles.template} />
                        </div>
                        <div className={styles.card} onClick={click}>
                            <p>Template</p>
                            <span className={styles.blur}></span>
                            <img src="./assets/components/models/model4.png" alt="Template" className={styles.template} />
                        </div>
                        <div className={styles.card} onClick={click}>
                            <p>Template</p>
                            <span className={styles.blur}></span>
                            <img src="./assets/components/models/model1.png" alt="Template" className={styles.template} />
                        </div>
                        <div className={styles.card} onClick={click}>
                            <p>Template</p>
                            <span className={styles.blur}></span>
                            <img src="./assets/components/models/model2.png" alt="Template" className={styles.template} />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default withProtected(Home);