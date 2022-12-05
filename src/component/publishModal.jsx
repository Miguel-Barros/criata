import { Router, useRouter } from "next/router";
import { useState } from "react";
import styles from "./styles/PublishModal.module.css";

export default function PublishModal({ showing, onClose }) {
    if (!showing) return null;

    const [defaultPrefix, setDefaultPrefix] = useState("https://criata.me/c/");
    const [prefix, setPrefix] = useState("");
    const router = useRouter();

    function publishProject() {
        if (prefix === "") {
            alert("Insira um prefixo para o seu projeto");
            return;
        }
        router.push('/c/' + prefix);
    }

    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <h2>Vamos publica-lo na Web!</h2>
                <img src="./assets/images/creation/ilusPublish.svg" alt="ilustration" />
                <p>Digite o nome que deseja para seu projeto</p>

                <input type="text" placeholder="https://criata.me/"
                    value={"https://criata.me/c/" + prefix}
                    onChange={(e) => setPrefix(e.target.value.slice(20).replace(' ', ''))}
                />
                <span>
                    <button onClick={onClose}>Cancelar</button>
                    <button onClick={() => {
                        publishProject()
                    }}>Publicar</button>
                </span>
            </div>
        </div>
    )
}