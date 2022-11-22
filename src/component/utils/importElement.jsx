import styles from "../styles/ShowTool.module.css";
import { useState, useContext, useEffect, useLayoutEffect } from "react";
import { CreationContext } from "../../pages/creation";
import * as PIXI from "pixi.js";

export default function ImportElement() {

    const [file, setFile] = useState(null);
    const [imports, setImports] = useState([]);

    return (
        <>
            <div className={styles.tool_content}>
                <p>Ao importar uma imagem, ela aparecerá aqui!</p>
                <div className={styles.tool_content_group} id="tool_content_group" >
                    <input type="file" id="file" className={styles.file} onChange={(e) => {
                        setFile(e.target.files[0])
                        setImports([...imports, file])
                    }} />
                    {imports.map((e, i) => {
                        return (
                            <div className={styles.importObject} key={i}>
                                <img src={URL.createObjectURL(
                                    (e != null ? e : file)
                                )} alt="imported-element" />
                            </div>
                        )
                    })}
                    {/* <div className={styles.importObject}></div> */}
                </div>
                <button className={styles.btn} id="btn" onClick={() =>
                    document.querySelector("#file").click()
                }>Adicionar Arquivos</button>
            </div>
        </>
    )
}
