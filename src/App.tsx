import './App.css';
import Interface from './components/containers/Interface';
import Title from './components/display/Title';
import KeyboardListener from "./providers/KeyboardListener";

function App() {


  return (
    <KeyboardListener>
      <Interface label={'Hello'}>
        <Title>Hello</Title>
      </Interface>
    </KeyboardListener>
  )
}

export default App;