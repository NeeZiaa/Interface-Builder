import { T_Radio } from "../../types/components/formElements/RadioTypes";

const Radio: React.FC<T_Radio> = ({ name, value, checked=false, onChange }) => {
    return (
        <input 
            type="radio"
            name={name}
            value={value}
            checked={checked}
            onChange={onChange}
        />
    );
}

export default Radio;