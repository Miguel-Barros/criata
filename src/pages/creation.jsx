import Head from "next/head";
import Link from "next/link";
import * as PIXI from "pixi.js";
import { Icon } from "@iconify/react";
import { useState, useEffect, useLayoutEffect, createContext } from "react";
import { withProtected } from "../hook/route";
import styles from "../styles/Creation.module.css";
import { ShowTool } from "../component/showTool";

export const CreationContext = createContext();

function Creation({ auth }) {
  // Gerar ferramentas

  const [elementSelected, setElementSelected] = useState(null);

  const topTools = [
    "nav-arrow-left",
    "nav-arrow-right",
    "precision-tool",
    "star-outline",
    "download",
    "trash",
    "erase",
    "divide-selection-2",
    "more-vert",
  ];

  const sideTools = [
    "more-horiz",
    "text-size",
    "frame-simple",
    "media-image",
    "bounce-right",
    "intersect",
    "cloud-upload",
    "up-round-arrow",
    "question-mark-circle",
  ];

  const sideToolsText = [
    "Mais ações",
    "Texto",
    "Elementos",
    "Imagens",
    "Animações",
    "Fundo",
    "Importar",
    "Botões",
    "Ajuda",
  ];

  const [toolShowing, setToolShowing] = useState("text-size");
  const [app, setApp] = useState(null);
  const [container, setContainer] = useState(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setContainer(document.getElementById("Stage"));
      setContainerWidth(document.getElementById("Stage").offsetWidth);
      setContainerHeight(document.getElementById("Stage").offsetHeight);
      clearInterval(timer);
    }, 0);
  }, []);

  useEffect(() => {
    if (container) {
      if (!app) {
        const app = new PIXI.Application({
          width: containerWidth,
          height: containerHeight,
          backgroundAlpha: "0",
          resolution: window.devicePixelRatio || 1,
        });
        setApp(app);
        container.appendChild(app.view);
      }
    }
  }, [container]);

  // Funções de criação de elementos

  let elements = [];

  function handleTopClick(e) {
    if (e === "trash" && elementSelected) { // Deletar elemento
      app.stage.children.forEach((child) => {
        if (child.name === elementSelected.name) {
          app.stage.removeChild(child);
          setElementSelected(null);
        }
      });
    }
  }

  let selectedElement = null;

  const selectElement = (element) => {
    if (selectedElement && selectedElement != element) {
      selectedElement.alpha = 1;
      selectedElement.interactive = false;
      selectedElement.buttonMode = false;
      selectedElement = null;
      setElementSelected(null);
    }
    if (selectedElement == element) {
      selectedElement.alpha = 1;
      selectedElement.interactive = false;
      selectedElement.buttonMode = false;
      selectedElement = null;
      setElementSelected(null);
    } else {
      selectedElement = element;
      setElementSelected(selectedElement);
      selectedElement.alpha = 0.5;
      selectedElement.interactive = true;
      selectedElement.buttonMode = true;
      selectedElement.cursor = "move";
    }
  };

  const onMove = (container, element) => {
    if (!element.grabbing) {
      if (element == selectedElement) {
        element.grabbing = true;
        element.on("mousedown", () => {
          element.on("mousemove", () => {
            element.cursor = "move";
            element.alpha = 0.5;
            element.position = {
              x: container.data.global.x - element.width / 2,
              y: container.data.global.y - element.height / 2,
            };
          });
        });
      }
    } else {
      element.grabbing = false;
      element.off("mousemove");
      element.cursor = "default";
      element.alpha = 1;
    }
  };

  useLayoutEffect(() => {
    if (app) {
      const stage = app.stage;
      app.view.addEventListener("mousedown", () => {

        if (selectedElement) { // se clicar fora do elemento, deselecionar
          selectedElement.alpha = 1;
          selectedElement.interactive = false;
          selectedElement.buttonMode = false;
          selectedElement = null;
          setElementSelected(null);
        }

        // verifica o click dentro do view
        stage.interactive = true;
        let locked = false;

        // verifica se o click foi dentro de algum elemento
        stage.children.forEach((child) => {
          if (locked) return null;
          child.interactive = true;
          child.on("pointerup", (e) => {
            selectElement(child);
            onMove(e, child);
            locked = true;
          });
        });
      });
    }
  }, [app]);

  return (
    <CreationContext.Provider value={{ app, elements, elementSelected }}>
      <div className={styles.container}>
        <Head>
          <title>Criata - Criação</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className={styles.header}>
          <Link href="/">
            <div className={styles.left}>
              <img src="../assets/components/criata_logo.svg" alt="logo" />
              <h2>Criata</h2>
            </div>
          </Link>
          <div className={styles.right}>
            <span className={styles.shortcuts}>
              {topTools.map((e) => {
                return (
                  <Icon
                    key={e}
                    icon={`iconoir:${e}`}
                    className={styles.icon}
                    id={e}
                    onClick={() => handleTopClick(e)}
                  />
                );
              })}
            </span>
            <span className={styles.actions}>
              <button>Publicar</button>
              <button>Visualizar</button>
            </span>
          </div>
        </header>
        <main className={styles.main}>
          <img
            className={styles.background}
            src="./assets/images/creation/background.svg"
            alt="background"
          />
          <div className={styles.side_bar}>
            <div className={styles.tools_header}>
              {sideTools.map((e, index) => {
                return (
                  <span key={e} onClick={() => setToolShowing(e)}>
                    <Icon icon={`iconoir:${e}`} className={styles.tool} />
                    <p>{sideToolsText[index]}</p>
                  </span>
                );
              })}
            </div>
            <div className={styles.box}>
              <ShowTool showing={toolShowing} app={app} elements={elements} />
            </div>
          </div>
          <div className={styles.content} id={"Stage"}></div>
        </main>
      </div>
    </CreationContext.Provider>
  );
}

export default withProtected(Creation);
