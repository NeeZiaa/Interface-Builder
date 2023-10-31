import { createContext, isValidElement, useCallback, useContext, useEffect, useRef, useState } from "react"
import { filterRecursive } from "../utils/countChildren";
import { T_AddInterface, T_RemoveInterface, T_NullableInterfaceManagerContext } from "../types/providers/InterfaceManagerTypes";
import { subscribe } from "diagnostics_channel";
import { KeyboardEventListener } from "./KeyboardListener";

const InterfaceManagerContext = createContext<T_NullableInterfaceManagerContext>({ count: null, addInterface: null, removeInterface: null });

const InterfaceManager = ({ children }: { children: React.ReactNode }) => {

    const { subscribeKeyboardEvent, unsubscribeKeyboardEvent } = useContext(KeyboardEventListener);

    const count = useRef(0);

    const [current, setCurrent] = useState(0);

    const childrenCount = filterRecursive(children, (child) => isValidElement(child) && typeof child.type !== 'string' && child.type.name === 'Field').length;

    const onKeyTab = useCallback((e: KeyboardEvent) => {
        e.preventDefault();
        if(e.shiftKey) {
            setCurrent((prev) => {
                if(prev - 1 === 0) return prev;
                return prev - 1
            });
        } else {
            setCurrent((prev) => {
                if(prev + 1 > childrenCount) return prev;
                return prev + 1
            });  
        }
    }, []);

    const addInterface: T_AddInterface = () => {
        count.current++;
    }

    const removeInterface: T_RemoveInterface = () => {
        count.current--;
    }

    useEffect(() => {
        subscribeKeyboardEvent('Tab', onKeyTab);
        return () => {
            unsubscribeKeyboardEvent('Tab', onKeyTab);
        }
    })

    useEffect(() => {
        const currentInterface = document.querySelector(`#interface-${current}`) as HTMLElement;
        const focusedInput = document.querySelector(`#interface-${current} #field-1 .field__input`)?.firstChild as HTMLElement;
        const focusedField= document.querySelector(`#interface-${current} #field-1`) as HTMLElement; 

        if(!currentInterface) return;
        currentInterface.classList.add('current'); 
        return () => {
            currentInterface.classList.remove('current');
        }
    }, [current]);


    return (
        <InterfaceManagerContext.Provider value={{ count, addInterface, removeInterface }}>
            {children}
        </InterfaceManagerContext.Provider>
    )
}

export { InterfaceManagerContext, InterfaceManager }