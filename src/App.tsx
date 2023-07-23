import './App.css';
import Title from './components/display/Title';
import Selector from './components/formsElements/Selector';
import Interface from './components/containers/Interface';
import { useCallback, useEffect } from 'react';
import { focusOut } from './utils/focus';

function App() {

  const onKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Enter" ) enterKey();
      if (e.key === "Escape") escapeKey();
      if (e.key === "ArrowUp") arrowUpKey();
    },
    []
  );

  useEffect(() => {
    window.addEventListener("keypress", onKeyPress);
    return () => window.removeEventListener("keypress", onKeyPress);
  }, [onKeyPress]);
  
  const enterKey = () => {
    console.log("Enter pressed");
  }

  const escapeKey = () => {
    console.log("Escape pressed")
    focusOut();
  }

  const arrowUpKey = () => {
    console.log("ArrowUp pressed");
  }


  const placeholderOptions = [
      { value: "1", label: "Option 1"},
      { value: "2", label: "Option 2" },
      { value: "3", label: "Option 3" },
      { value: "4", label: "Option 4", selected: true },
  ];



  return (
    <Interface label="Interface" width="50%" height="50%">
      <Title>Selector</Title>
      <Selector name="selector" options={placeholderOptions} />
      <Title>Selected : </Title>
    </Interface>
  )
}

export default App;