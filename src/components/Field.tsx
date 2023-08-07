import React, { useContext, useEffect, useRef } from "react";
import { Icon } from '@iconify-icon/react';
import { InterfaceFieldsContext } from "../providers/InterfaceFields";
import { T_FormElement } from "../types/components/formElements/FormElementTypes";

const Field: React.FC<T_FormElement> = ({ id, icon, label, children }) => {

    const { addField } = useContext(InterfaceFieldsContext);

    useEffect(() => {
        if (React.isValidElement(children)) {
            if(!children.props.name) throw new Error("Field children must have a name");
            addField(children.props.name);
        } else {
            throw new Error("Field children must be a valid React element");
        }
    }, [addField, children]);

    return (
        <div className="field-element" id={id ? id.toString() : ""}>
            <div className="field__label">
                {icon && <div className="field__icon"><Icon icon="mdi-light:alert" /></div>}
                <div className="field__text">{label}</div>
            </div>
            <div className="field__input">{children}</div>
        </div>
    );
}

export default Field;