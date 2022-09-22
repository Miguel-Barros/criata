import styles from './styles/Canvas.module.css';

export default function Canvas() {
    return (
        <>
            <div className={styles.container}>
                <img className={styles.background} src="./assets/images/creation/background.svg" alt="background" />
                <header className={styles.header}>
                    <span className={styles.left}>
                        <img className={styles.logo} src="./assets/components/criata_logo.svg" alt="criata-logo" />
                        <p>Criata</p>
                    </span>
                    <span className={styles.right}>
                        <div className={styles.tools}>
                            tools
                        </div>
                    </span>
                </header>
            </div>
        </>
    )
}