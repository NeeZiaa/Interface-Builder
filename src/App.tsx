import './App.css';
import Category from './components/containers/Category';
import Header from './components/containers/Header';
import Interface from './components/containers/Interface';
import Field from './components/Field';
import Checkbox from './components/formsElements/Checkbox';
import Selector from './components/formsElements/Selector';
import TextField from './components/formsElements/TextField';
import './styles/index.scss'; // Importing scss file to use in the project

function App() {

  return (
      <Interface label={'Hello'}>
            <Header/>
            <Header/>
            <Header/>
            <Header/>
            <Header/>
            {/* <Category label={'Hello'}> */}
                <Field icon={'test'} label={'Hello'} id={1}>
                    <TextField name={'email'} type={'email'}/>
                </Field>
                <Field icon={'test'} label={'Hello'}>
                    <TextField name={'emailtest'} type={'email'}/>
                </Field>
            {/* </Category> */}
            {/* <Category label={'Test'}> */}
                <Field icon={'test'} label={'Hello'}>
                    <Selector name={'test1'} options={[{label: 'test', value: 'test', selected: false}, {label: 'test2', value: 'test2', selected: true}]}/>
                </Field>
                <Field icon={'test'} label={'Hello'}>
                    <Checkbox name={'test2'} value={'test'}/>
                </Field>
            {/* </Category> */}
      </Interface>
  )
}

export default App;