import Link from 'next/link';
import styles from './styles/CreationLayout.module.css';
import { Icon } from '@iconify/react';
import ShowBox from '../services/CreationService';
import { useEffect, useState } from 'react';
import * as PIXI from 'pixi.js';

export default function CreationLayout() {

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
            <p>texto</p>
            <input type="range" min='10' max='300' onChange={(e) => {
                text.style.fontSize = `${e.target.value}px`;
            }} />

            <p> Negrito </p>
            <input type="checkbox" onChange={(e) => {
                e.target.checked ? text.style.fontWeight = "bold" : text.style.fontWeight = "normal";
            }}></input>

            <p> Italico </p>
            <input type="checkbox" onChange={(e) => {
                e.target.checked ? text.style.fontStyle = "italic" : text.style.fontStyle = "normal";
            }}></input>

            <button onClick={() => {
                text.style.align = "left";
            }}>Alinhar esquerda</button>

            <button onClick={() => {
                text.style.align = "center";
            }}>Alinhar centro</button>

            <button onClick={() => {
                text.style.align = "right";
            }}>Alinhar direita</button>

            <button onClick={() => {
                text.style.align = "justify";
            }}>Justificado</button>

            <input type="color" id="color" onChange={(e) => {
                text.style.fill = document.getElementById("color").value;
            }} />
            <p>Forma</p>

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

            <input type="color" id="color2" onChange={(e) => {
                rect.tint = `0x${document.getElementById("color2").value.slice(1)}`;
            }} />

            <div className={styles.content} id="Stage"></div>
        </>
    )
}