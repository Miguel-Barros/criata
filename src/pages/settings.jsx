import Head from 'next/head'
import styles from '../styles/Settings.module.css'
import Support from '../component/support'
import { withProtected } from '../hook/route';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import Swal from 'sweetalert2';

function Settings({ auth }) {
  const { logout, user } = auth;

  function error() {
    Swal.fire({
      icon: 'error',
      text: 'Parece que essa função foi desabilitada por um desenvolvedor',
      showConfirmButton: false,
      timer: 2500})
    }

  return (
    <div className={styles.container}>
      <Head>
        <title>Criata - Configurações</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className={styles.main}
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="50"
      data-aos-offset="100">
        <Support />
        <Link href={'/home'}>
          <Icon icon={'mdi:arrow-up-left'} className={styles.arrow} />
        </Link>
        <span className={styles.info}>
          <Icon icon={'mdi:account-circle'} className={styles.profile} />
          <span>
            <p>{user.email}</p>
            <p>Ultimo acesso 20-05-2022, 14:56 PM</p>
          </span>
        </span>
        <div className={styles.box}
        data-aos="fade-left"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="50">
          <span>
            <h1 className={styles.title}>Configurações</h1>
            <h2>Conta</h2>
            <h3 onClick={error}>Editar perfil</h3>
            <h3 onClick={error}>Codigos QR do perfil</h3>
            <h2>Segurança</h2>
            <h3 onClick={error}>Alterar senha</h3>
            <h2>Preferências</h2>
            <h3 onClick={error}>Modo noturno</h3>
            <button className={styles.logout} onClick={() => logout()}>Sair</button>
          </span>
        </div>
      </main>
    </div >
  )
}

export default withProtected(Settings);
