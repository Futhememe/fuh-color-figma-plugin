// import { hexToRgb } from "../app/utils/colorTreatment";
import { addReactangle, addTitle, addSubtitle } from "./nodes";
import { ControllerProps } from "./_types";

figma.showUI(__html__);

figma.ui.resize(500, 300);

figma.ui.onmessage = ({ type, hex, title, description }: ControllerProps) => {
  if (type === "create-card") {
    const nodes = [];

    const color = addReactangle(hex);

    const textTitle = addTitle({
      position: {
        y: color.y,
        x: color.x,
        height: color.height,
      },
      text: title,
    });

    const subtitle = addSubtitle({
      position: {
        y: color.y,
        x: color.x,
        height: color.height,
      },
      text: description,
    });

    nodes.push(color, textTitle, subtitle);

    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);

    // This is how figma responds back to the ui
    figma.ui.postMessage({
      type: "create-rectangles",
      message: `Created 1 Rectangle`,
    });
  }

  // figma.closePlugin();
};
