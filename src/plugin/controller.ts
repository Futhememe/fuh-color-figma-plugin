import { hexToRgb } from "../app/utils/colorTreatment";

figma.showUI(__html__);

figma.ui.onmessage = (msg) => {
  if (msg.type === "create-rectangles") {
    const nodes = [];

    const rect = figma.createRectangle();
    rect.resize(397, 220);
    rect.cornerRadius = 32;
    // rect.x = i * 150;
    rect.fills = [{ type: "SOLID", color: hexToRgb(msg.rgb) }];
    figma.currentPage.appendChild(rect);
    nodes.push(rect);

    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);

    // This is how figma responds back to the ui
    figma.ui.postMessage({
      type: "create-rectangles",
      message: `Created ${msg.count} Rectangles`,
    });
  }

  // figma.closePlugin();
};
