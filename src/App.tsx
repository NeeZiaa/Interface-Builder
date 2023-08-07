import './App.css';
import Interface from './components/containers/Interface';
import Field from './components/Field';
import Checkbox from './components/formsElements/Checkbox';
import Selector from './components/formsElements/Selector';
import TextField from './components/formsElements/TextField';
import './styles/app.scss'; // Importing scss file to use in the project

function App() {

  return (
      <Interface label={'Hello'}>
        <Field icon={'test'} label={'Hello'}>
          <TextField name={'email'} type={'email'}/>
        </Field>
        <Field icon={'test'} label={'Hello'}>
          <TextField name={'emailtest'} type={'email'}/>
        </Field>
        <Field icon={'test'} label={'Hello'}>
          <Selector name={'test1'} options={[{label: 'test', value: 'test', selected: false}, {label: 'test2', value: 'test2', selected: true}]}/>
        </Field>
        <Field icon={'test'} label={'Hello'}>
          <Checkbox name={'test2'} value={'test'}/>
        </Field>
      </Interface>
  )
}

export default App;