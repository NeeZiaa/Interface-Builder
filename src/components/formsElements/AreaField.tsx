import { T_AreaField } from "../../types/components/formElements/AreaFieldTypes";

const AreaField: React.FC<T_AreaField> = ({
    name, defaultValue, onChange, placeholder="", disabled=false, autoComplete=false
}) => {
    return (
        <textarea 
            name={name}
            value={defaultValue}
            onChange={onChange}
            placeholder={placeholder}
            autoComplete={autoComplete ? 'on' : 'off'}
            disabled={disabled}
            className="styled-input"
        />
    );
}

export default AreaField;