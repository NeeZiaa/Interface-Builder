import { useCallback, useContext, useEffect } from "react";
import { T_Checkbox } from "../../types/components/formElements/CheckBoxTypes";
import { InputContext } from "../../providers/KeyboardListener";

const Checkbox: React.FC<T_Checkbox> = ({
    name, value, onCheck, checked=false
}) => {

    const {subscribe, unsubscribe} = useContext(InputContext);

    const onKeyEnter = useCallback(() => {
        console.log("onKeyEnter");
    }, []);

    useEffect(() => {
        subscribe("Enter", onCheck);
        return () => unsubscribe("Enter", onCheck);
    }, [onCheck, subscribe, unsubscribe]);

    return (
        <input 
            type="checkbox" 
            name={name}
            onChange={onCheck} 
            checked={checked} 
            value={value} 
        />
    );
}
  
export default Checkbox;