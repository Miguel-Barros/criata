import styles from '../styles/Home.module.css';
import Head from "next/head";
import { withProtected } from '../hook/route';
import Nav from '../component/nav';

function Home({ auth }) {
    const { logout, user } = auth

    return (
        <div className={styles.container}>
            <Head><title>Criata - Home</title></Head>
            <Nav name={user.email} />
            <main className={styles.main}>
                <img src="./assets/images/home/bg.svg" alt="background" className={styles.bg} />
            </main>
        </div>
    )
}

export default withProtected(Home);