import { withProtected } from "../hook/route";;
import styles from '../styles/Home.module.css';
import Head from "next/head";
import Nav from "../component/nav";

function Home({ auth }) {

    const { user } = auth

    return (
        <div className={styles.container}>
            <Head><title>Criata - Home</title></Head>
            <main className={styles.main}>
                <Nav displayName={user.displayName} />
                <img src="./assets/images/home/bg.svg" className={styles.bg} />
                <p className={styles.p}><b className={styles.bold}>Crie o seu próprio design</b><br /> e use um dos templetes de exemplo para inspiração!</p>
                <div className={styles.card_Group}>
                    <div className={styles.card}><img className={styles.plus} src="./assets/components/plus.svg" alt="" /></div>
                    <div className={styles.card}><p className={styles.text}>Template</p></div>
                    <div className={styles.card}><p className={styles.text}>Template</p></div>
                </div>
            </main>
        </div>
    )
}

export default withProtected(Home);