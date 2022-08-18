import styles from './styles/Nav.module.css'

export default function Nav() {
    return (
        <>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li>Item</li>
                </ul>
                <ul className={styles.ul}>
                    <li>Item</li>
                </ul>
            </nav>
        </>
    )
}
