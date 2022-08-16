import { withProtected } from "../hook/route";;
import styles from '../styles/Home.module.css';

function Home({ auth }) {
    const { logout, user } = auth;
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <p className={styles.p}><b className={styles.bold}>Crie o seu próprio design</b><br /> e use um dos templetes de exemplo para inspiração!</p>
                <button className={styles.btn} onClick={logout}>LogOut</button>
                <p className={styles.info}>Você esta logado pelo email: {user.email}</p>
            </main>
        </div>
    )
}

export default withProtected(Home);