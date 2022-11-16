import React, { useState } from 'react';
import styles from './styles/CreationService.module.css';
import { Icon } from '@iconify/react';

export default function ShowBox(props) {
    var app = props.app;
    var bg = props.bg;
    var text = props.text;
    var rect = props.rect;

    if (props.func === 'more-horiz') {
        return (
            <div className={styles.showMenu}>
                dots
            </div>
        )
    }
 
    else if (props.func === 'text-size') {
        const [sliderValue, setSliderValue] = useState(24);
        const [sliderValue1, setSliderValue1] = useState(100);
        const [sliderValue2, setSliderValue2] = useState(100);
        const [sliderValue3, setSliderValue3] = useState(50);
        const [sliderValue4, setSliderValue4] = useState(50);
        const handleSubmit = async (e) => {
            e.preventDefault()
    
            let origem = PIXI.Texture.from(URL.createObjectURL(document.getElementById("file").files[0]));
            let img = new PIXI.Sprite(origem);
            img.interactive = true;
            app.stage.addChild(img);
    
            const mvImg = (e) => {
                img.position = {x: e.data.global.x - img.width / 2, y: e.data.global.y - img.height / 2};
                img.cursor = 'move';
            }    
    
            img.on('pointerdown', () => {
                img.on('mousemove', mvImg);
            });
        
            img.on('pointerup', () => {
                img.off('mousemove', mvImg);
                img.cursor = 'default';
            });
        }
        return (
            <div className={styles.showMenu}>
                <span>
                    <h3>Temas</h3>
                    <select className={styles.dropdown}>
                        <option value="">Titulo 1</option>
                    </select>
                </span>

                <button onClick={()=>{
                    let num;
                    let rect2 = [];
                    num++;
                    rect2[num] = new PIXI.Graphics().beginFill(0xcccccc).drawRect(0, 0, 100, 100).endFill();
                    rect2[num].interactive = true;
                    app.stage.addChild(rect2[num]);

                    const mvRect2 = (e) => {
                        rect2[num].position = {x: e.global.x - rect2[num].width / 2, y: e.data.global.y - rect2[num].height / 2};
                        rect2[num].cursor = 'move';
                    }

                    rect2[num].on('pointerdown', () => {
                        rect2[num].on('mousemove', mvRect2);
                    });
                
                    rect2[num].on('pointerup', () => {
                        rect2[num].off('mousemove', mvRect2);
                        rect2[num].cursor = 'default';
                    }); 
                }}> Adicionar </button>
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
                    <label for="bold"><Icon icon="mdi:format-bold" className={styles.icon} /></label>
                    <input className={styles.checkbox} id="bold" type="checkbox" onChange={(e) => {
                        e.target.checked ? text.style.fontWeight = "bold" : text.style.fontWeight = "normal";
                    }}/>
                    <label for="italic"><Icon icon="mdi:format-italic" className={styles.icon} /></label>
                    <input className={styles.checkbox} id="italic" type="checkbox" onChange={(e) => {
                        e.target.checked ? text.style.fontStyle = "italic" : text.style.fontStyle = "normal";
                    }}/>
                    <Icon icon="mdi:format-underline" className={styles.icon} />
                    <label for="color"><Icon icon="mdi:palette" className={styles.icon} /></label>
                    <input className={styles.checkbox} type="color" id="color" onChange={() => {
                        text.style.fill = document.getElementById("color").value;
                    }} />
                    <Icon icon="mdi:format-color-highlight" className={styles.icon} />
                </span>
                <span className={styles.division} />

                <form onSubmit={handleSubmit}>
                    <input type="file" id="file"></input>

                    <button type="submit">Submit</button>
                </form>
                <input type="range" name="" id="range" className={styles.slider_sty} min='10' max='100' onChange={(e) => {
                        setSliderValue3(e.target.value);
                        text.style.fontSize=`${e.target.value}px`;
                        }} />
                <p>{sliderValue3}px</p>
                <input type="range" name="" id="range" className={styles.slider_sty} min='10' max='100' onChange={(e) => {
                        setSliderValue4(e.target.value);
                        text.style.fontSize=`${e.target.value}px`;
                        }} />
                    <p>{sliderValue4}px</p>
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

                <input type="range" name="" id="range" className={styles.slider_sty} min='10' max='1000' onChange={(e) => {
                    setSliderValue1(e.target.value);
                    rect.height = e.target.value;
                    }} />
                <p>{sliderValue1}px</p>

                <input type="range" name="" id="range" className={styles.slider_sty} min='10' max='1000' onChange={(e) => {
                    setSliderValue2(e.target.value);
                    rect.width = e.target.value;
                    }} />
                <p>{sliderValue2}px</p>

                <input type="color" id="color2" onChange={() => {
                    rect.tint = `0x${document.getElementById("color2").value.slice(1)}`;
                }} />
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

    else if (props.func === 'frame-simple') {
        return (
            <div className={styles.showMenu}>
                collage
            </div>
        )
    }

    if (props.func === 'media-image') {
        return (
            <div className={styles.showMenu}>
                <button>Adicionar imagem</button>
            </div>
        )
    }

    if (props.func === 'bounce-right') {
        return (
            <div className={styles.showMenu}>
                auto-fix
            </div>
        )
    }

    if (props.func === 'intersect') {
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

    if (props.func === 'up-round-arrow') {
        return (
            <div className={styles.showMenu}>
                radiobox-marked
            </div>
        )
    }

    if (props.func === 'question-mark-circle') {
        return (
            <div className={styles.showMenu}>
                help-circle-outline
            </div>
        )
    }
}
