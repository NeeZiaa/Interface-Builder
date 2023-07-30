import { useCallback, useContext, useEffect } from "react";
import { InputContext } from "../../providers/KeyboardListener";
import { T_FormElement } from "../../types/components/formElements/FormElementTypes";
import { postFetch } from "../../utils/postFetch";

const Field: React.FC<T_FormElement> = ({ icon, label, children, onChange, onFocus, onBlur }) => {
    const { subscribe, unsubscribe } = useContext(InputContext);

    const onKeyEnter = useCallback(() => {
        console.log("onKeyEnter");
    }, []);
    useEffect(() => {
        subscribe("Enter", onKeyEnter);
        return () => unsubscribe("Enter", onKeyEnter);
    }, [subscribe, unsubscribe, onKeyEnter]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        console.log("handleSubmit", e)
        e.preventDefault();
        postFetch({
            url: "http://localhost:3001/api/v1/users",
            body: { name: "test" },
        });
    }
    
    console.log("Field", children)

    return (
        <div className="form-element">
            <div className="form-element__label">
                {icon && <div className="form-element__icon">{icon}</div>}
                <div className="form-element__text">{label}</div>
            </div>
            <div className="form-element__input">
                {children}
            </div>
        </div>
    );
}

export default Field;