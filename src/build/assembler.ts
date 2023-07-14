import { createElement } from "react";
import PasswordField from "../components/formsElements/PasswordField";

interface Props {
    [key: string]: any;
}

export const assembler = (components: Props) => {
    console.log('Assembling components...');
    const buildedComponents = [];
    for(const c in components) {
        if(components[c].lenght > 1) {
            const nestedComponents = components[c];
            delete nestedComponents.props;
            assembler(nestedComponents);
        }
        buildedComponents.push(
            createElement(
                c,
                components[c].props
            )
        );
    }
    return buildedComponents;
}


export const assembleComponent = (components: Props) => {
    console.log('Assembling components...');

    const buildedComponents = [];
    for(const c in components) {
        buildedComponents.push(
            createElement(
                c,
                components[c].props 
            )
        );
    }

    return buildedComponents;
}