import styles from './styles/Nav.module.css'
import Link from 'next/link'
import { Icon } from '@iconify/react';
import Swal from 'sweetalert2';

export default function Nav(props) {
    return (
        <>
            <header className={styles.header}>
                <span className={styles.left}>
                    <span className={styles.logo}>
                        <img src="./assets/components/criata_logo.svg" alt="criata-logo" />
                        <p>Criata</p>
                    </span>
                </span>
                <span className={styles.right}>
                    <span className={styles.box}>
                        <Link href={'/settings'}>
                            <Icon icon={'mdi:cog-outline'} className={styles.icons} />
                        </Link>
                        <p>{props.name}</p>
                        <Icon icon={'mdi:account-circle'} className={styles.profile} />
                        <span className={styles.split} />
                        <input type="text" placeholder={'Buscar'} className={styles.search} />
                        <Icon icon={'mdi:magnify'} className={styles.search_icon} onClick={() => {
                            Swal.fire({
                                icon: 'error',
                                text: 'Não foi possivel realizar sua busca',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }} />
                    </span>
                </span>
            </header>
        </>
    )
}
