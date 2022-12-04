import styles from "./styles/PublishModal.module.css";

export default function PublishModal({ showing, onClose }) {
    if (!showing) return null;

    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <h2>Vamos publica-lo na Web!</h2>
                <img src="./assets/images/creation/ilusPublish.svg" alt="ilustration" />
                <p>Digite o nome que deseja para seu projeto</p>
                <input type="text" placeholder="Nome do projeto" value={'https://criata.me/' + 'SeuPrefixo'} />
                <span>
                    <button onClick={onClose}>Cancelar</button>
                    <button onClick={() => { }}>Publicar</button>
                </span>
            </div>
        </div>
    )
}
