import Radio, { RadioType } from "./Radio";

interface RadiosProps {
    name: string;
    options: RadioType[];
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioGroup: React.FC<RadiosProps> = ({ name, options, onChange }) => {
    return (
        <div className="radio-group">
            {options.map((option, index) => {
                return (
                    <Radio 
                        key={index}
                        name={name}
                        value={option.value}
                        label={option.label}
                        checked={option.checked === true}
                        onChange={onChange}
                    />
                );
            })}
        </div>
    );
}

export default RadioGroup;