import React from 'react';
import Form from '../../components/containers/Form';
import Header from '../../components/containers/Header';
import TextField from '../../components/formsElements/TextField';
import Selector from '../../components/formsElements/Selector';
import Checkbox from '../../components/formsElements/Checkbox';
import Button from '../../components/formsElements/Button';
import Radio from '../../components/formsElements/Radio';
import RadioGroup from '../../components/formsElements/RadioGroup';
import PasswordField from '../../components/formsElements/PasswordField';
import Item from '../../components/containers/Item';
import Field from '../../components/Field';
import Title from '../../components/display/Title';
import Footer from '../../components/containers/Footer';

interface I_Components {
    [key: string]: {
        requiredProps: string[];
        optionalProps: string[];
        component: React.FC<any>;
    };
}

export type T_Components = I_Components;

export const ComponentsParams: T_Components = {
    // Form Elements
    TextField: { 
        requiredProps: ["name", "type"], 
        optionalProps: ["placeholder", "disabled", "autoComplete", "defaultValue", "required", "onChange"],
        component: TextField 
    },
    Selector: { 
        requiredProps: ["name", "options"], 
        optionalProps: ["disabled", "onChange", "setSelected"],
        component: Selector
    },
    Checkbox: { 
        requiredProps: ["name", "label"], 
        optionalProps: ["disabled", "defaultValue", "onChange"],
        component: Checkbox
    },
    Button: { 
        requiredProps: ["name", "label"], 
        optionalProps: ["disabled", "defaultValue", "onChange"],
        component: Button
    },
    Radio: { 
        requiredProps: [ "value", "label"], 
        optionalProps: ["disabled", "checked", "onChange"],
        component: Radio
    },
    RadioGroup: { 
        requiredProps: ["name", "options"], 
        optionalProps: ["onChange"],
        component: RadioGroup
    },
    PasswordField: { 
        requiredProps: ["name"], 
        optionalProps: ["placeholder", "disabled", "onChange"], 
        component: PasswordField
    },
    // Containers
    Item: { 
        requiredProps: ["title", "children"], 
        optionalProps: ["onHover", "onChange"] ,
        component: Item
    },
    Form: { 
        requiredProps: ["onSubmit"], 
        optionalProps: ["title", "onReset"],
        component: Form 
    },
    Header: { 
        requiredProps: [], 
        optionalProps: [], 
        component: Header 
    },
    Field: { 
        requiredProps: [], 
        optionalProps: ["label", 'icon'],
        component: Field
    },
    Footer: { 
        requiredProps: [], 
        optionalProps: [],
        component: Footer
    },
    // Display
    Title: { 
        requiredProps: ["text"], 
        optionalProps: ["size", "color", "font", "style"],
        component: Title
    },
}

// export const FocusableComponents: string[] = [
//     "TextField",
//     "Selector",
//     "Checkbox",
//     "Button",
//     "RadioGroup",
//     "PasswordField",
//     "Item",
// ];