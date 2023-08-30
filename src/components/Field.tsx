import React, { useContext, useEffect, useRef } from "react";
import { Icon } from '@iconify-icon/react';
import { FieldsManagerContext } from "../providers/FieldsManager";
import { T_Field } from "../types/components/formElements/FormElementTypes";

const Field: React.FC<T_Field> = ({ icon, label, children }) => {

    const { count, addField } = useContext(FieldsManagerContext);

    const id = useRef(count.current);

    useEffect(() => {
        if (React.isValidElement(children)) {
            if(!children.props.name) throw new Error("Field children must have a name");
            if(!addField(children.props.name)) {
                return;
            }
            id.current = count.current;
        } else {
            throw new Error("Field children must be a valid React element");
        }
    }, []);

    return (
        <div className="field" id={"field-" + id.current.toString()}>
            <div className="left-elements">
                {icon && <div className="field__icon"><Icon icon="mdi-light:alert" /></div>}
                <div className="field__title">{label}</div>
            </div>
            <div className="field__input">{children}</div>
        </div>
    );
}

export default Field;