interface FormProps {
    title?: string,
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    onReset?: (event: React.FormEvent<HTMLFormElement>) => void;
    children: React.ReactNode;
}

const Form: React.FC<FormProps> = ({ title, onSubmit, onReset, children }) => {
    return (
        <div className="form-container">
            {title && <h2>{title}</h2>}
            <form onSubmit={onSubmit} onReset={onReset}>
                {children}
                <div className="actions">
                    <button type="submit" className="submit">Submit</button>
                    <button type="reset" className="reset">Reset</button>
                </div>
            </form>
        </div>
    );
}

export default Form;