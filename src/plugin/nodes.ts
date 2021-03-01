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

export async function addTitle({ text, position }: TextProps) {
  const font = figma.createText();

  await figma.loadFontAsync({
    family: "Poppins",
    style: "Bold",
  });

  font.fontName = {
    family: "Poppins",
    style: "Bold",
  };
  font.textAlignHorizontal = "LEFT";
  font.fontSize = 24;
  font.characters = text;
  font.y = position.y + position.height + 32;
  font.x = position.x + 32;

  figma.currentPage.appendChild(font);
}

export async function addSubtitle({ text, position }: TextProps) {
  const font = figma.createText();

  await figma.loadFontAsync({
    family: "Poppins",
    style: "Regular",
  });

  font.fontName = {
    family: "Poppins",
    style: "Regular",
  };
  font.textAlignHorizontal = "LEFT";
  font.fontSize = 19;
  font.characters = text;
  font.y = position.y + position.height + 68 + 8;
  font.x = position.x + 32;

  figma.currentPage.appendChild(font);
}
