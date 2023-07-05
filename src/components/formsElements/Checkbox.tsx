interface SelectProps {
    value: string;
    onCheck: (event: React.ChangeEvent<HTMLInputElement>) => void;
    checked?: boolean;
}
  
const Checkbox: React.FC<SelectProps> = ({
    value, onCheck, checked=false
}) => {
    return (
        <input type="checkbox" onChange={onCheck} checked={checked} value={value} />
    );
}
  
export default Checkbox;