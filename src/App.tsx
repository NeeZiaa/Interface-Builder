import './App.css';
import Interface from './components/containers/Interface';
import Field from './components/formsElements/Field';
import TextField from './components/formsElements/TextField';
import './styles/app.scss'; // Importing scss file to use in the project

import React, { useState } from 'react';

interface MenuItemProps {
  label: string;
  onClick: () => void;
}

const MenuItem = ({ label, onClick }: MenuItemProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLLIElement>) => {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      event.preventDefault();
      setIsFocused(!isFocused);
    } else if (event.key === 'Enter') {
      onClick();
    }
  };

  return (
    <li
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      style={{ backgroundColor: isFocused ? 'lightgray' : 'white' }}
    >
      {label}
    </li>
  );
};

interface MenuProps {
  items: MenuItemProps[];
}

const Menu = ({ items }: MenuProps) => {
  const [focusedIndex, setFocusedIndex] = useState(0);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLUListElement>) => {
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setFocusedIndex((focusedIndex - 1) % items.length);
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      setFocusedIndex((focusedIndex + 1) % items.length);
    }
  };

  return (
    <ul onKeyDown={handleKeyDown}>
      {items.map((item, index) => (
        <MenuItem
          key={index}
          label={item.label}
          onClick={item.onClick}
          isFocused={index === focusedIndex}
        />
      ))}
    </ul>
  );
};

const items: MenuItemProps[] = [
  { label: 'Item 1', onClick: () => console.log('Item 1 clicked') },
  { label: 'Item 2', onClick: () => console.log('Item 2 clicked') },
  { label: 'Item 3', onClick: () => console.log('Item 3 clicked') },
];


function App() {

  return (
      <Interface label={'Hello'}>
        <Field icon={'test'} label={'Hello'} id={1}>
          <TextField name={'email'} type={'email'}></TextField>
        </Field>
        <Field icon={'test'} label={'Hello'} id={2}>
          <TextField name={'email'} type={'email'}></TextField>
        </Field>
      </Interface>
    // <div>
    //   <h1>Menu Example</h1>
    //   <Menu items={items} />
    // </div>
  )
}

export default App;