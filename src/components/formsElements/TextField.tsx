interface TextFieldProps {
    name: string;
    id
    type: string;
    defaultValue?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    disabled: boolean;
    autoComplete: boolean;
}

const AuthorizedTypes = ['text', 'email', 'number', 'tel', 'url'];

const TextField: React.FC<TextFieldProps> = ({ 
    label, name, type, defaultValue, onChange, placeholder, disabled=false, autoComplete=false
}) => {

    if(!AuthorizedTypes.includes(type)) throw new Error(`Input type ${type} is not supported`);
    
    return (
        <>
            {label && <label htmlFor={name}>{label}</label>}
            <input 
                type={type}
                name={name}
                value={defaultValue}
                onChange={onChange}
                placeholder={placeholder}
                autoComplete={autoComplete ? 'on' : 'off'}
                disabled={disabled}
                className="styled-input"
            />
        </>
    );
}

export default TextField;