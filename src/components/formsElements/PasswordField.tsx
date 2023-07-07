import { T_PasswordField } from "../../types/components/formElements/PasswordFieldTypes";
import { checkRegexPassword } from "../../utils/regex";
import { play } from "../../utils/sound";

const TextField: React.FC<T_PasswordField> = ({ 
    name, onChange, placeholder, disabled=false
}) => {

    return (
        <input 
            type="password"
            name={name}
            onChange={
                (event: React.ChangeEvent<HTMLInputElement>) => {
                    onChange && onChange(event);
                    checkRegexPassword(event.target.value) ? play("success") : play("error");
                }
            }
            placeholder={placeholder}
            disabled={disabled}
            className="styled-input"
        />
    );
}

export default TextField;