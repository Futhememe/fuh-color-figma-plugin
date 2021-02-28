export interface ControllerProps {
  type: string;
  hex: string | number;
}

export interface TextProps {
  type?: "title" | "subtitle";
  text?: string;
  position?: any;
}
