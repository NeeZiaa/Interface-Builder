interface AreaFieldProps {
    name: string;
    defaultValue?: string;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder: string;
    disabled: boolean;
    autoComplete: boolean;
}

const AreaField: React.FC<AreaFieldProps> = ({
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