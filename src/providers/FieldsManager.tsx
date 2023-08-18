import React, { createContext, useEffect, Context, useContext, useCallback, useRef, useState, Children, isValidElement } from 'react';
import { KeyboardEventListener } from './KeyboardListener';
import { EventContext } from './EventListener';
import { filterRecursive } from '../utils/countChildren';

type T_AddField = (field: string) => void
type T_DeleteField = (field: string) => void

type T_FieldsManagerContext = {
    count: React.MutableRefObject<number>,
    addField: T_AddField,
    deleteField: T_DeleteField
}

type T_NullableFieldsManagerContext = {
    count: React.MutableRefObject<number> | null,
    addField: T_AddField | null,
    deleteField: T_DeleteField | null
}

const FieldsManagerContext = createContext<T_NullableFieldsManagerContext>({ count: null, addField: null, deleteField: null }) as Context<T_FieldsManagerContext>;

const FieldsManagerProvider = ({ children }: { children: React.ReactNode }) => {

    const {subscribeKeyboardEvent, unsubscribeKeyboardEvent} = useContext(KeyboardEventListener);

    const { subscribeEventListener, unsubscribeEventListener } = useContext(EventContext);

    const fields = useRef<string[]>([]);

    const [focusedItem, setFocusedItem] = useState(0);

    const childrenCount = filterRecursive(children, (child) => isValidElement(child) && typeof child.type !== 'string' && child.type.name === 'Field').length;

    const onKeyArrowUp = useCallback(() => {
        setFocusedItem((prev) => {
            if(prev - 1 === 0) return prev;
            return prev - 1
        });
    }, [])
  
    const onKeyArrowDown = useCallback(() => {
        setFocusedItem((prev) => {
            if(prev + 1 > childrenCount) return prev;
            return prev + 1
        });
    }, []);

    useEffect(() => {
        const focusedInput = document.querySelector(`#field-${focusedItem} .field__input`)?.firstChild as HTMLElement;
        const focusedField= document.querySelector(`#field-${focusedItem}`) as HTMLElement; 
        
        if(!focusedInput || !focusedField) return;
        focusedInput?.focus();
        focusedField.classList.add('focused'); 
        return () => {
            focusedField.classList.remove('focused');
        }
    }, [focusedItem]);


    useEffect(() => {
        subscribeKeyboardEvent('ArrowUp', onKeyArrowUp);
        subscribeKeyboardEvent('ArrowDown', onKeyArrowDown);
        
        return () => {
            unsubscribeKeyboardEvent('ArrowUp', onKeyArrowUp);
            unsubscribeKeyboardEvent('ArrowDown', onKeyArrowDown);
        }
    }, [onKeyArrowUp, onKeyArrowDown, subscribeKeyboardEvent, unsubscribeKeyboardEvent]);

    const count = useRef(0);

    const addField: T_AddField = (field) => {                
        count.current++;
        if (fields.current.includes(field)) { 
            console.warn("Name must be unique ! Field not added"); 
            return; 
        }
        fields.current = [...fields.current, field];
    };

    const deleteField: T_DeleteField = (field) => {
        count.current--;
        fields.current = fields.current.filter((e) => e !== field);
    };

    const onKeyEnter = useCallback(() => {
        console.log('enter');
    }, []);

    const onClick = useCallback((e) => {
        const parent = e.target?.parentElement.parentElement.id;
        setFocusedItem(parseInt(parent.substring(6)));
        console.log('click');
    }, []);

    const onFocus = useCallback(() => {
        console.log('focus');
    }, []);

    return (
        <FieldsManagerContext.Provider value={{ count, addField, deleteField }}>
            {children}
        </FieldsManagerContext.Provider>
    );
};

export { FieldsManagerProvider, FieldsManagerContext };

    const childrenCount = filterRecursive(children, (child) => isValidElement(child) && child.type.name === 'Field').length;

    const onKeyArrowUp = useCallback(() => {
        setFocusedItem((prev) => {
            if(prev - 1 === 0) return prev;
            return prev - 1
        });
    }, [])
  
    const onKeyArrowDown = useCallback(() => {
        setFocusedItem((prev) => {
            if(prev + 1 > childrenCount) return prev;
            return prev + 1
        });
    }, []);

    useEffect(() => {
        const focusedInput = document.querySelector(`#field-${focusedItem} .field__input`)?.firstChild as HTMLElement;
        const focusedField= document.querySelector(`#field-${focusedItem}`) as HTMLElement; 
        
        if(!focusedInput || !focusedField) return;
        focusedInput?.focus();
        focusedField.classList.add('focused'); 
        return () => {
            focusedField.classList.remove('focused');
        }
    }, [focusedItem]);


    useEffect(() => {
        subscribeKeyboardEvent('ArrowUp', onKeyArrowUp);
        subscribeKeyboardEvent('ArrowDown', onKeyArrowDown);
        
        return () => {
            unsubscribeKeyboardEvent('ArrowUp', onKeyArrowUp);
            unsubscribeKeyboardEvent('ArrowDown', onKeyArrowDown);
        }
    }, [onKeyArrowUp, onKeyArrowDown, subscribeKeyboardEvent, unsubscribeKeyboardEvent]);

    const count = useRef(0);

    const addField: T_AddField = (field) => {                
        count.current++;
        if (fields.current.includes(field)) { 
            console.warn("Name must be unique ! Field not added"); 
            return; 
        }
        fields.current = [...fields.current, field];
    };

    const deleteField: T_DeleteField = (field) => {
        count.current--;
        fields.current = fields.current.filter((e) => e !== field);
    };

    const onKeyEnter = useCallback(() => {
        console.log('enter');
    }, []);

    const onClick = useCallback((e) => {
        const parent = e.target?.parentElement.parentElement.id;
        setFocusedItem(parseInt(parent.substring(6)));
        console.log('click');
    }, []);

    const onFocus = useCallback(() => {
        console.log('focus');
    }, []);

    const onChange = useCallback((e) => {
        let data = e.target.value;
        if (e.target.type === 'checkbox') {
            data = e.target.checked;
        }
        console.log('change', data);
    }, []);

    useEffect(() => {

        subscribeKeyboardEvent('Enter', onKeyEnter);

        for (const field of fields.current) {
            const input = document.getElementsByName(field)[0] as HTMLInputElement;
            if (!input) console.error(`Field ${field} not found`);      
            
            subscribeEventListener({ event: 'click', element: input, callback: onClick });
            subscribeEventListener({ event: 'focus', element: input, callback: onFocus });
            subscribeEventListener({ event: 'input', element: input, callback: onChange });
        }

        return () => {
            count.current = 0;
            unsubscribeKeyboardEvent('Enter', onKeyEnter);
            
            for (const field of fields.current) {
                const input = document.getElementsByName(field)[0] as HTMLInputElement;
                if (!input) console.error(`Field ${field} not found`);
                unsubscribeEventListener({ event: 'click', element: input, callback: onClick });
                unsubscribeEventListener({ event: 'focus', element: input, callback: onFocus });
                unsubscribeEventListener({ event: 'input', element: input, callback: onChange });
            }
        };
    }, [fields]);

    return (
        <FieldsManagerContext.Provider
            value={{ count, addField, deleteField }}
        >
          {children}
        </FieldsManagerContext.Provider>
    );

};

export { FieldsManagerContext, FieldsManagerProvider };