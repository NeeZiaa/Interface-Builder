import { useCallback, useContext, useEffect, useRef } from "react";
import { T_Checkbox } from "../../types/components/formElements/CheckBoxTypes";
import { KeyboardEventListener } from "../../providers/KeyboardListener";

const Checkbox: React.FC<T_Checkbox> = ({
    name, checked=false
}) => {

    const {subscribeKeyboardEvent, unsubscribeKeyboardEvent} = useContext(KeyboardEventListener);

    const checkboxRef = useRef<HTMLInputElement>(null);

    const onKeyEnter = useCallback(() => {
        if(checkboxRef.current === document.activeElement && checkboxRef.current !== null) {
            checkboxRef.current.click();
        }
    }, [checkboxRef]);

    useEffect(() => {
        subscribeKeyboardEvent("Enter", onKeyEnter);
        return () => unsubscribeKeyboardEvent("Enter", onKeyEnter);
    }, []);

    return (
        <input 
            type="checkbox" 
            name={name} 
            ref={checkboxRef}
            defaultChecked={checked}
        />
    );
}
  
export default Checkbox;