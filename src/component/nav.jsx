import styles from './styles/Nav.module.css'
import Link from 'next/link'
import { Icon } from '@iconify/react';
import Swal from 'sweetalert2';
import useAuth from "../hook/auth";
import Database from "../services/Database"
import { useState } from 'react';

export default function Nav(props) {
    const { user } = useAuth();
    const [username, setUsername] = useState('')

    Database.getData(user.uid, 'username').then((value) => {
        setUsername(value)
    })

    return (
        <>
            <header className={styles.header}>
                <span className={styles.left}>
                    <Link href={'/'}>
                        <span className={styles.logo}>
                            <img src="./assets/components/criata_logo.svg" alt="criata-logo" />
                            <p>Criata</p>
                        </span>
                    </Link>
                </span>
                <span className={styles.right}>
                    <span className={styles.box}>
                        <Link href={'/settings'}>
                            <Icon icon={'mdi:cog-outline'} className={styles.icons} />
                        </Link>
                        <span className={styles.edit}>
                            <Link href={'/profile'}>
                                <p>{username}</p>
                            </Link>
                            <Link href={'/profile'}>
                                <Icon icon={'mdi:account-circle'} className={styles.profile} />
                            </Link>
                        </span>
                        <span className={styles.split} />
                        <input type="text" placeholder={'Buscar'} className={styles.search} />
                        <Icon icon={'mdi:magnify'} className={styles.search_icon} onClick={() => {
                            Swal.fire({
                                icon: 'error',
                                text: 'Parece que essa função foi desabilitada por um desenvolvedor',
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
