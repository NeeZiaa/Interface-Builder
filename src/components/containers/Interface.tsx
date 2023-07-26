import { useCallback, useContext, useEffect } from "react";
import { T_Interface } from "../../types/components/containers/InterfaceTypes"
import Title from "../display/Title";
import { InputContext } from "../../providers/KeyboardListener";
import { focusOut } from "../../utils/focus";

const Interface: React.FC<T_Interface> = ({ label, children, width, height, onClick, onHover }) => {
    const { subscribe, unsubscribe } = useContext(InputContext);
    const onKeyEscape = useCallback(focusOut, []);

    useEffect(() => {
        subscribe("Escape", onKeyEscape);
        return () => unsubscribe("Escape", onKeyEscape);
    }, [subscribe, unsubscribe]);

    return (
        <div
            className="interface-container" 
            style={{ width, height }} 
            onClick={(e) => {
                onClick && onClick(e); 
            }}
            onMouseEnter={(e) => {
                onHover && onHover(e);
            }}>
            <Title>{label}</Title>
            {children}
        </div>
    )
}

export default Interface;