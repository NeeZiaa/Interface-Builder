import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { T_Selector } from "../../types/components/formElements/SelectorTypes";
import { KeyboardEventListener } from "../../providers/KeyboardListener";

const Selector: React.FC<T_Selector> = ({
    name, options
}) => {

    const {subscribeKeyboardEvent, unsubscribeKeyboardEvent} = useContext(KeyboardEventListener);

    const defaultSelected = options.findIndex((option) => option.selected === true);

    const [selected, setSelected] = useState(defaultSelected);

    const element = useRef<HTMLInputElement>(null);

    const event = new Event('input');

    const onKeyArrowLeft = useCallback(() => {
        if(element.current !== document.activeElement) return;
        setSelected((prev) => {
            if(prev === 0) return prev
            element.current?.dispatchEvent(event);
            return prev - 1;
        })
    }, [])

    const onKeyArrowRight = useCallback(() => {
        if(element.current !== document.activeElement) return;
        setSelected((prev) => {
            if(prev === options.length - 1) return prev
            element.current?.dispatchEvent(event);
            return prev + 1;
        })
    }, [])

    useEffect(() => {
        subscribeKeyboardEvent("ArrowLeft", onKeyArrowLeft);
        subscribeKeyboardEvent("ArrowRight", onKeyArrowRight);
        return () => {
            unsubscribeKeyboardEvent("ArrowLeft", onKeyArrowLeft);
            unsubscribeKeyboardEvent("ArrowRight", onKeyArrowRight);
        }
    }, []);

    return (
        <input className="selector-container" ref={element} tabIndex={1} name={name} value={options[selected].value} readOnly/>
    )
}

export default Selector;