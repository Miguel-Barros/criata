import dynamic from 'next/dynamic';

const Canvas = dynamic(() => import('../component/canvas'), {
    ssr: false,
})

export default function Creation() {
    return(
        <Canvas />
    )
}