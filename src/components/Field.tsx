interface FieldProps {
    label?: string;
    children: React.ReactNode;
}

const Field: React.FC<FieldProps> = ({ label, children }) => {
    console.log("Field props : ", label, children)
    return (
        <>
            { label ? 
                <label>
                    {label}
                    {children}
                </label>
            : children }
        </>
    );
}

export default Field;