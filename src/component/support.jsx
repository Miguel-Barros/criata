import Link from 'next/link'
import styles from './styles/Support.module.css'

export default function Support() {
    return (
        <>
            <Link href='/support'>
                <img className={styles.icon} src="./assets/images/support/icon.svg" />
            </Link>
        </>
    )
}

function SupportModal({ showing }) {
    if (!showing) return null;
    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <div className={styles.left}>
                    <h2>Formulario de contato</h2>
                    <img src="./assets/components/ilus-modal-support.svg" alt="" />
                    <p>Para que possamos te ajudar, preencha o formulário abaixo com o máximo de detalhes possíveis.</p>
                </div>
                <div className={styles.right}>
                    <form action="">
                        <input type="text" placeholder='Nome' />
                        <input type="text" placeholder='E-mail' />
                        <textarea name="" id="" cols="30" rows="10" placeholder='Mensagem'></textarea>
                        <button>Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export { SupportModal }