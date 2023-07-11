interface I_Components {
    [key: string]: {
        requiredProps: string[];
        optionalProps: string[];
    };
}

export type T_Components = I_Components;

export const Components: T_Components = {
    // Form Elements
    TextField: { requiredProps: ["name", "type"], optionalProps: ["placeholder", "disabled", "autoComplete", "defaultValue", "required", "onChange"] },
    Selector: { requiredProps: ["name", "options"], optionalProps: ["disabled", "onChange", "setSelected"] },
    Checkbox: { requiredProps: ["name", "label"], optionalProps: ["disabled", "defaultValue", "onChange"] },
    Button: { requiredProps: ["name", "label"], optionalProps: ["disabled", "defaultValue", "onChange"] },
    Radio: { requiredProps: [ "value", "label"], optionalProps: ["disabled", "checked", "onChange"] },
    RadioGroup: { requiredProps: ["name", "options"], optionalProps: ["onChange"] },
    PasswordField: { requiredProps: ["name"], optionalProps: ["placeholder", "disabled", "onChange"] },
    // Containers
    Item: { requiredProps: ["title", "children"], optionalProps: ["onHover", "onChange"] },
    ItemsWrapper: { requiredProps: ["title", "items"], optionalProps: [] },
    Form: { requiredProps: ["children", "onSubmit"], optionalProps: ["title", "onReset"] },
}