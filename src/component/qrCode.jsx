import { Icon } from "@iconify/react"
import { useEffect, useState } from "react"
import useAuth from "../hook/auth";
import styles from './styles/QRCode.module.css'
import Database from "../services/Database";
import CodeQR from "react-qr-code";

function QRCode({ showing, onClose }) {
    if (!showing) return null
    const { user } = useAuth()
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        Database.getUserData(user.uid).then((data) => {
            setUserData(data)
        })
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <Icon icon="mdi:close" className={styles.close} onClick={onClose} />
                <h2>Meu codigo QR</h2>
                <img className={styles.profile} src={userData?.imgProfile} alt="Profile-Img" />
                <h3>{userData?.fullName}</h3>
                <h3 className={styles.username}>{userData?.username}</h3>
                <span>
                    <CodeQR size={160} className={styles.qrCode} value={`https://criata.me/profile/${userData?.username?.replace('@', '')}`} />
                </span>
                <button className={styles.btn} onClick={() => {
                    const qrCode = document.querySelector(`.${styles.qrCode}`)
                    const a = document.createElement('a')
                    a.href = qrCode.src
                    a.download = 'qrCode.png'
                    a.click()
                }}>Compartilhar Codigo QR</button>
            </div>
        </div>
    )
}

export default QRCode