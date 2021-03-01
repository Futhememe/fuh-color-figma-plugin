export interface ControllerProps {
  type: string;
  hex: string | number;
  title: string;
  description: string;
}

export interface TextProps {
  text?: string;
  position?: {
    y: number;
    x: number;
    height?: number;
  };
}
