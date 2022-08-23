import styles from './styles/Nav.module.css'

export default function Nav() {

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
                <span className={styles.search} id={'search'} onClick={Search}>
                    <img className={styles.search_i} src="./assets/components/search.svg" alt="" />
                </span>
            </nav>
        </>
    )
}
