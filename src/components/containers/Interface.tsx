import { Children, createContext, useCallback, useContext, useEffect, useState } from "react";
import { T_Interface } from "../../types/components/containers/InterfaceTypes"
import Title from "../display/Title";
import { KeyboardEventListener } from "../../providers/KeyboardListener";
import { focusOut } from "../../utils/focus";
import { FieldsManagerProvider } from "../../providers/FieldsManager";
import { EventContext } from "../../providers/EventListener";

export const InterfaceContext = createContext({});

const Interface: React.FC<T_Interface> = ({ label, children, width, height} ) => {
    
    const { subscribeKeyboardEvent, unsubscribeKeyboardEvent } = useContext(KeyboardEventListener);

    // const { subscribeEventListener, unsubscribeEventListener } = useContext(EventContext);

    const onKeyEscape = useCallback(focusOut, []);

    useEffect(() => {
        subscribeKeyboardEvent("Escape", onKeyEscape);
        return () => unsubscribeKeyboardEvent("Escape", onKeyEscape);
    }, [onKeyEscape, subscribeKeyboardEvent, unsubscribeKeyboardEvent]);

    const childrenCount = Children.count(children);

    const [focusedItem, setFocusedItem] = useState(1);
  
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

    // const onFocus = useCallback((e: Event) => {
    //     const focusedElement = e.target as HTMLElement;
    //     const focusedItem = document.querySelector(`.field-element:nth-child(${getNthChild(focusedElement)})`)?.firstChild as HTMLElement;
    //     const position = getNthChild(focusedElement);
    //     focusedItem.classList.add('focused');
    //     setFocusedItem(position);
    // }, []);

    useEffect(() => {
        const focusedElement = document.querySelector(`.field-element:nth-child(${focusedItem}) .field__input`)?.firstChild as HTMLElement;
        const focusedField= document.querySelector(`.field-element:nth-child(${focusedItem})`)?.firstChild as HTMLElement;        
        focusedElement?.focus();
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

    return (
        <FieldsManagerProvider>
            <div
                className="interface-container" 
                style={{ width, height }} 
            >
                <Title>{label}</Title>
                <div 
                    className="fields-wrapper" 
                >
                    {children}
                </div>
            </div>
        </FieldsManagerProvider>
    )
}

export default Interface;