interface InputProps {
    label?: string;
    name: string;
    type: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    disabled: boolean;
}

const AuthorizedTypes = ['text', 'email', 'number', 'search', 'tel', 'url', 'date', 'time', 'datetime-local', 'month', 'week'];

const Input: React.FC<InputProps> = ({ 
    label, name, type, value, onChange, placeholder, disabled=false
}) => {

    if(!AuthorizedTypes.includes(type)) throw new Error(`Input type ${type} is not supported`);
    
    return (
        <>
            {label && <label htmlFor={name}>{label}</label>}
            <input 
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                className="styled-input"
            />
        </>
    );
}

export default Input;