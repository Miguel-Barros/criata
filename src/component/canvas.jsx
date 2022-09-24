import Link from 'next/link';
import styles from './styles/Canvas.module.css';
import { Icon } from '@iconify/react';
import { showBox } from '../services/CreationService';
import { useState } from 'react';

export default function Canvas() {
    const [sliderValue, setSliderValue] = useState(18)

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
                            <div className={styles.tool} onClick={() => { }}>
                                <Icon icon="mdi:dots-horizontal" className={styles.tool_icon} />
                            </div>
                            <div className={`${styles.tool} ${styles.active}`} onClick={() => showBox('text')}>
                                <Icon icon="mdi:format-size" className={styles.tool_icon} />
                            </div>
                            <div className={styles.tool} onClick={() => { }}>
                                <Icon icon="mdi:collage" hFlip={true} className={styles.tool_icon} />
                            </div>
                            <div className={styles.tool} onClick={() => { }}>
                                <Icon icon="mdi:aspect-ratio" className={styles.tool_icon} />
                            </div>
                            <div className={styles.tool} onClick={() => { }}>
                                <Icon icon="mdi:auto-fix" className={styles.tool_icon} />
                            </div>
                            <div className={styles.tool} onClick={() => { }}>
                                <Icon icon="mdi:texture" className={styles.tool_icon} />
                            </div>
                            <div className={styles.tool} onClick={() => { }}>
                                <Icon icon="mdi:cloud-upload" className={styles.tool_icon} />
                            </div>
                            <div className={styles.tool} onClick={() => { }}>
                                <Icon icon="mdi:radiobox-marked" className={styles.tool_icon} />
                            </div>
                            <div className={`${styles.tool} ${styles.support_icon}`}>
                                <Icon icon="mdi:help-circle-outline" className={styles.tool_icon} />
                            </div>
                        </div>
                        <div className={styles.showMenu}>
                            <span>
                                <h3>Temas</h3>
                                <select className={styles.dropdown}>
                                    <option value="">Titulo 1</option>
                                </select>
                            </span>
                            <span>
                                <h3>Fonte</h3>
                                <select className={styles.dropdown}>
                                    <option value="">Mulish</option>
                                </select>
                            </span>
                            <span className={styles.slider}>
                                <h3>Tamanho</h3>
                                <input type="range" name="" id="" className={styles.slider_sty} min='1' max='100' onChange={(e) => setSliderValue(e.target.value)} />
                                <p>{sliderValue}px</p>
                            </span>
                            <span className={styles.division} />
                            <span className={styles.icons}>
                                <Icon icon="mdi:format-bold" className={styles.icon} />
                                <Icon icon="mdi:format-italic" className={styles.icon} />
                                <Icon icon="mdi:format-underline" className={styles.icon} />
                                <Icon icon="mdi:palette" className={styles.icon} />
                                <Icon icon="mdi:format-color-highlight" className={styles.icon} />
                            </span>
                            <span className={styles.division} />
                            <span className={styles.formats}>
                                <Icon icon="mdi:format-align-left" className={styles.icon} />   
                                <Icon icon="mdi:format-align-center" className={styles.icon} />
                                <Icon icon="mdi:format-align-right" className={styles.icon} />
                                <Icon icon="mdi:format-align-justify" className={styles.icon} /><br/>
                                <Icon icon="mdi:format-horizontal-align-center" className={styles.icon} />
                                <Icon icon="mdi:format-vertical-align-bottom" className={styles.icon} />
                                <Icon icon="mdi:format-vertical-align-center" className={styles.icon} />
                                <Icon icon="mdi:format-vertical-align-top" className={styles.icon} />
                            </span>
                            <span className={styles.division} />
                            <span className={styles.models}>
                                <h3>Modelos</h3>
                                <div className={styles.model}>
                                    Modelo 1
                                </div>
                                <div className={styles.model}>
                                    Modelo 2
                                </div>
                                <div className={styles.model}>
                                    Modelo 3
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className={styles.content}>
                    </div>
                </main>
            </div>
        </>
    )
}