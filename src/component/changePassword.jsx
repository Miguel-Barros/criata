import styles from "./styles/ChangePassword.module.css"
import { useState } from 'react';

export default function ChangePasswrod(props) {
    const [isChange, setChange] = useState(props?.isChange)

    if (isChange) {
        return (
            <div className={styles.modal}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-duration="400"
                data-aos-offset="50">
                <span className={styles.left}>
                    <img className={styles.ilus} src="../assets/components/ilus/settings-ilus.svg" alt="ilustration" />
                    <h2>Que tal algumas recomendações para ter uma senha ainda mais segura?</h2>
                    <h3><span>1º</span> Sua senha deve possuir no minimo 6 caracteres.</h3>
                    <h3><span>2º</span> Use caracteres especiais e letras maiúsculas.</h3>
                    <h3><span>3º</span> Evite sequências numéricas e a sua data de nascimento. .</h3>
                    <h3><span>4º</span> Varie o máximo que puder de uma senha para outra.</h3>
                    <h3><span>5º</span> Tenha criatividade para uma senha forte, mas não a esqueça.</h3>
                </span>
                <span className={styles.right}>
                    <span>
                        <p>Digite sua senha antiga</p>
                        <input type="text" placeholder="Inisira sua senha antiga" />
                        <p>Digite sua nova senha</p>
                        <input type="text" placeholder="Inisira sua nova senha" />
                        <p>Confirme sua nova senha</p>
                        <input type="text" placeholder="Confirme sua nova senha" />
                    </span>
                    <span>
                        <button onClick={() => setChange(false)}>Cancelar</button>
                        <button>Salvar</button>
                    </span>
                </span>
            </div>
        )
    }
}