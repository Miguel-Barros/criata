import { Icon } from "@iconify/react"
import styles from './styles/QRCode.module.css'

function QRCode({ showing, onClose }) {
    if (!showing) return null
    return (
        <div className={styles.container}>
        </div>
    )
}

export default QRCode