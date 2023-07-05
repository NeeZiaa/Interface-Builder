interface FieldProps {
    label?: string;
    children: React.ReactNode;
}

const Field: React.FC<FieldProps> = ({ label, children }) => {
    console.log("Field props : ", label, children)
    return (
        <div className="field-card">
            { label ? 
                <label>
                    {label}
                    {children}
                </label>
            : children }
        </div>
    );
}

export default Field;