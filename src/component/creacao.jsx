import Link from 'next/link';
import styles from './styles/CreationLayout.module.css';
import { Icon } from '@iconify/react';
import ShowBox from '../services/CreationService';
import { useEffect, useState } from 'react';
import * as PIXI from 'pixi.js';

export default function CreationLayout() {

    const app =  new PIXI.Application({ width: 800, height: 800 });

    let rect = new PIXI.Graphics().beginFill(0xffffff).drawRect(0, 0, 100, 100).endFill();
    rect.interactive = true;

    let text = new PIXI.Text("teste",{fontFamily: 'Arial', fontSize: 24, fill : 0xff1010, align : 'center'});
    text.interactive = true;

    var testo = [];

    var i = 0;

    useEffect(() => {
        document.querySelector("#Stage").appendChild(app.view);
    }, [])

    app.stage.addChild(rect);
    app.stage.addChild(text);

    const mv = (e) => {
        text.position = {x: e.data.global.x, y: e.data.global.y};
    }

    const mvRect = (e) => {
        rect.position = {x: e.data.global.x - 50, y: e.data.global.y - 50};
    }

    text.on('pointerdown', () => {
        text.on('mousemove', mv);
    });

    text.on('pointerup', () => {
        text.off('mousemove', mv);
    });

    document.addEventListener('keypress', (e) => {
        if(e.key != "Enter"){
            testo[i] = e.key;
            text.text = testo.join('');
            i++;
        }
    });

    document.addEventListener('keydown', (e) => {
        if(e.key == "Backspace"){
            testo.pop();
            text.text = testo.join('');
        }
    });

    rect.on('pointerdown', () => {
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