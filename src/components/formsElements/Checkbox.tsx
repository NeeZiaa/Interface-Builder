import { useCallback, useContext, useEffect, useRef } from "react";
import { T_Checkbox } from "../../types/components/formElements/CheckBoxTypes";
import { InputContext } from "../../providers/KeyboardListener";

const Checkbox: React.FC<T_Checkbox> = ({
    name, onCheck, checked=false
}) => {

    const {subscribe, unsubscribe} = useContext(InputContext);

    const checkboxRef = useRef<HTMLInputElement>(null);

    const onKeyEnter = useCallback(() => {
        if(checkboxRef.current) {
            checkboxRef.current.click();
        }
    }, [checkboxRef]);

    useEffect(() => {
        subscribe("Enter", onKeyEnter);
        return () => unsubscribe("Enter", onKeyEnter);
    }, [onKeyEnter, subscribe, unsubscribe]);

    return (
        <input 
            type="checkbox" 
            name={name} 
            ref={checkboxRef}
        />
    );
}
  
export default Checkbox;