import Link from 'next/link';
import styles from './styles/Canvas.module.css';
import { Icon } from '@iconify/react';

export default function Canvas() {
    return (
        <>
            <div className={styles.container}>
                <img className={styles.background} src="./assets/images/creation/background.svg" alt="background" />
                <header className={styles.header}>
                    <span className={styles.left}>
                        <Link href={'/home'}>
                            <div className={styles.logo}>
                                <img src="./assets/components/criata_logo.svg" alt="criata-logo" />
                                <p>Criata</p>
                            </div>
                        </Link>
                    </span>
                    <span className={styles.right}>
                        <div className={styles.tools}>
                            <Icon className={styles.icon} icon="mdi:arrow-u-left-top" color="white" height="25" />
                            <Icon className={styles.icon} icon="mdi:arrow-u-right-top" color="white" height="25" />
                            <span className={styles.slice}></span>
                            <Icon className={styles.icon} icon="mdi:palette" color="white" height="25" />
                            <Icon className={styles.icon} icon="mdi:shimmer" color="white" height="25" />
                            <Icon className={styles.icon} icon="mdi:tray-arrow-down" color="white" height="25" />
                            <Icon className={styles.icon} icon="mdi:trash-can-outline" color="white" height="25" />
                            <Icon className={styles.icon} icon="mdi:sort-variant-remove" color="white" height="25" />
                            <Icon className={styles.icon} icon="mdi:view-split-horizontal" color="white" height="25" />
                            <Icon className={styles.icon} icon="mdi:dots-vertical" color="white" height="25" />
                        </div>
                        <span className={styles.buttons}>
                            <button className={styles.btn}>Vizualizar</button>
                            <button className={styles.btn}>Publicar</button>
                        </span>
                    </span>
                </header>
                <main className={styles.main}>
                    <div className={styles.side_menu}>
                        <div className={styles.split} id={'tools'}>
                            <div className={styles.tool}>
                                <Icon icon="mdi:dots-horizontal" className={styles.tool_icon} />
                            </div>
                            <div className={styles.tool}>
                                <Icon icon="mdi:format-size" className={styles.tool_icon} />
                            </div>
                            <div className={styles.tool}>
                                <Icon icon="mdi:collage" hFlip={true} className={styles.tool_icon} />
                            </div>
                            <div className={styles.tool}>
                                <Icon icon="mdi:aspect-ratio" className={styles.tool_icon} />
                            </div>
                            <div className={styles.tool}>
                                <Icon icon="mdi:auto-fix" className={styles.tool_icon} />
                            </div>
                            <div className={styles.tool}>
                                <Icon icon="mdi:texture" className={styles.tool_icon} />
                            </div>
                            <div className={styles.tool}>
                                <Icon icon="mdi:cloud-upload" className={styles.tool_icon} />
                            </div>
                            <div className={styles.tool}>
                                <Icon icon="mdi:radiobox-marked" className={styles.tool_icon} />
                            </div>
                            <div className={`${styles.tool} ${styles.support_icon}`}>
                                <Icon icon="mdi:help-circle-outline" className={styles.tool_icon} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.content}></div>
                </main>
            </div>
        </>
    )
}