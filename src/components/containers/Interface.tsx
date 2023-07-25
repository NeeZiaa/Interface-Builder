import { useCallback, useContext, useEffect } from "react";
import { T_Interface } from "../../types/components/containers/InterfaceTypes"
import Title from "../display/Title";
import { InputContext } from "../../KeyboardListener";

const Interface: React.FC<T_Interface> = ({ label, children, width, height, onClick, onHover }) => {
    const { subscribe, unsubscribe } = useContext(InputContext);
    const react = useCallback((key: string) => key === "a" && console.log("react !"), []);
    const arrowUp = useCallback((key: string) => key === "ArrowUp" && console.log("Up !"), []);
    const arrowDown = useCallback((key: string) => key === "ArrowDown" && console.log("Down !"), []);
    const arrowLeft = useCallback((key: string) => key === "ArrowLeft" && console.log("Left !"), []);
    const arrowRight = useCallback((key: string) => key === "ArrowRight" && console.log("Right !"), []);
            
    useEffect(() => {
        console.log("Subscribe")
        subscribe(react, arrowUp, arrowDown, arrowLeft, arrowRight);
        return () => unsubscribe(react, arrowUp, arrowDown, arrowLeft, arrowRight);
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