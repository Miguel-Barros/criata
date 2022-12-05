import Head from "next/head"
import { useRouter, useState } from "next/router"
import { withProtected, withPublic } from "../../hook/route"
import styles from './styles/Curriculo.module.css'

function Curriculo({ auth }) {

    const router = useRouter()
    const { curriculo } = router.query

    return (
        <div className={styles.container}>
            <Head>
                <title>Criata - Curriculo</title>
            </Head>
            <main className={styles.main}>
                <img src='assets/images/c/bg.svg' alt="" />
            </main>
        </div>
    )
}

export default withProtected(Curriculo)