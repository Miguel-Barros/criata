import styles from './styles/Nav.module.css'

export default function Nav() {
    function search() {
        const i = document.getElementById('input')
        const search = document.getElementById('search')
        if (!i) {
            search.style.width = '250px'
            search.innerHTML += `
                <input className={styles.text} id='input' placeholder="Buscar" type="text" />
            `
        }else{
            search.style.width = '45px'
            search.innerHTML = `
                <img className={styles.search_i} src="./assets/components/search.svg" alt="" />
            `
        }
    }

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
                <span className={styles.search} id={'search'} onClick={search}>
                    <img className={styles.search_i} src="./assets/components/search.svg" alt="" />
                </span>
            </nav>
        </>
    )
}

{/* <input className={styles.text} id='input' placeholder="Buscar" type="text" /> */ }

