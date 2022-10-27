import Head from 'next/head'
import dynamic from 'next/dynamic';

const Creacao = dynamic(() => import('../component/creacao'), {
    ssr: false,
})

export default function Pao() {
    return (
        <div>
            <Head>
                <title>Criata - Criação</title>
            </Head>
            <main>
                <Creacao />
            </main>
        </div>
    )
}