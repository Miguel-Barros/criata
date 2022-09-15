import styles from './styles/SideNav.module.css'
import Link from 'next/link'

export default function SideNav( props ) {
    return (
        <>
            <span className={styles.navigation}>
                <Link href={'/support'}>
                    <div className={styles.circle}></div>
                </Link>
                <Link href={'/'}>
                    <div className={styles.circle}></div>
                </Link>
                <Link href={'/about'}>
                    <div className={styles.circle}></div>
                </Link>
            </span>
        </>
    )
}