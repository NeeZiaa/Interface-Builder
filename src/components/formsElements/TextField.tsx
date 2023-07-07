import { T_TextField } from "../../types/components/formElements/TextFieldTypes";
import { checkRegexEmail } from "../../utils/regex";
import { play } from "../../utils/sound";

const AuthorizedTypes = ['text', 'email', 'number', 'tel', 'url'];

const TextField: React.FC<T_TextField> = ({ 
    name, type, defaultValue, onChange, placeholder, disabled=false, autoComplete=false
}) => {

    if(!AuthorizedTypes.includes(type)) throw new Error(`Input type ${type} is not supported`);

    return (
        <input 
            type={type}
            name={name}
            value={defaultValue}
            onChange={
                (event: React.ChangeEvent<HTMLInputElement>) => {
                    onChange && onChange(event);
                    checkRegexEmail(event.target.value) ? play("success") : play("error");
                }
            }
            placeholder={placeholder}
            autoComplete={autoComplete ? 'on' : 'off'}
            disabled={disabled}
            className="styled-input"
        />
    );
}

export default TextField;