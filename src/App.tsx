import './App.css';
import Form from './components/containers/Form';
import Interface from './components/containers/Interface';
import Title from './components/display/Title';
import Button from './components/formsElements/Button';
import PasswordField from './components/formsElements/PasswordField';
import TextField from './components/formsElements/TextField';
import KeyboardListener from "./providers/KeyboardListener";

function App() {

  return (
    <KeyboardListener>
      <Interface label={'Hello'}>
        <Form title={'Hello'}>
          <TextField name={'text'} type={'text'}/>
          <PasswordField name={'passwordfield'}></PasswordField>
          <Button label={'Just a test button'}/>
        </Form>
        <Title>Hello</Title>
      </Interface>
    </KeyboardListener>
  )
}

export default App;