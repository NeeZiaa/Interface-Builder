interface RadioProps {
    name: string;
    value: string;
    label: string;
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type RadioType = Omit<RadioProps, 'name'>;

const Radio: React.FC<RadioProps> = ({ name, value, label, checked=false, onChange }) => {
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