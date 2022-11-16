import styles from "./styles/ShowTool.module.css";
import { Icon } from "@iconify/react";

import FontStyle from "./utils/fontStyle";
import CreateElements from "./utils/createElements";

function ShowTool({ showing, elements }) {

  if (showing == "more-horiz") {
    return <>a</>;
  }

  if (showing == "text-size") {
    return <FontStyle />
  }

  if (showing == "frame-simple") {
    return <CreateElements />
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
