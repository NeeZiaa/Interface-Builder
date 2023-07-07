import { T_RadioGroup } from "../../types/components/formElements/RadioTypes";
import Radio from "./Radio";

const RadioGroup: React.FC<T_RadioGroup> = ({ name, options, onChange }) => {
    return (
        <div className="radio-group">
            {options.map((option, index) => {
                return (
                    <Radio 
                        key={index}
                        name={name}
                        value={option.value}
                        label={option.label}
                        checked={option.checked === true}
                        onChange={onChange}
                    />
                );
            })}
        </div>
    );
}

export default RadioGroup;