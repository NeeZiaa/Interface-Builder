import { useCallback, useContext, useEffect } from "react";
import { InputContext } from "../../providers/KeyboardListener";
import { T_FormElement } from "../../types/components/formElements/FormElementTypes";
import { postFetch } from "../../utils/postFetch";
import React from "react";
import { renderToString } from "react-dom/server";

const Field: React.FC<T_FormElement> = ({ id, icon, label, children }) => {
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

    // const { items, add, remove } = useContext(FocusableContext);

    // useEffect(() => {
    //     add();
    //     return () => remove("field", "input");
    // }, [add, remove]);

    return (
        <div className="field-element">
            <div className="field__label">
                {icon && <div className="field__icon">{icon}</div>}
                <div className="field__text">{label}</div>
            </div>
            <div className="field__input" id={id.toString()}>{children}</div>
        </div>
    );
}

export default Field;