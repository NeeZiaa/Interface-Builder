import { T_Form } from "../types/components/containers/FormTypes";

const Form: React.FC<T_Form> = ({ title, onSubmit, onReset, children }) => {
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