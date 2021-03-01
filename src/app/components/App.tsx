import * as React from "react";
import { useCallback, useRef, useEffect } from "react";
// import "../styles/ui.css";
import { Container, PrimaryButton, Button, Textfield } from "../styles/index";

declare function require(path: string): any;

const App = ({}) => {
  const titleTextbox = useRef<HTMLInputElement>(undefined);
  const subtitleTextbox = useRef<HTMLInputElement>(undefined);
  const colorTextbox = useRef<HTMLInputElement>(undefined);

  const textRef = useCallback((element: HTMLInputElement) => {
    if (element) element.value = "Primary";
    titleTextbox.current = element;
  }, []);

  const subtitleRef = useCallback((element: HTMLInputElement) => {
    if (element) element.value = "This is a description";
    subtitleTextbox.current = element;
  }, []);

  const colorRef = useCallback((element: HTMLInputElement) => {
    if (element) colorTextbox.current = element;
  }, []);

  const onCreate = useCallback(() => {
    const title = String(titleTextbox.current.value);
    const description = String(subtitleTextbox.current.value);
    const color = String(colorTextbox.current.value);
    parent.postMessage(
      {
        pluginMessage: {
          type: "create-card",
          hex: color,
          title: title,
          description,
        },
      },
      "*"
    );
  }, []);

  const onCancel = useCallback(() => {
    parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
  }, []);

  useEffect(() => {
    // This is how we read messages sent from the plugin controller
    window.onmessage = (event) => {
      const { type, message } = event.data.pluginMessage;
      if (type === "create-rectangles") {
        console.log(`Figma Says: ${message}`);
      }
    };
  }, []);

  return (
    <Container>
      <h2>Pick a Color</h2>
      <p>
        Title: <Textfield ref={textRef} />
      </p>
      <p>
        Descrição: <Textfield ref={subtitleRef} />
      </p>
      <p>
        Color: <Textfield type="color" ref={colorRef} />
      </p>
      <PrimaryButton onClick={onCreate}>Create</PrimaryButton>
      <Button onClick={onCancel}>Cancel</Button>
    </Container>
  );
};

export default App;
