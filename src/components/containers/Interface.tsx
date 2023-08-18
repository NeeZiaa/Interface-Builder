import { Children, createContext, useCallback, useContext, useEffect, useState } from "react";
import { T_Interface } from "../../types/components/containers/InterfaceTypes"
import Title from "../display/Title";
import { KeyboardEventListener } from "../../providers/KeyboardListener";
import { focusOut } from "../../utils/focus";
import { FieldsManagerProvider } from "../../providers/FieldsManager";

export const InterfaceContext = createContext({});

const Interface: React.FC<T_Interface> = ({ label, children, width, height} ) => {
    
    const { subscribeKeyboardEvent, unsubscribeKeyboardEvent } = useContext(KeyboardEventListener);

    // const { subscribeEventListener, unsubscribeEventListener } = useContext(EventContext);

    const [focusedItem, setFocusedItem] = useState(2);

    const onKeyEscape = useCallback(focusOut, []);

    useEffect(() => {
        subscribeKeyboardEvent("Escape", onKeyEscape);
        return () => unsubscribeKeyboardEvent("Escape", onKeyEscape);
    }, [onKeyEscape, subscribeKeyboardEvent, unsubscribeKeyboardEvent]);

    return (
        <div
            className="interface" 
            style={{ width, height }} 
        >
            {label && <Title>{label}</Title>}
            
            <div 
                className="fields-wrapper" 
            >
                <FieldsManagerProvider>
                    {children}
                </FieldsManagerProvider>
            </div>
        </div>
    )
}

export default Interface;