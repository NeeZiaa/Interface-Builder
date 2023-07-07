import { useEffect } from "react";
import { T_Selector } from "../../types/components/formElements/SelectorTypes";

const Selector: React.FC<T_Selector> = ({
    options, onChange = () => { return }, setSelected = () => { return }
}) => {

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log("Selected item : ", e.target.value);
        setSelected(e.target.value);
        onChange(e);
    }

    useEffect(() => {
        console.log("Selector options : ", options);
        const selectedOption = options.find(option => option.selected);
        if(selectedOption) setSelected(selectedOption.value);
    }, [options, setSelected]);

    return (
        <select onChange={handleChange}>
            {options.map((option, index) => {
                return (
                    <option key={index} value={option.value} selected={option.selected}>{option.label}</option>
                );
            })}
        </select>  
    );
}

export default Selector;