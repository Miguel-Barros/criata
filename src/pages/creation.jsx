import Head from 'next/head'
import dynamic from 'next/dynamic';
import { withProtected } from '../hook/route';
import styles from '../styles/Creation.module.css'

const CreationLayout = dynamic(() => import('../component/creationLayout'), {
    ssr: false,
})

function Creation({ auth }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Criata - Criação</title>
            </Head>
            <main className={styles.main}>
                <CreationLayout />
            </main>
        </div>
    )
}

export default withProtected(Creation)