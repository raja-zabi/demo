/* common.jsx */
import React from "react";
//We Import icon components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//Different types of fontawesome icons 
import {
  faBold,
  faUnderline,
  faItalic,
  faAnchor
} from "@fortawesome/free-solid-svg-icons";

/*Array of object each object has a label to identify the current style, standard Draftjs style to be applied and an optional icon to use when rendering the current style under the toolbar */
const inlineStyles = [
  {
    label: "bold",
    style: "BOLD",
    icon: <FontAwesomeIcon icon={faBold} />
  },
  {
    label: "italic",
    style: "ITALIC",
    icon: <FontAwesomeIcon icon={faItalic} />
  },
  {
    label: "Underline",
    style: "UNDERLINE",
    icon: <FontAwesomeIcon icon={faUnderline} />
  }
];

export { inlineStyles };