import * as React from "react";
import { useCallback, useRef, useEffect } from "react";
// import "../styles/ui.css";
import { Container, PrimaryButton, Button, Textfield } from "../styles/index";

declare function require(path: string): any;

const App = ({}) => {
  // const countTextbox = useRef<HTMLInputElement>(undefined);
  const colorTextbox = useRef<HTMLInputElement>(undefined);

  // const countRef = useCallback((element: HTMLInputElement) => {
  //   if (element) element.value = "1";
  //   countTextbox.current = element;
  // }, []);

  const colorRef = useCallback((element: HTMLInputElement) => {
    if (element) colorTextbox.current = element;
  }, []);

  const onCreate = useCallback(() => {
    // const count = parseInt(countTextbox.current.value, 10);
    const color = String(colorTextbox.current.value);
    parent.postMessage(
      { pluginMessage: { type: "create-card", hex: color } },
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
      {/* <p>
        Count: <Textfield ref={countRef} />
      </p> */}
      <p>
        Color: <Textfield type="color" ref={colorRef} />
      </p>
      <PrimaryButton onClick={onCreate}>Create</PrimaryButton>
      <Button onClick={onCancel}>Cancel</Button>
    </Container>
  );
};

export default App;
