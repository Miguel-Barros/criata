import Head from 'next/head';
import styles from '../styles/SignIn.module.css'

export default function SignIn() {
    return (
        <div className={styles.container}>
            <Head>
                <title>SignIn - Criata</title>
            </Head>
            <main className={styles.main}>
                <p className={styles.copyright}>Coaraci © 2022</p>
            </main >
        </div >
    );
}