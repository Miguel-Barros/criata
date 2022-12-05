import { useState } from "react";
import styles from "./styles/PublishModal.module.css";

export default function PublishModal({ showing, onClose }) {
    if (!showing) return null;

    const [defaultPrefix, setDefaultPrefix] = useState("https://criata.me/");
    const [prefix, setPrefix] = useState("");

    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <h2>Vamos publica-lo na Web!</h2>
                <img src="./assets/images/creation/ilusPublish.svg" alt="ilustration" />
                <p>Digite o nome que deseja para seu projeto</p>
                
                <input type="text" placeholder="https://criata.me/"
                    value={"https://criata.me/" + prefix}
                    onChange={(e) => setPrefix(e.target.value.slice(18).replace(' ', ''))}
                />
                <span>
                    <button onClick={onClose}>Cancelar</button>
                    <button onClick={() => { 
                        alert("Publicado com sucesso! em: " + defaultPrefix + prefix);
                    }}>Publicar</button>
                </span>
            </div>
        </div>
    )
}