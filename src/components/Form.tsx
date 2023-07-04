interface FormProps {
    title?: string,
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    children: React.ReactNode;
}

const Form: React.FC<FormProps> = ({ title, onSubmit, children }) => {
    return (
        <>
            {title && <h2>{title}</h2>}
            <form onSubmit={onSubmit}>
                {children}
                <div className="actions">
                    <button type="submit">Submit</button>
                    <button type="reset">Reset</button>
                </div>
            </form>
        </>
    );
}

export default Form;