import { T_Form, T_FormOptional, T_FormRequired } from "./containers/FormTypes";
import { T_Item, T_ItemOptional, T_ItemRequired, T_ItemsWrapper, T_ItemsWrapperOptional, T_ItemsWrapperRequired } from "./containers/ItemTypes";
import { T_Checkbox, T_CheckboxRequired } from "./formElements/CheckBoxTypes";
import { T_ColorPicker, T_ColorPickerOptional, T_ColorPickerRequired } from "./formElements/ColorPicker";
import { T_PasswordField, T_PasswordFieldOptional, T_PasswordFieldRequired } from "./formElements/PasswordFieldTypes";
import { T_Radio, T_RadioGroup, T_RadioGroupOptional, T_RadioGroupRequired, T_RadioOptional, T_RadioRequired } from "./formElements/RadioTypes";
import { T_Selector, T_SelectorOptional, T_SelectorRequired } from "./formElements/SelectorTypes";
import { T_TextField, T_TextFieldOptional, T_TextFieldRequired } from "./formElements/TextFieldTypes";

export type ComponentType = 
    // Form Elements
    | { type: "TextField"; props: T_TextField, requiredProps: T_TextFieldRequired; optionalProps: T_TextFieldOptional }
    | { type: "Selector"; props: T_Selector, requiredProps: T_SelectorRequired; optionalProps: T_SelectorOptional }
    | { type: "Checkbox"; props: T_Checkbox, requiredProps: T_CheckboxRequired; optionalProps: T_CheckboxRequired }
    | { type: "Radio"; props: T_Radio, requiredProps: T_RadioRequired; optionalProps: T_RadioOptional }
    | { type: "RadioGroup"; props: T_RadioGroup, requiredProps: T_RadioGroupRequired; optionalProps: T_RadioGroupOptional }
    | { type: "PasswordField"; props: T_PasswordField, requiredProps: T_PasswordFieldRequired; optionalProps: T_PasswordFieldOptional }
    | { type: "ColorPicker"; props: T_ColorPicker, requiredProps: T_ColorPickerRequired; optionalProps: T_ColorPickerOptional}
    // Containers
    | { type: "Item"; props: T_Item, requiredProps: T_ItemRequired; optionalProps: T_ItemOptional}
    | { type: "ItemsWrapper"; props: T_ItemsWrapper, requiredProps: T_ItemsWrapperRequired; optionalProps: T_ItemsWrapperOptional}
    | { type: "Form"; props: T_Form, requiredProps: T_FormRequired; optionalProps: T_FormOptional }

type T_ComponentType = Omit<ComponentType[], 'requiredProps' | 'optionnalProps'> & { requiredProps: string[], optionalProps: string[] };


// export const Components = [
//     // Form Elements
//     { type: "TextField", requiredProps: ["name", "type"], optionalProps: ["placeholder", "disabled", "autoComplete", "defaultValue", "required", "onChange"] },
//     { type: "Selector", requiredProps: ["name", "options"], optionalProps: ["disabled", "onChange", "setSelected"] },
//     { type: "Checkbox", requiredProps: ["name", "label"], optionalProps: ["disabled", "defaultValue", "onChange"] },
//     { type: "Button", requiredProps: ["name", "label"], optionalProps: ["disabled", "defaultValue", "onChange"] },
//     { type: "Radio", requiredProps: [ "value", "label"], optionalProps: ["disabled", "checked", "onChange"] },
//     { type: "RadioGroup", requiredProps: ["name", "options"], optionalProps: ["onChange"] },
//     { type: "PasswordField", requiredProps: ["name"], optionalProps: ["placeholder", "disabled", "onChange"] },
//     // Containers
//     { type: "Item", requiredProps: ["title", "children"], optionalProps: ["onHover", "onChange"] },
//     { type: "ItemsWrapper", requiredProps: ["title", "items"], optionalProps: [] },
//     { type: "Form", requiredProps: ["children", "onSubmit"], optionalProps: ["title", "onReset"] },
// ]

export const Components = {
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