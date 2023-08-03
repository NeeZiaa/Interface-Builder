import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { T_Selector } from "../../types/components/formElements/SelectorTypes";
import KeyboardListener, { InputContext } from "../../providers/KeyboardListener";

const Selector: React.FC<T_Selector> = ({
    name, options, disabled=false, onChange = () => { return; }
}) => {

    // const focusedItem = useContext(FocusedItemContext);

    const {subscribe, unsubscribe} = useContext(InputContext);

    const defaultSelected = options.findIndex((option) => option.selected === true);

    const [selected, setSelected] = useState(defaultSelected);

    const element = useRef(null);

    const onKeyArrowLeft = useCallback(() => {
        if(element.current !== document.activeElement) return;
        setSelected((prev) => {
            if(prev === 0) return prev
            return prev - 1;
        })
    }, [])

    const onKeyArrowRight = useCallback(() => {
        if(element.current !== document.activeElement) return;
        setSelected((prev) => {
            if(prev === options.length - 1) return prev
            return prev + 1;
        })
    }, [])

    useEffect(() => {
        subscribe("ArrowLeft", onKeyArrowLeft);
        subscribe("ArrowRight", onKeyArrowRight);
        return () => {
            unsubscribe("ArrowLeft", onKeyArrowLeft);
            unsubscribe("ArrowRight", onKeyArrowRight);
        }
    }, [subscribe, unsubscribe, onKeyArrowLeft, onKeyArrowRight]);

    return (
        <div className="selector-container" ref={element} tabIndex={0}>{options[selected].label}</div>
    )
}

export default Selector;