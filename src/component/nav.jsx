import styles from './styles/Nav.module.css'

export default function Nav() {
    return (
        <>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li>Item</li>
                </ul> 
                <ul className={styles.ul}>
                    <img className={styles.s_icon} src="./assets/components/settings-icon.svg" />
                    <p className={styles.p_name}>Wanda Django</p>
                    <img className={styles.profile} src="./assets/components/profile.svg" />
                </ul>
                <span className={styles.search}>
                    <img className={styles.search_i} src="./assets/components/search.svg" alt="" />
                    <input className={styles.text} placeholder="Buscar" type="text" />
                </span>
            </nav>
        </>
    )
}
