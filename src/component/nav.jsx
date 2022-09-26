import styles from './styles/Nav.module.css'
import Link from 'next/link'
import { Icon } from '@iconify/react';

export default function Nav(props) {
    return (
        <>
            <header className={styles.header}>
                <img src="./assets/components/criata_logo.svg" alt="criata-logo" className={styles.logo} />
            </header>
        </>
    )
}
