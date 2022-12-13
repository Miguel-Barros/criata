import React from 'react'
import styles from './styles/Template.module.css'
import { useRouter } from 'next/router'
import Head from 'next/head';
import Link from 'next/link';

export default function Template() {
    const route = useRouter();
    const { template } = route.query;

    return (
        <div className={styles.container}>
            <Head>
                <title>Criata - Template</title>
            </Head>
            <main className={styles.main}>
                <img src="/assets/images/curriculo/background.svg" alt="Criata" className={styles.background} />
                <Link href={'/'}>
                    <div className={styles.logo}>
                        <img src="/assets/components/criata_logo.svg" alt="Criata" />
                        <h1>Criata</h1>
                    </div>
                </Link>
                <div className={styles.content}>
                    <img src={`/assets/components/models/${template}.png`} alt="" />
                </div>
            </main>
        </div>
    )
}

