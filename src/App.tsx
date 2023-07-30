import './App.css';
import Interface from './components/containers/Interface';
import Title from './components/display/Title';
import Button from './components/formsElements/Button';
import Field from './components/formsElements/Field';
import PasswordField from './components/formsElements/PasswordField';
import TextField from './components/formsElements/TextField';

function App() {

  return (
      <Interface label={'Hello'}>
        <Field icon={'test'} label={'Hello'}>
          <TextField name={'email'} type={'email'}></TextField>
        </Field>
          {/* <PasswordField name={'passwordfield'}></PasswordField>
          <Button label={'Just a test button'}/>
          <Title>Hello</Title> */}
      </Interface>
  )
}

export default App;