import { createContext, useCallback, useContext, useEffect } from "react";
import { T_Interface } from "../../types/components/containers/InterfaceTypes"
import Title from "../display/Title";
import { KeyboardEventListener } from "../../providers/KeyboardListener";
import { focusOut } from "../../utils/focus";
import { FieldsManagerProvider } from "../../providers/FieldsManager";

export const InterfaceContext = createContext({});

const Interface: React.FC<T_Interface> = ({ label, name, children, width, height, position} ) => {
    
    const { subscribeKeyboardEvent, unsubscribeKeyboardEvent } = useContext(KeyboardEventListener);

    const positions = ['top-left', 'top-center', 'top-right', 'middle-left', 'middle-center', 'middle-right', 'bottom-left', 'bottom-center', 'bottom-right']

    if(!position || positions.indexOf(position) === -1) {
        console.log('Invalid position, setting default position to top-left')
        position = 'top-left';
    }

    const onKeyEscape = useCallback(focusOut, []);

    useEffect(() => {
        subscribeKeyboardEvent("Escape", onKeyEscape);
        return () => unsubscribeKeyboardEvent("Escape", onKeyEscape);
    }, []);

    return (
        <div
            className={"interface " + position} 
            style={{ width, height }}
            id={"interface-" + name}
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