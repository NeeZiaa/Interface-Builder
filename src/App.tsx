import { createContext, useEffect, useState } from 'react'

import './App.css'
import Select from './components/formsElements/Selector';
import Field from './components/Field';

function App() {

  const ThemeContext = createContext("light");

  const [selected, setSelected] = useState(false);

  useEffect(() => { 
    console.log("Selected item : ", selected);
  }, [selected]);

  const placeholderOptions = [
      { value: "1", label: "Option 1" },
      { value: "2", label: "Option 2" },
      { value: "3", label: "Option 3" },
      { value: "4", label: "Option 4" },
  ]

  return (

    <Field label="Select">
      <Select options={placeholderOptions}></Select>
    </Field>
  )
}

export default App
