import React from 'react'
import styles from "../styles/ShowTool.module.css";

export default function MoreOptions() {
    return (
        <>
            <div className={styles.tool_content}>
                <h2>Mais ações</h2>
                <div className={styles.tool_content_group}>
                    <p>Tabelas</p>
                    <div className={styles.content_div}></div>
                    <div className={styles.content_div}></div>
                    <p>Graficos</p>
                    <div className={styles.content_div}></div>
                    <div className={styles.content_div}></div>
                </div>
            </div>
        </>
    )
}
