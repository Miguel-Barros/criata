import Head from 'next/head'
import styles from '../styles/Creation.module.css';
import dynamic from 'next/dynamic';
import { withProtected } from '../hook/route';

const Canvas = dynamic(() => import('../component/canvas'), {
    ssr: false,
})

function Creation({ auth }) {
    
    return(
        <div className={styles.container}>
            <Head>
                <title> Criata - Criação </title>
            </Head>
            <Canvas />
        </div>
    )
}

export default withProtected(Creation)