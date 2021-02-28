import { hexToRgb } from "../app/utils/colorTreatment";

export function addReactangle(hex: string | number) {
  const rect = figma.createRectangle();
  rect.resize(397, 220);
  rect.cornerRadius = 32;
  // rect.x = i * 150;
  rect.fills = [{ type: "SOLID", color: hexToRgb(hex) }];
  figma.currentPage.appendChild(rect);

  return rect;
}
