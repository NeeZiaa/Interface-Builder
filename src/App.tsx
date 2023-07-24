import './App.css';
import Title from './components/display/Title';
import { useCallback, useContext, useEffect } from "react";
import KeyboardListener, { InputContext } from "./KeyboardListener";

function App() {

  const { subscribe, unsubscribe } = useContext(InputContext);
  const maReaction = useCallback((key: string) => { 
    console.log(key); 
    key === "a" && console.log("react !") 
  }, []);

  useEffect(() => {
    console.log("useEffect")
    console.log(subscribe, unsubscribe);
    subscribe && subscribe(maReaction);

    return () => {
      unsubscribe && unsubscribe(maReaction);
    };
  }, [subscribe, unsubscribe, maReaction]);
;

  return (
    <>
      <KeyboardListener>
        <Title>Hello</Title>
        <Title>Test</Title>
        <Title>Test2</Title>
      </KeyboardListener>
    </>
  )
}

export default App;