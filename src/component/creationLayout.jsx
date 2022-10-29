import Link from 'next/link';
import styles from './styles/CreationLayout.module.css';
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import * as PIXI from 'pixi.js';

export default function CreationLayout() {
    const [useTool, setTool] = useState('format-size');

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

    const app =  new PIXI.Application({ width: 800, height: 800 });

    let bg = new PIXI.Graphics().beginFill(0x000000).drawRect(0, 0, app.screen.width, app.screen.height).endFill();
    bg.interactive = true;

    let rect = new PIXI.Graphics().beginFill(0xcccccc).drawRect(0, 0, 100, 100).endFill();
    rect.interactive = true;

    let text = new PIXI.Text("teste",{fontFamily: 'Arial', fontSize: 24, fill : 0xffffff, align : 'center'});
    text.interactive = true;

    var testo = [];

    var i = 0;

    useEffect(() => {
        document.querySelector("#Stage").appendChild(app.view);
    }, [])

    app.stage.addChild(bg);
    app.stage.addChild(rect);
    app.stage.addChild(text);

    const mv = (e) => {
        text.position = {x: e.data.global.x - text.width / 2, y: e.data.global.y - text.height / 2};
    }

    const mvRect = (e) => {
        rect.position = {x: e.global.x - 50, y: e.data.global.y - 50};
        console.log(app.stage.toLocal(e.global, rect));
        console.log(e.global.x)
    }

    const escrever = (e) => {
        if(e.key != "Enter"){
            testo[i] = e.key;
            text.text = testo.join('');
            i++;
        } else {
            testo[i] = '\n';
            i++;
            text.text = testo.join('');
        }
    }

    const apagar = (e) => {
        if(e.key == "Backspace"){
            testo.pop();
            text.text = testo.join('');
        }
    }

    text.on('pointerdown', () => {
        text.on('mousemove', mv);
        document.addEventListener('keypress', escrever);
        document.addEventListener('keydown', apagar);
    });

    bg.on('click', () => {
        document.removeEventListener('keypress', escrever);
        document.removeEventListener('keydown', apagar);
    });

    text.on('pointerup', () => {
        text.off('mousemove', mv);
    }); 

    rect.on('pointerdown', (e) => {
        console.log(app.stage.toLocal(e.global))
        rect.on('mousemove', mvRect);
    })

    rect.on('pointerup', () => {
        rect.off('mousemove', mvRect)
    })

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
                        <ShowBox
                         func={useTool}
                         sliderValue={(e) => setSliderValue(e)}
                         text={text}
                         rect={rect}/>
                    </div>
                    <div className={styles.content} id="Stage">
                    </div>
                </main>
            </div>
        </>
    )
}

function ShowBox(props) {

    var text = props.text;
    var rect = props.rect;

    if (props.func === 'dots-horizontal') {
        return (
            <div className={styles.showMenu}>
                dots
            </div>
        )
    }
 
    if (props.func === 'format-size') {
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
                    <input type="range" name="" id="range" className={styles.slider_sty} min='10' max='100' onChange={(e) => {
                        setSliderValue(e.target.value);
                        text.style.fontSize=`${e.target.value}px`;
                        }} />
                    <p>{sliderValue}px</p>
                </span>
                <span className={styles.division} />
                <span className={styles.icons}>
                    <Icon icon="mdi:format-bold" className={styles.icon} />
                    <input type="checkbox" onChange={(e) => {
                        e.target.checked ? text.style.fontWeight = "bold" : text.style.fontWeight = "normal";
                    }}></input>
                    <Icon icon="mdi:format-italic" className={styles.icon} />
                    <input type="checkbox" onChange={(e) => {
                        e.target.checked ? text.style.fontStyle = "italic" : text.style.fontStyle = "normal";
                    }}></input>
                    <Icon icon="mdi:format-underline" className={styles.icon} />
                    <Icon icon="mdi:palette" className={styles.icon} />
                    <input type="color" id="color" onChange={(e) => {
                        text.style.fill = document.getElementById("color").value;
                    }} />
                    <Icon icon="mdi:format-color-highlight" className={styles.icon} />
                </span>
                <span className={styles.division} />
                <span className={styles.icons}>
                    <Icon icon="mdi:format-align-left" className={styles.icon} onClick={()=>{text.style.align="left"}} />
                    <Icon icon="mdi:format-align-center" className={styles.icon} onClick={()=>{text.style.align="center"}} />
                    <Icon icon="mdi:format-align-right" className={styles.icon} onClick={()=>{text.style.align="right"}} />
                    <Icon icon="mdi:format-align-justify" className={styles.icon} onClick={()=>{text.style.align="justify"}} />
                </span>
                <span className={styles.icons}>
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

    if (props.func === 'collage') {
        return (
            <div className={styles.showMenu}>
                <input type="number" id="comprimento" onKeyDown={(e) => {
                if(e.key == "Enter"){
                    rect.width = document.getElementById("comprimento").value;
                }
            }} />

            <input type="number" id="altura" onKeyDown={(e) => {
                if(e.key == "Enter"){
                    rect.height = document.getElementById("comprimento").value;
                }
            }} />

            <input type="color" id="color2" onChange={() => {
                rect.tint = `0x${document.getElementById("color2").value.slice(1)}`;
            }} />
            </div>
        )
    }

    if (props.func === 'aspect-ratio') {
        return (
            <div className={styles.showMenu}>
                aspect-ratio
            </div>
        )
    }

    if (props.func === 'auto-fix') {
        return (
            <div className={styles.showMenu}>
                auto-fix
            </div>
        )
    }

    if (props.func === 'texture') {
        return (
            <div className={styles.showMenu}>
                texture
            </div>
        )
    }
    
    if (props.func === 'cloud-upload') {
        return (
            <div className={styles.showMenu}>
                cloud-upload
            </div>
        )
    }

    if (props.func === 'radiobox-marked') {
        return (
            <div className={styles.showMenu}>
                radiobox-marked
            </div>
        )
    }

    if (props.func === 'help-circle-outline') {
        return (
            <div className={styles.showMenu}>
                help-circle-outline
            </div>
        )
    }

    return props.sliderValue;
}
