import styles from './styles/CreationService.module.css'
import { Icon } from '@iconify/react'
import { useState } from 'react'

export default function CreationService(props) {

    if(props.func === 'dots'){
        return(
            <div className={styles.showMenu}>
                dots
            </div>
        )
    }

    if (props.func === 'text') {
        const [sliderValue, setSliderValue] = useState(12);
        return (
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
                    <Icon icon="mdi:format-align-justify" className={styles.icon} /><br />
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
        )
    }

    if(props.func === 'collage'){
        return(
            <div className={styles.showMenu}>
                collage
            </div>
        )
    }

    if(props.func === 'ratio'){
        return(
            <div className={styles.showMenu}>
                ratio
            </div>
        )
    }

    if(props.func === 'auto-fix'){
        return(
            <div className={styles.showMenu}>
                auto-fix
            </div>
        )
    }

    if(props.func === 'texture'){
        return(
            <div className={styles.showMenu}>
                texture
            </div>
        )
    }

    if(props.func === 'cloud-upload'){
        return(
            <div className={styles.showMenu}>
                cloud-upload
            </div>
        )
    }

    if(props.func === 'radio-box'){
        return(
            <div className={styles.showMenu}>
                radiobox
            </div>
        )
    }
}