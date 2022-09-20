import Link from 'next/link'
import styles from './styles/Support.module.css'

export default function Support() {
    return (
        <>
            <Link href='/support'>
                <span className={styles.box}>
                    <img className={styles.icon} src="./assets/images/support/icon.svg" />
                </span>
            </Link>
        </>
    )
}
