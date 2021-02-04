import * as React from "react";
import { useCallback, useRef, useEffect } from "react";
// import "../styles/ui.css";
import { Container, PrimaryButton, Button, Textfield } from "../styles/index";

declare function require(path: string): any;

const App = ({}) => {
  const textbox = useRef<HTMLInputElement>(Textfield);

  const countRef = useCallback((element: HTMLInputElement) => {
    if (element) element.value = "5";
    textbox.current = element;
  }, []);

  const onCreate = useCallback(() => {
    const count = parseInt(textbox.current.value, 10);
    parent.postMessage(
      { pluginMessage: { type: "create-rectangles", count } },
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
        Count: <input ref={countRef} />
      </p>
      <PrimaryButton onClick={onCreate}>Create</PrimaryButton>
      <Button onClick={onCancel}>Cancel</Button>
    </Container>
  );
};

export default App;
