import { useCallback, useContext, useEffect } from "react";
import { InputContext } from "../../providers/KeyboardListener";
import { T_FormElement } from "../../types/components/formElements/FormElementTypes";
import { postFetch } from "../../utils/postFetch";
import React from "react";

const Field: React.FC<T_FormElement> = ({ id, icon, label, children }) => {

    const { subscribe, unsubscribe } = useContext(InputContext);

    const onKeyEnter = useCallback(() => {
        console.log("onKeyEnter");
    }, []);

    useEffect(() => {
        subscribe("Enter", onKeyEnter);
        return () => unsubscribe("Enter", onKeyEnter);
    }, [onKeyEnter, subscribe, unsubscribe]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        console.log("handleSubmit", e)
        e.preventDefault();
        postFetch({
            url: "http://localhost:3001/api/v1/users",
            body: { name: "test" },
        });
    }

    return (
        <div className="field-element" id={id ? id.toString() : ""}>
            <div className="field__label">
                {icon && <div className="field__icon">{icon}</div>}
                <div className="field__text">{label}</div>
            </div>
            <div className="field__input">{children}</div>
        </div>
    );
}

export default Field;