import React, { createContext, useEffect, Context, useContext, useCallback, useRef, useState, isValidElement } from 'react';
import { KeyboardEventListener } from './KeyboardListener';
import { EventContext } from './EventListener';
import { filterRecursive } from '../utils/countChildren';
import { EventCallback } from '../types/providers/EventListenerTypes';
import { T_AddField, T_DeleteField, T_FieldsManagerContext, T_NullableFieldsManagerContext } from '../types/providers/FieldsManagerTypes';

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
        if (fields.current.includes(field)) {
            console.warn("Name must be unique ! Field not added"); 
            return false;
        }
        count.current++;
        fields.current = [...fields.current, field];
        return true;
    };

    const deleteField: T_DeleteField = (field) => {
        count.current--;
        fields.current = fields.current.filter((e) => e !== field);
    };

    const onKeyEnter = useCallback(() => {
        console.log('enter');
    }, []);
    const onClick = useCallback((e: React.MouseEvent) => {
        const parent = (e.target as HTMLElement)?.parentElement?.parentElement?.id;
        setFocusedItem(parseInt(parent?.substring(6) ?? '0'));
        console.log('click');
    }, []);

    const onFocus = useCallback(() => {
        console.log('focus');
    }, []);

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        let data: string | boolean = e.target.value;
        if (e.target.type === 'checkbox') {
            if(e.target instanceof HTMLInputElement) {
                data = e.target.checked;
            }
        }
        console.log('change', data);
    }, []);

    useEffect(() => {

        subscribeKeyboardEvent('Enter', onKeyEnter);

        for (const field of fields.current) {
            const input = document.getElementsByName(field)[0] as HTMLInputElement;
            if (!input) console.error(`Field ${field} not found`);      
            
            subscribeEventListener({ event: 'click', element: input, callback: onClick as unknown as EventCallback });
            subscribeEventListener({ event: 'focus', element: input, callback: onFocus });
            subscribeEventListener({ event: 'input', element: input, callback: onChange as unknown as EventCallback  });
        }

        return () => {
            count.current = 0;
            unsubscribeKeyboardEvent('Enter', onKeyEnter);
            
            for (const field of fields.current) {
                const input = document.getElementsByName(field)[0] as HTMLInputElement;
                if (!input) console.error(`Field ${field} not found`);
                unsubscribeEventListener({ event: 'click', element: input, callback: onClick as unknown as EventCallback  });
                unsubscribeEventListener({ event: 'focus', element: input, callback: onFocus });
                unsubscribeEventListener({ event: 'input', element: input, callback: onChange as unknown as EventCallback  });
            }
        };
    }, [fields]);

    return (
        <FieldsManagerContext.Provider value={{ count, addField, deleteField }}>
            {children}
        </FieldsManagerContext.Provider>
    );
};

export { FieldsManagerProvider, FieldsManagerContext };