import { createContext, useEffect, useState } from 'react'

import './App.css'
import Select from './components/formsElements/Selector';
import Field from './components/Field';

function App() {

  const ThemeContext = createContext("light");

  const [selected, setSelected] = useState("");

  useEffect(() => { 
    console.log("Selected item : ", selected);
  }, [selected]);

  const placeholderOptions = [
      { value: "1", label: "Option 1", default: true },
      { value: "2", label: "Option 2" },
      { value: "3", label: "Option 3" },
      { value: "4", label: "Option 4" },
  ]

  return (

    <Field label="Selector field">
      <Select options={placeholderOptions} setSelected={setSelected}/>
    </Field>
  )
}

export default App