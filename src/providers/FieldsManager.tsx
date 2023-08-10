import React, { createContext, useEffect, Context, useContext, useCallback, useRef } from 'react';
import { KeyboardEventListener } from './KeyboardListener';
import { EventContext } from './EventListener';

type T_AddField = (field: string) => void
type T_DeleteField = (field: string) => void

type T_FieldsManagerContext = {
    addField: T_AddField,
    deleteField: T_DeleteField
}

type T_NullableFieldsManagerContext = {
    addField: T_AddField | null,
    deleteField: T_DeleteField | null
}


const FieldsManagerContext = createContext<T_NullableFieldsManagerContext>({ addField: null, deleteField: null }) as Context<T_FieldsManagerContext>;

const FieldsManagerProvider = ({ children }: { children: React.ReactNode }) => {

    const {subscribeKeyboardEvent, unsubscribeKeyboardEvent} = useContext(KeyboardEventListener);

    const { subscribeEventListener, unsubscribeEventListener } = useContext(EventContext);

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
        console.log('enter');
    }, []);

    const onFocus = useCallback(() => {
        console.log('focus');
    }, []);

    const onChange = useCallback(() => {
        console.log('change');
    }, []);

    useEffect(() => {
        console.log('Add listeners')
        subscribeKeyboardEvent('Enter', onKeyEnter);
      
        for (const field of fields.current) {
            const input = document.getElementsByName(field)[0] as HTMLInputElement;
            if (!input) console.error(`Field ${field} not found`);      
            
            subscribeEventListener({ event: 'focus', element: input, callback: onFocus });
            subscribeEventListener({ event: 'input', element: input, callback: onChange });
        }

        return () => {
            console.log('Remove listeners');
            unsubscribeKeyboardEvent('Enter', onKeyEnter);
            
            for (const field of fields.current) {
                const input = document.getElementsByName(field)[0] as HTMLInputElement;
                if (!input) console.error(`Field ${field} not found`);
                unsubscribeEventListener({ event: 'focus', element: input, callback: () => {
                    console.log('focus', input.value);
                    // sendCallback({ type: 'focus', data: input.value });
                }});
            }
        };
    }, [fields]);

    return (
        <FieldsManagerContext.Provider
            value={{ addField, deleteField }}
        >
          {children}
        </FieldsManagerContext.Provider>
    );

};

export { FieldsManagerContext, FieldsManagerProvider };