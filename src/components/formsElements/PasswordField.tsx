interface PasswordFieldProps {
    label?: string;
    name: string;
    type: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    disabled: boolean;
}

const AuthorizedTypes = ['text', 'email', 'number', 'tel', 'url'];

const TextField: React.FC<PasswordFieldProps> = ({ 
    label, name, type, onChange, placeholder, disabled=false
}) => {

    if(!AuthorizedTypes.includes(type)) throw new Error(`Input type ${type} is not supported`);
    
    return (
        <input 
            type={type}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            className="styled-input"
        />
    );
}

export default TextField;