import { T_Radio } from "../../types/components/formElements/RadioTypes";

const Radio: React.FC<T_Radio> = ({ name, value, label, checked=false, onChange }) => {
    return (
        <div className="radio">
            <label>
                <input 
                    type="radio"
                    name={name}
                    value={value}
                    checked={checked}
                    onChange={onChange}
                />
                {label}
            </label>            
        </div>
    );
}

export default Radio;