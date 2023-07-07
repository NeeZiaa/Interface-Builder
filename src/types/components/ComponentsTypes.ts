import { T_FormOptional, T_FormRequired } from "./containers/FormTypes";
import { T_ItemOptional, T_ItemRequired, T_ItemsWrapperOptional, T_ItemsWrapperRequired } from "./containers/ItemTypes";
import { T_CheckboxRequired } from "./formElements/CheckBoxTypes";
import { T_PasswordFieldOptional, T_PasswordFieldRequired } from "./formElements/PasswordFieldTypes";
import { T_RadioGroupOptional, T_RadioGroupRequired, T_RadioOptional, T_RadioRequired } from "./formElements/RadioTypes";
import { T_SelectorOptional, T_SelectorRequired } from "./formElements/SelectorTypes";
import { T_TextFieldOptional, T_TextFieldRequired } from "./formElements/TextFieldTypes";

export type ComponentType = 
    // Form Elements
    | { type: "TextField"; requiredProps: T_TextFieldRequired; optionalProps: T_TextFieldOptional }
    | { type: "Selector"; requiredProps: T_SelectorRequired; optionalProps: T_SelectorOptional }
    | { type: "Checkbox"; requiredProps: T_CheckboxRequired; optionalProps: T_CheckboxRequired }
    | { type: "Radio"; requiredProps: T_RadioRequired; optionalProps: T_RadioOptional }
    | { type: "RadioGroup"; requiredProps: T_RadioGroupRequired; optionalProps: T_RadioGroupOptional }
    | { type: "PasswordField"; requiredProps: T_PasswordFieldRequired; optionalProps: T_PasswordFieldOptional }
    // Containers
    | { type: "Item"; requiredProps: T_ItemRequired; optionalProps: T_ItemOptional}
    | { type: "ItemsWrapper"; requiredProps: T_ItemsWrapperRequired; optionalProps: T_ItemsWrapperOptional}
    | { type: "Form"; requiredProps: T_FormRequired; optionalProps: T_FormOptional }

export const Components = [
    // Form Elements
    { type: "TextField", requiredProps: ["name", "type"], optionalProps: ["placeholder", "disabled", "autoComplete", "defaultValue", "required", "onChange"] },
    { type: "Selector", requiredProps: ["name", "options"], optionalProps: ["disabled", "onChange", "setSelected"] },
    { type: "Checkbox", requiredProps: ["name", "label"], optionalProps: ["disabled", "defaultValue", "onChange"] },
    { type: "Button", requiredProps: ["name", "label"], optionalProps: ["disabled", "defaultValue", "onChange"] },
    { type: "Radio", requiredProps: [ "value", "label"], optionalProps: ["disabled", "checked", "onChange"] },
    { type: "RadioGroup", requiredProps: ["name", "options"], optionalProps: ["onChange"] },
    { type: "PasswordField", requiredProps: ["name"], optionalProps: ["placeholder", "disabled", "onChange"] },
    // Containers
    { type: "Item", requiredProps: ["title", "children"], optionalProps: ["onHover", "onChange"] },
    { type: "ItemsWrapper", requiredProps: ["title", "items"], optionalProps: [] },
    { type: "Form", requiredProps: ["children", "onSubmit"], optionalProps: ["title", "onReset"] },
]