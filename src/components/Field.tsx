import { useCallback, useContext, useEffect, useRef } from "react";
import { InputContext } from "../providers/KeyboardListener";
import { T_FormElement } from "../types/components/formElements/FormElementTypes";
import { Icon } from '@iconify-icon/react';
import React from "react";

const Field: React.FC<T_FormElement> = ({ id, icon, label, children }) => {

    const { subscribe, unsubscribe } = useContext(InputContext);

    return (
        <div className="field-element" id={id ? id.toString() : ""}>
            <div className="field__label">
                {icon && <div className="field__icon"><Icon icon="mdi-light:alert" /></div>}
                <div className="field__text">{label}</div>
            </div>
            <form action="">
                <div className="field__input">{children}</div>
            </form>
        </div>
    );
}

export default Field;