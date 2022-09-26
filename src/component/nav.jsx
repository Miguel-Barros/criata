import styles from './styles/Nav.module.css'
import Link from 'next/link'
import { Icon } from '@iconify/react';

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
                        <Icon icon={'mdi:cog-outline'} className={styles.icons} />
                        <p>{props.name}</p>
                        <Icon icon={'mdi:account-circle'} className={styles.profile} />
                        <span className={styles.split} />
                        <input type="text" className={styles.search} />
                        <Icon icon={'mdi:magnify'} className={styles.search_icon} />
                    </span>
                </span>
            </header>
        </>
    )
}
