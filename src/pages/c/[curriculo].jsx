import Head from "next/head"
import { withProtected, withPublic } from "../../hook/route"
import styles from './styles/Curriculo.module.css'

function Curriculo() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Criata - Curriculo</title>
            </Head>
            <main className={styles.main}>
                <h1>Curriculo</h1>
            </main>
        </div>
    )
}

export default withProtected(Curriculo)