import { useCallback, useContext, useEffect } from "react";
import { InputContext } from "../../providers/KeyboardListener";
import { T_Form } from "../../types/components/containers/FormTypes";
import { postFetch } from "../../utils/postFetch";

const Form: React.FC<T_Form> = ({ title, onSubmit, onReset, children }) => {

    const { subscribe, unsubscribe } = useContext(InputContext);

    const onEnterKey = useCallback(() => {
        postFetch({ 
            url: "http://localhost:3001/api/submit",
            body: {
                name: "test"
            }
        });
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        console.log("handleSubmit", e)
        e.preventDefault();
        onSubmit && onSubmit(e);
    }

    useEffect(() => {
        subscribe("Enter", onEnterKey);
        return () => unsubscribe("Enter", onEnterKey);
    }, [subscribe, unsubscribe, onEnterKey]);

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