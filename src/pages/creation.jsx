import Head from 'next/head'
import dynamic from 'next/dynamic';
import { withProtected } from '../hook/route';

const Canvas = dynamic(() => import('../component/canvas'), {
    ssr: false,
})

function Creation({ auth }) {
    
    return(
        <div 
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-duration="600"
        data-aos-offset="100">
            <Head>
                <title> Criata - Criação </title>
            </Head>
            <Canvas />
        </div>
    )
}

export default withProtected(Creation)