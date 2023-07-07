import { createContext, useEffect, useState } from 'react'

import './App.css'
import Select from './components/formsElements/Selector';
import Field from './components/Field';
import { T_ItemProps } from './types/components/containers/ItemTypes';

function App() {


  const [selected, setSelected] = useState("");

  const placeholderOptions = [
      { value: "1", label: "Option 1", default: true },
      { value: "2", label: "Option 2" },
      { value: "3", label: "Option 3" },
      { value: "4", label: "Option 4" },
  ]

  const Item: T_ItemProps = {
    title: "Item title",
    children: "Item content",
    onHover: () => { console.log("Hovered") },
    onClick: () => { console.log("Clicked") },
  }

  console.log("Item : ", Item);

  return (

    <Field label="Selector field">
      <Select options={placeholderOptions} setSelected={setSelected}/>
    </Field>
  )
}

export default App