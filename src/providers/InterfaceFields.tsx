import React, { useState, createContext, useEffect, Context, useContext, useCallback, useRef } from 'react';
import { InputContext } from './KeyboardListener';
import sendCallback from '../utils/sendCallback';

type T_AddField = (field: string) => void
type T_DeleteField = (field: string) => void
type T_FieldsArray = string[]

type T_InterfaceFieldsContext = {
  addField: T_AddField,
  deleteField: T_DeleteField
}

type T_NullableInterfaceFieldsContext = {
  addField: T_AddField | null,
  deleteField: T_DeleteField | null
}

const InterfaceFieldsContext = createContext<T_NullableInterfaceFieldsContext>({ addField: null, deleteField: null }) as Context<T_InterfaceFieldsContext>;

const InterfaceContextProvider = ({ children }: { children: React.ReactNode }) => {

  const {subscribe, unsubscribe} = useContext(InputContext);

  // const [fields, setFields] = useState<T_FieldsArray>([]);
  const fields = useRef<string[]>([]);

  const addField: T_AddField = (field) => {
    // setFields((r) => {
    //   console.log('addField 2', r);
    //   if (r.includes(field)) return r;
    //   return [...r, field];
    // });
    if (fields.current.includes(field)) return;
    fields.current = [...fields.current, field];
  };

  const deleteField: T_DeleteField = (field) => {
    fields.current = fields.current.filter((e) => e !== field);
  };

  const onKeyEnter = useCallback(() => {
    // for (const field of fields.current) {
    //   // const input = field.getElementsByTagName(`input`)[0];
    //   if (input === document.activeElement) {
    //     console.log('submit', input.value);
    //     sendCallback({ type: 'submit', data: input.value })
    //   }
    // }
  }, [fields]);

  useEffect(() => {
    console.log('Add listeners')
    subscribe('Enter', onKeyEnter);
  
    for (const field of fields.current) {
      const input = document.getElementsByName(field)[0] as HTMLInputElement;
      if (!input) console.error(`Field ${field} not found`);      
      input?.addEventListener('focus', () => {
        console.log('focus', input.value);
        // sendCallback({ type: 'focus', data: input.value });
      });
      input?.addEventListener('input', () => {
        console.log('change', input.value);
        // sendCallback({ type: 'change', data: input.value });
      });
    }

    return () => {
      console.log('Remove listeners');
      unsubscribe('Enter', onKeyEnter);
      
      for (const field of fields.current) {
        const input = document.getElementsByName(field)[0] as HTMLInputElement;
        if (!input) console.error(`Field ${field} not found`);
          input?.removeEventListener('focus', () => {
            console.log('focus', input.value);
            // sendCallback({ type: 'focus', data: input.value });
          });
          input?.removeEventListener('input', () => {
            console.log('input', input.value);
            // sendCallback({ type: 'change', data: input.value });
          });
        }
      };
  }, [fields]);

  return (
    <InterfaceFieldsContext.Provider
      value={{ addField, deleteField }}
    >
      {children}
    </InterfaceFieldsContext.Provider>
  );

};

export { InterfaceFieldsContext, InterfaceContextProvider };
