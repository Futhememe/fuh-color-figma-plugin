import { hexToRgb } from "../app/utils/colorTreatment";
import { ControllerProps } from "./_types";

figma.showUI(__html__);

figma.ui.onmessage = ({ type, hex }: ControllerProps) => {
  if (type === "create-rectangles") {
    const nodes = [];

    const rect = figma.createRectangle();
    rect.resize(397, 220);
    rect.cornerRadius = 32;
    // rect.x = i * 150;
    rect.fills = [{ type: "SOLID", color: hexToRgb(hex) }];
    figma.currentPage.appendChild(rect);
    nodes.push(rect);

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
