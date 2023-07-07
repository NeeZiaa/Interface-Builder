import { T_Checkbox } from "../../types/components/formElements/CheckBoxTypes";

const Checkbox: React.FC<T_Checkbox> = ({
    name, label, value, onCheck, checked=false
}) => {
    return (
        <label>
            <input 
                type="checkbox" 
                name={name}
                onChange={onCheck} 
                checked={checked} 
                value={value} 
            />
            {label}
        </label>
    );
}
  
export default Checkbox;