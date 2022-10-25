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
        document.querySelector("#Stage").appendChild(app.view)
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
        //text.text = testo.join('');
        console.log(testo.join(''));
        testo = [];
        console.log(text.fontSize);
    });

    text.on('pointerup', () => {
        text.off('mousemove', mv);
    });

    document.addEventListener('keypress', (event) => {
        testo[i] = event.key;
        i++;
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
            <input type="range" min='0' max='100' onChange={(e) => {
                text.style.fontSize = `${e.target.value}px`;
            }} />
            <input type="color" id="color" onChange={(e) => {
                text.style.fill = document.getElementById("color").value;
            }} />
            <p>Forma</p>
            <input type="range" min='0' max='100' onChange={(e) => {
                rect.width = e.target.value;
            }} />
            <input type="range" min='0' max='100' onChange={(e) => {
                rect.height = e.target.value;
            }} />
            <input type="color" id="color2" onChange={(e) => {
                rect.tint = `0x${document.getElementById("color2").value.slice(1)}`;
            }} />

            <div className={styles.content} id="Stage"></div>
        </>
    )
}