import { hexToRgb } from "../app/utils/colorTreatment";
import { TextProps } from "./_types";

export function addReactangle(hex: string | number) {
  const rect = figma.createRectangle();
  rect.resize(397, 220);
  rect.cornerRadius = 32;
  // rect.x = i * 150;
  rect.fills = [{ type: "SOLID", color: hexToRgb(hex) }];
  figma.currentPage.appendChild(rect);

  return rect;
}

export function addText({ type, text, position }: TextProps) {
  const font = figma.createText();

  font.textAlignHorizontal = "LEFT";
  font.fontName = {
    family: "Poppins",
    style: type === "title" ? "Bold" : "Regular",
  };
  font.fontSize = type === "title" ? 24 : 19;
  font.characters = text;
  font.y = position + 16;
}
