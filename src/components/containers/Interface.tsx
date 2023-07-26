import { useCallback, useContext, useEffect } from "react";
import { T_Interface } from "../../types/components/containers/InterfaceTypes"
import Title from "../display/Title";
import { InputContext } from "../../providers/KeyboardListenerV2";
// import { InputContext } from "../../providers/KeyboardListener";

const Interface: React.FC<T_Interface> = ({ label, children, width, height, onClick, onHover }) => {
    const { subscribe, unsubscribe } = useContext(InputContext);
    const react = useCallback((event: KeyboardEvent) => console.log("react !", event), []);
            
    useEffect(() => {
        console.log("Subscribe")
        subscribe("a", react);
        return () => unsubscribe("a", react);
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