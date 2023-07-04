interface SelectProps {
    label?: string;
    onCheck: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
  
const Checkbox: React.FC<SelectProps> = ({
    label, onCheck
}) => {
    return (
        <>
            { label && <label htmlFor="select">{label}</label>}
            <input type="checkbox" onChange={onCheck} />
        </>
    );
}
  
export default Checkbox;