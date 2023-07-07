import { T_Checkbox } from "../../types/components/formElements/CheckBoxTypes";

const Checkbox: React.FC<T_Checkbox> = ({
    label, value, onCheck, checked=false
}) => {
    return (
        <label>
            <input type="checkbox" onChange={onCheck} checked={checked} value={value} />
            {label}
        </label>
    );
}
  
export default Checkbox;