import Head from "next/head"
import { useRouter } from "next/router"
import { withProtected, withPublic } from "../../hook/route"
import styles from './styles/Curriculo.module.css'
import Link from "next/link"
import Database from "../../services/Database"
import Storage from "../../services/Storage"
import { useState } from "react"

function Curriculo({ auth }) {

    const { user } = auth;
    const [curriculo, setCurriculo] = useState(null)

    Storage.getFile(user.uid, 'curriculo.png').then((e) => {
        setCurriculo(e)
    })

    return (
        <div className={styles.container}>
            <Head>
                <title>Criata - Curriculo</title>
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
                    {
                        curriculo ?
                            <img src={curriculo}
                                alt="Curriculo"
                                className={styles.curriculo} />
                            :
                            <div className={styles.curriculo}>
                                <h1>Carregando...</h1>
                            </div>
                    }
                </div>
            </main>
        </div>
    )
}

export default withProtected(Curriculo)