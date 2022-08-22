import Head from 'next/head';
import styles from './styles/Canvas.module.css';
//import { Stage, Layer, Rect, Circle } from 'react-konva';
import Konva from 'konva';

export default function Canvas() {
    function add(){
        var width = document.getElementById("stage").clientWidth;
        var height = document.getElementById("stage").clientHeight;
        var cor = document.getElementById("cor").value;
        var largura = document.getElementById("largura").value * 15;
        var altura = document.getElementById("altura").value * 15;

        var stage = new Konva.Stage({
            container: '#stage',
            width: width,
            height: height
        });
    
        var layer = new Konva.Layer();

        stage.on('click', function(){
            var pointerPos = stage.getPointerPosition();
            var rect1 = new Konva.Rect({
                x: pointerPos.x - largura/2,
                y: pointerPos.y - altura/2,
                width: largura,
                height: altura,
                fill: cor,
                stroke: 'black',
                strokeWidth: 4,
                draggable: true,
            });
            layer.add(rect1);
            var tr = new Konva.Transformer({
                nodes: [rect1]
            });
            layer.add(tr);
        });

        stage.add(layer);
    }
    
    return(
        <div className={styles.container}>
        <Head>
            <meta charSet='UTF-8' />
            <title> Criação </title>
        </Head>
        <div className={styles.col1}>
            <button onClick={add}> Add </button><br />
            <label for="cor"> Cor </label><br />
            <input type="color" id="cor"></input><br />
            <label for="largura"> Largura </label>
            <input type="range" id="largura" min="0" max="10"></input>
            <label for="altura"> Altura </label>
            <input type="range" id="altura" min="0" max="10"></input>
        </div>
        <div className={styles.col2}>
            <div className={styles.stage} id="stage">
            </div>
        </div>
        </div>
    )
}