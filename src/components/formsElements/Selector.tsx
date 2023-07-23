import { useEffect } from "react";
import { T_Selector } from "../../types/components/formElements/SelectorTypes";

const Selector: React.FC<T_Selector> = ({
    name, options, disabled=false, onChange = () => { return }, setSelected = () => { return }
}) => {

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log("Selected item : ", e.target.value);
        setSelected(e.target.value);
        onChange(e);
    }

    return (
        <select name={name} onChange={handleChange} disabled={disabled}>
            {options.map((option, index) => {
                return (
                    <option key={index} value={option.value} selected={option.selected}>{option.label}</option>
                );
            })}
        </select>  
    );
}

export default Selector;