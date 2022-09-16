import Image from 'next/image';
import logo from '../../public/assets/components/logo.svg';
import styles from './styles/Canvas.module.css';
import { Icon } from '@iconify/react';

export default function Canvas() {
    return(
        <>
            <div className={styles.container}>
                <div className={styles.row1}>
                    <div className={styles.logo}>
                        <Image 
                            src={logo}
                            width={192}
                            height={70}
                        />
                    </div>
                    <div className={styles.navbar}>
                        <Icon icon="mdi:arrow-u-left-top" color="white" height="25" />
                        <Icon icon="mdi:arrow-u-right-top" color="white" height="25" />
                        <span className={styles.separador}></span>
                        <Icon icon="mdi:palette" color="white" height="25" />
                        <Icon icon="mdi:shimmer" color="white" height="25" />
                        <Icon icon="mdi:tray-arrow-down" color="white" height="25" />
                        <button className={styles.btnRemove} id="btnRemover"><Icon icon="mdi:trash-can-outline" color="white" height="25" /></button>
                        <Icon icon="mdi:dots-vertical" color="white" height="25" />
                    </div>
                    <button className={styles.visualizar}> Visualizar </button>
                    <button className={styles.publicar}> Publicar </button>
                </div>
                <div className={styles.row2}>
                    <div className={styles.col1}>
                        <div className={styles.retangulo}>
                            <Icon icon="mdi:dots-horizontal" width="50" height="50" className={styles.icon} />
                            <Icon icon="mdi:format-annotation-plus" width="50" height="50" className={styles.icon} />
                            <Icon icon="mdi:vector-difference-ab" hFlip={true} width="50" height="50" className={styles.icon}/>
                            <Icon icon="mdi:shape" width="50" height="50" className={styles.icon} />
                            <Icon icon="mdi:radiobox-marked" width="50" height="50" className={styles.icon} />
                            <Icon icon="mdi:folder-upload-outline" width="50" height="50" className={styles.icon} />
                            <Icon icon="mdi:help-circle-outline" width="50" height="50" className={styles.icon} id="suporte" />
                        </div>
                    </div>
                    <div className={styles.col2}>
                        <div className={styles.stage} id="stage"></div>
                    </div>
                </div>
            </div>
        </>
    )
}