import { Icon } from "@iconify/react";
import * as PIXI from "pixi.js";
import styles from "../styles/ShowTool.module.css";
import { useState, useContext } from "react";
import { CreationContext } from "../../pages/creation";

export default function CreateElements() {

    const { elements } = useContext(CreationContext);

    return (
        <>
            <div className={styles.tool_nav}>
                <p>Design</p>
                <p>Icones</p>
            </div>
            <div className={styles.tool_content}>
                <h2>Formato</h2>
                <div className={styles.frameFormat}>
                    <Icon
                        icon="akar-icons:square"
                        className={styles.icon}
                    />
                    <Icon
                        icon="akar-icons:circle"
                        className={styles.icon}
                    />
                    <Icon
                        icon="akar-icons:triangle"
                        className={styles.icon}
                    />
                </div>
                <h2>Propiedades</h2>
                <div className={styles.frameProperties}>
                    <h3>Tamanho</h3>
                    <input type="range" name="frame-size" id="frame-size" min="10" max="100" /><p>12px</p>
                    <h3>Borda</h3>
                    <input type="range" name="frame-border" id="frame-border" min="10" max="100" /><p>1px</p>
                    <h3>Altura</h3>
                    <input type="range" name="frame-height" id="frame-height" min="10" max="100" /><p>12px</p>
                    <h3>Largura</h3>
                    <input type="range" name="frame-width" id="frame-width" min="10" max="100" /><p>12px</p>
                </div>
                <button>Create Rect</button>
            </div>
        </>
    )
}