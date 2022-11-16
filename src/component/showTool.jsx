import { useEffect, useState, useContext } from "react";
import styles from "./styles/ShowTool.module.css";
import * as PIXI from "pixi.js";
import { Icon } from "@iconify/react";
import { CreationContext } from "../pages/creation";

function ShowTool({ showing, elements }) {

  const { app, elementSelected } = useContext(CreationContext);

  if (showing == "more-horiz") {
    return <>a</>;
  }

  if (showing == "text-size") {

    const [fontRange, setFontRange] = useState(18);

    function handleEditFontStyle(tool) {
      if (!elementSelected) return null;

      if (tool.id === "text-font-selector") {   // change font family
        elementSelected.style.fontFamily = tool.value;
      }

      if (tool.id === "text-font-size") {  // change font size
        elementSelected.style.fontSize = tool.value + "px";
      }

      if (tool.id === "text-font-color") {  // change font color
        return elementSelected.style.fill = tool.value;
      }

      if (tool.id === "text-font-bold") {  // change font bold
        tool.classList.toggle(styles.active);
        if (tool.classList.contains(styles.active)) {
          elementSelected.style.fontWeight = "bold";
        } else {
          elementSelected.style.fontWeight = "normal";
        }
      }

      if (tool.id === "text-font-italic") {  // change font italic
        tool.classList.toggle(styles.active);
        if (tool.classList.contains(styles.active)) {
          elementSelected.style.fontStyle = "italic";
        } else {
          elementSelected.style.fontStyle = "normal";
        }
      }

      if (tool.id === "text-font-underline") {  // change font underline
        tool.classList.toggle(styles.active);
        if (tool.classList.contains(styles.active)) {
          elementSelected.style.textDecoration = "underline";
        } else {
          elementSelected.style.textDecoration = "none";
        }
      }
    }


    function createText(props) {
      const elementText = new PIXI.Text(props.text, {
        ...props.customStyle,
      });
      app.stage.addChild(elementText);
      elements = [...elements, elementText];
    }

    return (
      <>
        <div className={styles.tool_nav}>
          <p>Design</p>
          <p>Modelos</p>
        </div>
        <div className={styles.tool_content}>
          <h2>Fontes</h2>
          <select name="text-font" id="text-font-selector" onChange={(e) => handleEditFontStyle(e.target)}>
            <option value="Roboto">Mulish</option>
            <option value="Arial">Arial</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Verdana">Verdana</option>
          </select>
          <h2>Tamanho</h2>
          <input
            type="range"
            name="text-size"
            id="text-font-size"
            min="10"
            max="100"
            onChange={(e) => {
              setFontRange(e.target.value)
              handleEditFontStyle(e.target)
            }}
          />
          <p>{fontRange}px</p>
          <h2>Estilos</h2>
          <div className={styles.fontStyle}>
            <Icon
              icon="carbon:text-bold"
              className={styles.icon}
              onClick={(e) => handleEditFontStyle(e.target)}
              id="text-font-bold"
            />
            <Icon
              icon="carbon:text-italic"
              className={styles.icon}
              onClick={(e) => handleEditFontStyle(e.target)}
              id="text-font-italic"
            />
            <input
              type="color"
              id="text-font-color"
              className={styles.icon}
              onClick={(e) => handleEditFontStyle(e.target)}
            />
            <Icon
              icon="carbon:text-underline"
              className={styles.icon}
              onClick={(e) => handleEditFontStyle(e.target)}
              id="text-font-underline"
            />
            <Icon
              icon="fluent:highlight-16-regular"
              className={styles.icon}
              onClick={(e) => handleEditFontStyle(e.target)}
              id="text-font-highlight"
            />
          </div>
          <div className={styles.fontAlign}>
            <span>
              <Icon
                icon="akar-icons:text-align-left"
                className={styles.icon}
                onClick={(e) => handleEditFontStyle(e.target)}
                id="text-font-align-left"
              />
              <Icon
                icon="akar-icons:text-align-center"
                className={styles.icon}
                onClick={(e) => handleEditFontStyle(e.target)}
                id="text-font-align-center"
              />
              <Icon
                icon="akar-icons:text-align-right"
                className={styles.icon}
                onClick={(e) => handleEditFontStyle(e.target)}
                id="text-font-align-right"
              />
              <Icon
                icon="akar-icons:text-align-justified"
                className={styles.icon}
                onClick={(e) => handleEditFontStyle(e.target)}
                id="text-font-align-justified"
              />
            </span>
            <span>
              <Icon
                icon="gg:arrow-align-h"
                className={styles.icon}
                onClick={(e) => handleEditFontStyle(e.target)}
                id="text-font-align-h"
              />
              <Icon
                icon="akar-icons:align-to-bottom"
                className={styles.icon}
                onClick={(e) => handleEditFontStyle(e.target)}
                id="text-font-align-bottom"
              />
              <Icon
                icon="akar-icons:align-to-middle"
                className={styles.icon}
                onClick={(e) => handleEditFontStyle(e.target)}
                id="text-font-align-middle"
              />
              <Icon
                icon="akar-icons:align-to-top"
                className={styles.icon}
                onClick={(e) => handleEditFontStyle(e.target)}
                id="text-font-align-top"
              />
            </span>
          </div>
        </div>
        <button
          onClick={() =>
            createText({
              text: "Algum texto",
              customStyle: {
                fontFamily: "Mulish",
                fontSize: 36,
                fontWeight: "normal",
                fill: "black",
                align: "center",
                interactive: true,
              },
            })
          }
        >
          add text
        </button>
        < button onClick={() => console.log(elementSelected)}>Check</button>
      </>
    );
  }

  if (showing == "frame-simple") {
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
  if (showing == "media-image") {
    return <>d</>;
  }
  if (showing == "bounce-right") {
    return <>e</>;
  }
  if (showing == "intersect") {
    return <>f</>;
  }
  if (showing == "cloud-upload") {
    return <>g</>;
  }
  if (showing == "up-round-arrow") {
    return <>h</>;
  }
  if (showing == "question-mark-circle") {
    return <>i</>;
  }
}

export { ShowTool };
