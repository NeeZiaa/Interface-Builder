import { T_Checkbox } from "../../types/components/formElements/CheckBoxTypes";

const Checkbox: React.FC<T_Checkbox> = ({
    name, value, onCheck, checked=false
}) => {
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