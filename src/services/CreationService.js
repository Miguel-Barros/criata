import React, { useState } from 'react';
import styles from './styles/CreationService.module.css'
import { Icon } from '@iconify/react'
import { Text, Layer, Rect, Transformer } from 'react-konva';

function ShowBox(props) {

    if (props.func === 'dots') {
        return (
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

    if (props.func === 'collage') {
        return (
            <div className={styles.showMenu}>
                collage
            </div>
        )
    }

    if (props.func === 'ratio') {
        return (
            <div className={styles.showMenu}>
                ratio
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

    if (props.func === 'radio-box') {
        return (
            <div className={styles.showMenu}>
                radiobox
            </div>
        )
    }
}

function CreateText(props) {
    let state = {
        isDragging: false,
        x: 50,
        y: 50,
    }

    const Rectangle = ({ shapeProps, isSelected, onSelect, onChange}) => {
        const shapeRef = React.useRef();
        const trRef = React.useRef();

        React.useEffect(() => {
            if(isSelected) {
                trRef.current.nodes([shapeRef.current])
                trRef.current.getLayer().batchDraw()
            }
        }, [isSelected])

        return(
            <React.Fragment>
                <Rect 
                    onClick={onSelect}
                    onTap={onSelect}
                    ref={shapeRef}
                    {...shapeProps}
                    draggable
                    onDragEnd={(e) => {
                        onChange({
                            ...shapeProps,
                            x: e.target.x(),
                            y: e.target.y(),
                        })
                    }}
                    onTransformEnd={(e) => {
                        const node = shapeRef.current
                        const scaleX = node.scaleX()
                        const scaleY = node.scaleY()

                        node.scaleX(1)
                        node.scaleY(1)
                        onChange({
                            ...shapeProps,
                            x: node.x(),
                            y: node.y(),

                            width: Math.max(5, node.width() * scaleX),
                            height: Math.max(node.height() * scaleY),
                        })
                    }}
                />
                {isSelected && (
                    <Transformer 
                        ref={trRef}
                        boundBoxFunc={(oldBox, newBox) => {
                            if(newBox.width < 5 || newBox.height < 5){
                                return oldBox
                            }
                            return newBox
                        }}
                    />
                )}
            </React.Fragment>
        )
    }

    const initialRectangles = [
        {
            x: 10,
            y: 10,
            width: 100,
            height: 100,
            fill: 'red',
            id: 'rect1',
        },
    ]

    const [rectangles, setRectangles] = useState(initialRectangles)
    const [selectedId, selectedShape] = useState(null)

    const checkDeselect = (e) => {
        const clickedOnEmpty = e.target === e.target.getStage();
        if(clickedOnEmpty){
            selectedShape(null)
        }
    }

    return (
        <>
            <Layer>
                {rectangles.map((rect, i) => {
                    return (
                        <Rectangle
                            key={i}
                            shapeProps={rect}
                            isSelected={rect.id === selectedId}
                            onSelect={() => {
                                selectedShape(rect.id)
                            }}
                            onChange={(newAttrs) => {
                                const rects = rectangles.slice()
                                rects[i] = newAttrs
                                setRectangles(rects)
                            }}
                        />
                    )
                })}
            </Layer>
        </>
    )
}

export { ShowBox, CreateText}