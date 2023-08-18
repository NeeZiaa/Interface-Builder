import './App.css';
import Category from './components/containers/Category';
import Header from './components/containers/Header';
import Interface from './components/containers/Interface';
import Field from './components/Field';
import Checkbox from './components/formsElements/Checkbox';
import Colorpicker from './components/formsElements/Colorpicker';
import Range from './components/formsElements/Range';
import Selector from './components/formsElements/Selector';
import TextField from './components/formsElements/TextField';
import './styles/index.scss'; // Importing scss file to use in the project

function App() {

  return (
      <Interface>
            <Header/>
            <Header/>
            <Header/>
            <Header/>
            <Header/>
            <Header/>
            <Category label={'Hello'}>
                <Field icon={'test'} label={'Hello1'}>
                    <TextField name={'email'} type={'email'}/>
                </Field>
                <Field icon={'test'} label={'Hello2'}>
                    <TextField name={'emailtest'} type={'email'}/>
                </Field>
            </Category>
            <Category label={'Test'}>
                <Field icon={'test'} label={'Hello3'}>
                    <Selector name={'test1'} options={[{label: 'test', value: 'test', selected: false}, {label: 'test2', value: 'test2', selected: true}]}/>
                </Field>
                <Field icon={'test'} label={'Hello4'}>
                    <Checkbox name={'test2'} value={'test'}/>
                </Field>
                <Field icon={'test'} label={'Hello5'}>
                    <Colorpicker name={'test3'} defaultColor={'#000000'}/>
                </Field>
                <Field icon={'test'} label={'Hello6'}>
                    <Range name={'test4'} min={0} max={100} step={1} defaultValue={50}/>
                </Field>
            </Category>
      </Interface>
  )
}

export default App;