import styles from './styles/Nav.module.css'

export default function Nav(props) {
    function Search() {
        const input = document.getElementById('input')
        const box = document.getElementById('search')
        if (!input) {
            box.style.width = '250px'
            box.innerHTML += `
                <input className={styles.input} id='input' placeholder="Buscar usuario" type="text" />
            `
        }
    }

    return (
        <>
            <nav className={styles.nav}>
                <span className={styles.box}>
                    <div className={styles.logo}>
                        <img className={styles.l_icon} src="./assets/components/criata_logo.svg" alt="" />
                        <p className={styles.l_text}>Criata</p>
                    </div>
                    <div className={styles.profile}>
                        <img className={styles.s_icon} src="./assets/components/settings-icon.svg" />
                        <p className={styles.p_name}>{props.displayName}</p>
                        <img className={styles.p_icon} src="./assets/components/profile.png" alt="" />
                    </div>
                </span>
                <span className={styles.search}>
                    <span className={styles.s_box} id={'search'} onClick={Search}>
                        <img className={styles.s_icon} src="./assets/components/search.svg" alt="" />
                    </span>
                </span>
            </nav>
        </>
    )
}
