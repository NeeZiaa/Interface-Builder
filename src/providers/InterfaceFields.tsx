import React, { useState, createContext } from 'react';

type T_UpdateField = (field: string, value: string) => void
type T_DeleteField = (field: string) => void

const FormulaireContexte = createContext({});

const InterfaceContextProvider = ({ children }) => {
  const [interfaceFields, setInterfaceFields] = useState({});

  const updateField: T_UpdateField = (field, value) => {
    setInterfaceFields((r) => {
        return {
            ...r,
            [field]: value
        }
    })
  };

  const deleteField: T_DeleteField = (field) => {
    setInterfaceFields((r) => {
        delete r[field];
        return r;
    })
  };

  return (
    <FormulaireContexte.Provider
      value={{ interfaceFields, updateField, deleteField }}
    >
      {children}
    </FormulaireContexte.Provider>
  );

};

export { FormulaireContexte, InterfaceContextProvider };