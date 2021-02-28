// import { hexToRgb } from "../app/utils/colorTreatment";
import { addReactangle } from "./nodes";
import { ControllerProps } from "./_types";

figma.showUI(__html__);

figma.ui.onmessage = ({ type, hex }: ControllerProps) => {
  if (type === "create-rectangles") {
    const nodes = [];

    nodes.push(addReactangle(hex));

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
