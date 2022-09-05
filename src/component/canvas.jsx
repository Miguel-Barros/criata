import styles from './styles/Canvas.module.css';
import { Icon } from '@iconify/react';
//import { Stage, Layer, Rect, Circle } from 'react-konva';
import Konva from 'konva';

export default function Canvas() {
    window.onload = () => {
        const btn = document.getElementById("btn");
        const btnRemove = document.getElementById("btnRemove");
        var width = document.getElementById("stage").clientWidth;
        var height = document.getElementById("stage").clientHeight;
        var num = 0;
        var rect = [];
        var control;
    
        var stage = new Konva.Stage({
            container: 'stage',
            width: width,
            height: height,
        });
    
        var layer = new Konva.Layer();
    
        var tr = new Konva.Transformer();
    
        stage.add(layer);
    
        stage.on("contextmenu", e => {e.evt.preventDefault()});
    
        btn.onclick = function(){
            num++;
            if(!rect[num - 1]){
                num--;
            };
            control = true;
            stage.on("click", function(e){
                console.log(tr);
                if(control == true){
                    if(e.evt.button == 0){
                        document.getElementById("debug").innerHTML = rect.toString() + num;
                        if(!rect[num]){
                            rect[num] = new Konva.Rect({
                                x: stage.getPointerPosition().x - document.getElementById("largura").value * 15 / 2,
                                y: stage.getPointerPosition().y - document.getElementById("altura").value * 15 / 2,
                                width: document.getElementById("largura").value * 15,
                                height: document.getElementById("altura").value * 15,
                                fill: document.getElementById("cor").value,
                                stroke: 'black',
                                strokeWidth: 0,
                                draggable: true,
                                name: num.toString(),
                            });
                            layer.add(rect[num]);
                            console.log(num, rect[num].name());
                        };
    
                        console.log(e.target.getClassName());
                        
                        if(!tr.getParent() && e.target.getClassName() == "Rect"){
                            tr.nodes([e.target]);
                            layer.add(tr);
                        };
    
                        if(tr.getParent() && e.target.getClassName() == "Stage"){
                            tr.remove();
                        };
                    };
                    if(e.evt.button == 2 && e.target.getClassName() == "Rect"){
                        e.target.setAttrs({
                            x: stage.getPointerPosition().x - document.getElementById("largura").value * 15 / 2,
                            y: stage.getPointerPosition().y - document.getElementById("altura").value * 15 / 2,
                            width: document.getElementById("largura").value * 15,
                            height: document.getElementById("altura").value * 15,
                            fill: document.getElementById("cor").value,
                        });
                    };
                };
            });
        };
    
        btnRemove.addEventListener("click", function(){
            for(let i = 0; i < rect.length; i++){
                rect[i].destroy();
            };
            rect = [];
            num = 0;
            control = false;
        });
    };
    
    return(
        <>
            <div className={styles.container}>
                <div className={styles.row1}>
                    <div className={styles.logo}></div>
                    <div className={styles.navbar}>
                        <Icon icon="fluent:arrow-hook-up-left-16-regular" height="3vh" />
                        <Icon icon="fluent:arrow-hook-up-left-16-regular" height="3vh" flip="horizontal" />
                        <span className={styles.separador}></span>
                        <input type="color" className={styles.cor} id="cor"/>
                        <Icon icon="carbon:color-palette" height="3vh" />
                        <Icon icon="akar-icons:sparkles" height="3vh" />
                        <Icon icon="carbon:download" height="3vh" />
                        <button className={styles.btnRemove} id="btnRemover"><Icon icon="clarity:trash-line" height="3vh" /></button>
                        <Icon icon="bi:three-dots-vertical" height="3vh" />
                    </div>
                    <button className={styles.visualizar}> Visualizar </button>
                    <button className={styles.publicar}> Publicar </button>
                </div>
                <div className={styles.row2}>
                    <div className={styles.col1}>
                        <div className={styles.retangulo}>
                            <Icon icon="carbon:overflow-menu-horizontal" />
                            <button className={styles.btn} id="btn"> Add </button><br/>
                            <label> 
                                Largura: 
                                <input type="range" className={styles.largura} min="0" max="10" id="largura" />
                            </label>
                            <label> 
                                Altura: 
                                <input type="range" className={styles.altura} min="0" max="10" id="altura"/>
                            </label>
                            <span className={styles.debug} id="debug"></span>
                        </div>
                    </div>
                    <div className={styles.col2}>
                        <div className={styles.stage} id="stage"></div>
                    </div>
                </div>
            </div>
        </>
    )
}