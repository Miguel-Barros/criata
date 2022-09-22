import Head from 'next/head'
import styles from '../styles/Creation.module.css';
import dynamic from 'next/dynamic';

const Canvas = dynamic(() => import('../component/canvas'), {
    ssr: false,
})

export default function Creation() {
    
    return(
        <div className={styles.container}>
            <Head>
                <title> Criata - Criação </title>
            </Head>
            <Canvas />
        </div>
    )
}