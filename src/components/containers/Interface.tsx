import { useCallback, useContext, useEffect, useRef, useState } from "react";
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
    }, [onKeyEscape, subscribe, unsubscribe]);


    const items = useRef(null);

    const [focused, setFocused] = useState(null as unknown | HTMLElement | null | undefined | any);

    console.log("items", items.current);    
    
    useEffect(() => {
        const itemsList = items.current as HTMLDivElement | null;
        console.log("itemsList", itemsList);
        if (itemsList) {
            itemsList.addEventListener("keydown", (e) => {
                if (e.key === "ArrowUp" || e.key === "ArrowDown") {
                    if(itemsList.firstChild) {
                        console.log(itemsList.firstChild)
                        itemsList.firstChild.focus();
                    }
                }
            });
        }
    }, [items]);


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
                ref={items}
            >
                {children}
            </div>
        </div>
    )
}

export default Interface;