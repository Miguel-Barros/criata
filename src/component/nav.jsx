import styles from './styles/Nav.module.css'
import Link from 'next/link'
import { Icon } from '@iconify/react';

export default function Nav(props) {
    return (
        <>
            <header className={styles.header}>
                <span className={styles.left}>
                    <Link href={'/home'}>
                        <div className={styles.logo}>
                            <img src="./assets/components/criata_logo.svg" alt="criata-logo" />
                            <p>Criata</p>
                        </div>
                    </Link>
                </span>
                <span className={styles.right}>
                    <span className={styles.settings}>
                        <Icon className={styles.icon} icon="mdi:cog-outline" />
                        <span className={styles.user}>
                            <p>{props.name}</p>
                            <img className={styles.profile_icon} src="./assets/components/profile.png" alt="profile-icon" />
                        </span>
                    </span>
                    <span className={styles.split}></span>
                    <div className={styles.search}>
                        <Icon className={styles.search_icon} icon="mdi:magnify" />
                        <input type="text" placeholder={'Buscar'}/>
                    </div>
                </span>
            </header>
        </>
    )
}
