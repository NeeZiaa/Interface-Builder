import { Children, createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { T_Interface } from "../../types/components/containers/InterfaceTypes"
import Title from "../display/Title";
import { InputContext } from "../../providers/KeyboardListener";
import { focusOut } from "../../utils/focus";
import { on } from "events";

const Interface: React.FC<T_Interface> = ({ label, children, width, height, onClick, onHover }) => {
    
    const { subscribe, unsubscribe } = useContext(InputContext);

    const onKeyEscape = useCallback(focusOut, []);

    useEffect(() => {
        subscribe("Escape", onKeyEscape);
        return () => unsubscribe("Escape", onKeyEscape);
    }, [onKeyEscape, subscribe, unsubscribe]);

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

    useEffect(() => {
        const focusedElement = document.querySelector(`.field-element:nth-child(${focusedItem}) .field__input`)?.firstChild as HTMLElement;
        focusedElement?.focus();
    }, [focusedItem]);

    useEffect(() => {
        subscribe('ArrowUp', onKeyArrowUp);
        subscribe('ArrowDown', onKeyArrowDown);
        return () => {
            unsubscribe('ArrowUp', onKeyArrowUp);
            unsubscribe('ArrowDown', onKeyArrowDown);
        }
    }, [onKeyArrowUp, onKeyArrowDown, subscribe, unsubscribe]);

    const FocusedItemContext = createContext(focusedItem);

    return (
        <div
            className="interface-container" 
            style={{ width, height }} 
            onClick={(e) => {
                onClick && onClick(e); 
            }}
            onMouseEnter={(e) => {
                onHover && onHover(e);
            }}
        >
            <Title>{label}</Title>
            <div 
                className="fields-wrapper" 
            >
                {children}
            </div>
        </div>
    )
}

export default Interface;