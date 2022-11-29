import { Icon } from "@iconify/react";
import * as PIXI from "pixi.js";
import { drawRoundedPolygon } from "@pixi/graphics-extras"
import styles from "../styles/ShowTool.module.css";
import { useState, useContext, useEffect } from "react";
import { CreationContext } from "../../pages/creation";

export default function CreateElements() {

    const { app, elementSelected, getElementProps, elementProps } = useContext(CreationContext);

    const [frameScale, setFrameScale] = useState(1);
    const [frameRotate, setFrameRotate] = useState(0);
    const [frameBorder, setFrameBorder] = useState(25);
    const [frameHeight, setFrameHeight] = useState(100);
    const [frameWidth, setFrameWidth] = useState(100);
    const [frameColor, setFrameColor] = useState("#000000");
    const [cliped, setCliped] = useState(false);

    function createRectangle(color, width, height, border) {
        const elementRect = new PIXI.Graphics();
        elementRect.beginFill(`0x${color?.replace("#", "")}`);
        elementRect.drawRoundedRect(0, 0, width, height, border);
        elementRect.endFill();
        app.stage.addChild(elementRect);
    }

    function createCircle(color, width, height) {
        const elementCircle = new PIXI.Graphics();
        elementCircle.beginFill(`0x${color?.replace("#", "")}`);
        elementCircle.drawCircle(width / 2, height / 2, width / 2);
        elementCircle.endFill();
        app.stage.addChild(elementCircle);
    }

    function createTriangle(color, width, height, radius) {
        const elementTriangle = new PIXI.Graphics();
        elementTriangle.beginFill(`0x${color?.replace("#", "")}`);
        elementTriangle.drawRoundedPolygon(100, 200,
            (
                width / 2, 0,
                0, height,
                width, height
            ), 3, radius, 0);
        elementTriangle.endFill();
        app.stage.addChild(elementTriangle);
    }

    useEffect(() => {
        if (elementSelected) {
            const { width, height } = getElementProps(elementSelected);
            setFrameWidth(width.toFixed(0));
            setFrameHeight(height.toFixed(0));
        }
    }, [elementProps])

    useEffect(() => {
        if (elementSelected) {
            elementSelected.width = frameWidth;
            elementSelected.height = frameHeight;
            // elementSelected.rotation = frameRotate * Math.PI / 180;
            // elementSelected.scale.set(frameScale / 100 );
            // elementSelected.backgroundColor = `0x${frameColor.replace("#", "")}`;
        }
    }, [frameBorder, frameHeight, frameWidth, frameColor, frameScale, frameRotate])

    return (
        <>
            <div className={styles.tool_nav}>
                <p>Design</p>
                <p>Icones</p>
            </div>
            <div className={styles.tool_content}>
                <h2>Formas</h2>
                <div className={styles.frameFormat}>
                    <Icon
                        icon="akar-icons:square"
                        className={styles.icon}
                        onClick={() => createRectangle(
                            frameColor,
                            frameWidth,
                            frameHeight,
                            frameBorder
                        )}
                    />
                    <Icon
                        icon="akar-icons:circle"
                        className={styles.icon}
                        onClick={() => createCircle(
                            frameColor,
                            frameWidth,
                            frameHeight
                        )}
                    />
                    <Icon
                        icon="akar-icons:triangle"
                        className={styles.icon}
                        onClick={() => createTriangle(
                            frameColor,
                            frameWidth,
                            frameHeight,
                            frameBorder
                        )}
                    />
                </div>
                <h2>Propiedades</h2>
                <div className={styles.frameProperties}>
                    <h3>Borda</h3>
                    <input type="range" name="frame-border" id="frame-border" min="1" max="100" onChange={(e) => setFrameBorder(e.target.value)} value={frameBorder} />
                    <p>{frameBorder}px</p>
                    <h3>Altura</h3>
                    <input type="range" name="frame-height" id="frame-height" min="10" max={app.screen.height} onChange={(e) => setFrameHeight(e.target.value)} value={frameHeight} />
                    <p>{frameHeight}px</p>
                    <input
                        type="checkbox"
                        name="height-lock-and-width-lock"
                        id="height-lock-and-width-lock"
                        className={styles.checkbox}
                    />
                    <h3>Largura</h3>
                    <input type="range" name="frame-width" id="frame-width" min="10" max={app.screen.width} onChange={(e) => setFrameWidth(e.target.value)} value={frameWidth} />
                    <p>{frameWidth}px</p>
                    {
                        cliped ? (
                            <span className={styles.clip}>
                                <Icon
                                    icon="mdi:paperclip"
                                    className={styles.icon}
                                    onClick={() => setCliped(false)}
                                />
                                <p>Entrelaçar</p>
                            </span>
                        ) : (
                            <span className={styles.clip}>
                                <Icon
                                    icon="mdi:paperclip-off"
                                    className={styles.icon}
                                    onClick={() => setCliped(true)}
                                    style={{
                                        color: "#9351B6"
                                    }}
                                />
                                <p style={{
                                    color: "#9351B6"
                                }}>Desentrelaçar</p>
                            </span>
                        )
                    }
                    {/* <h3>Rotação</h3>
                    <input type="range" name="frame-rotate" id="frame-rotate" min="0" max="360" onChange={(e) => setFrameRotate(e.target.value)} value={frameRotate} />
                    <p>{frameRotate}°</p>
                    <h3>Escala</h3>
                    <input type="range" name="frame-scale" id="frame-scale" min="1" max="10" onChange={(e) => setFrameScale(e.target.value)} value={frameScale} />
                    <p>{frameScale}x</p>
                    <h3>Color</h3> */}
                    <input type="color" name="frame-color" id="frame-color" onChange={(e) => setFrameColor(e.target.value)} />
                </div>
            </div>
        </>
    )
}