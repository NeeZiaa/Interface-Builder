import { T_TextField } from "../../types/components/formElements/TextFieldTypes";

const AuthorizedTypes = ['text', 'email', 'number', 'tel', 'url'];

const TextField: React.FC<T_TextField> = ({ 
    name, type, defaultValue="", onChange, placeholder="", disabled=false, autoComplete=false, required=false
}) => {

    if(!AuthorizedTypes.includes(type)) throw new Error(`Input type ${type} is not supported`);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(event);
        // if(type === "email") checkRegexEmail(event.target.value) ? play("success") : play("error");
    }

    return (
        <input 
            type={type}
            name={name}
            defaultValue={defaultValue}
            onChange={handleChange}
            placeholder={placeholder}
            autoComplete={autoComplete ? 'on' : 'off'}
            disabled={disabled}
            className="styled-input"
            required={required}
        />
    );
}

export default TextField;