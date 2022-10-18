import Link from 'next/link';
import styles from './styles/CreationLayout.module.css';
import { Icon } from '@iconify/react';
import ShowBox from '../services/CreationService';
import { useState } from 'react';
import Script from 'next/script';

import EditableText from './creationComponents/editableText'

export default function CreationLayout() {
    const [useTool, setTool] = useState('format-size')

    const sideTools = [
        'dots-horizontal',
        'format-size',
        'collage',
        'aspect-ratio',
        'auto-fix',
        'texture',
        'cloud-upload',
        'radiobox-marked',
        'help-circle-outline'
    ]
    const topTools = [
        'arrow-u-left-top',
        'arrow-u-right-top',
        'palette',
        'shimmer',
        'tray-arrow-down',
        'trash-can-outline',
        'sort-variant-remove',
        'view-split-horizontal',
        'dots-vertical'
    ]

    return (
        <>
            <div className={styles.container}>
                <img className={styles.background} src="./assets/images/creation/background.svg" alt="background" />
                <header className={styles.header}>
                    <Link href={'/'}>
                        <span className={styles.logo}>
                            <img src="./assets/components/criata_logo.svg" alt="criata-logo" />
                            <p>Criata</p>
                        </span>
                    </Link>
                    <span className={styles.top_bar}>
                        <span>
                            {topTools.map((e) => {
                                return (
                                    <Icon className={styles.icon} icon={`mdi:${e}`} />
                                )
                            })}
                        </span>
                        <span>
                            <button className={styles.btn}>Visualizar</button>
                            <button className={styles.btn}>Publicar</button>
                        </span>
                    </span>
                </header>
                <main className={styles.main} id="main">
                    <div className={styles.side_menu}>
                        <span className={styles.tools}>
                            {sideTools.map((e) => {
                                return (
                                    <div className={styles.tool} onClick={() => setTool(e)}>
                                        <Icon icon={`mdi:${e}`} className={styles.icon} />
                                    </div>
                                )
                            })}
                        </span>
                        <ShowBox func={useTool} />
                    </div>
                    <div id="Stage"></div>
                </main>
                <Script src="script.js" type="module" />
            </div>
        </>
    )
}