import styles from '../styles/Home.module.css';
import Head from "next/head";
import { withProtected } from '../hook/route';
import Nav from '../component/nav';
import { Icon } from '@iconify/react';

function Home({ auth }) {
    const { logout, user } = auth

    return (
        <div className={styles.container}>
            <Head>
                <title>Criata - Home</title>
            </Head>
            <Nav name={user.email} />
            <main style={styles.main}>
                <img src="./assets/images/home/bg.svg" alt="background" className={styles.background} />
                <span className={styles.welcome}>
                    <h1>Crie o seu próprio design!</h1>
                    <p>Utilize um de nossos <b>templates</b> para inspiração<br />
                        e <b>diferencie-se</b> das outras pessoas!</p>
                </span>
                <div className={styles.card_group}>
                    <div className={styles.card}>
                        <Icon icon={'mdi:plus-circle-outline'} className={styles.plus} />
                    </div>
                    <div className={styles.card}>
                        <Icon icon={'mdi:plus-circle-outline'} className={styles.plus} />
                    </div>
                    <div className={styles.card}>
                        <Icon icon={'mdi:plus-circle-outline'} className={styles.plus} />
                    </div>
                    <div className={styles.card}>
                        <Icon icon={'mdi:plus-circle-outline'} className={styles.plus} />
                    </div>
                </div>
                <div className={styles.card_group}>
                    <div className={styles.card}>
                        <Icon icon={'mdi:plus-circle-outline'} className={styles.plus} />
                    </div>
                    <div className={styles.card}>
                        <Icon icon={'mdi:plus-circle-outline'} className={styles.plus} />
                    </div>
                    <div className={styles.card}>
                        <Icon icon={'mdi:plus-circle-outline'} className={styles.plus} />
                    </div>
                    <div className={styles.card}>
                        <Icon icon={'mdi:plus-circle-outline'} className={styles.plus} />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default withProtected(Home);