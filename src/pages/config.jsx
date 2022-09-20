import Head from 'next/head'

import { withPublic } from '../hook/route';

function Config() {
  return (
    <div >
      <Head>
        <title>Configurações</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main 
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-duration="350"
        data-aos-offset="0">
        <div> TEST </div>
      </main >
    </div >
  )
}

export default withPublic(Config);
