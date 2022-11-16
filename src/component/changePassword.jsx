import styles from "./styles/ChangePassword.module.css"
import { useState } from 'react';
import useAuth from '../hook/auth'

export default function ChangePasswrod({isOpen, onClose}) {
    const { user, updatePassword } = useAuth()

    const [oldPassword, setOldPassword] = useState(null)
    const [newPassword, setNewPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)

    if(!isOpen) return null

    return (
        <div className={styles.modal}
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-duration="400"
            data-aos-offset="50">
                <span className={styles.blur}></span>
            <span className={styles.left}>
                <img className={styles.ilus} src="../assets/components/ilus/settings-ilus.svg" alt="ilustration" />
                <h2>Que tal algumas recomendações para ter uma senha ainda mais segura?</h2>
                <h3><span>•</span> Sua senha deve possuir no minimo 6 caracteres. </h3>
                <h3><span>•</span> Use caracteres especiais e letras maiúsculas.</h3>
                <h3><span>•</span> Evite sequências numéricas e a sua data de nascimento.</h3>
                <h3><span>•</span> Varie o máximo que puder de uma senha para outra.</h3>
                <h3><span>•</span> Tenha criatividade para uma senha forte, mas não a esqueça.</h3>
            </span>
            <span className={styles.right}>
                <span>
                    <p>Digite sua senha antiga</p>
                    <input type="password" placeholder="Inisira sua senha antiga" onChange={(e) => setOldPassword(e.target.value)} value={oldPassword} maxLength={16} minLength={6} />
                    <p>Digite sua nova senha</p>
                    <input type="password" placeholder="Inisira sua nova senha" onChange={(e) => setNewPassword(e.target.value)} value={newPassword} maxLength={16} minLength={6}/>
                    <p>Confirme sua nova senha</p>
                    <input type="password" placeholder="Confirme sua nova senha" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} maxLength={16} minLength={6} />
                </span>
                <span>
                    <button onClick={() => {
                        onClose()
                        setOldPassword('')
                        setNewPassword('')
                        setConfirmPassword('')
                    }}>Cancelar</button>
                    <button onClick={() => updatePassword(user, oldPassword, newPassword, confirmPassword)} >Redefinir</button>
                </span>
            </span>
        </div>
    )
}