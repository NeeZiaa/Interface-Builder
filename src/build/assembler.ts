import { createElement } from "react";
import { ComponentsParams } from "../types/components/ComponentsTypes";

interface Props {
    [key: string]: any;
}

export const assembler = (components: Props) => {
    console.log('Assembling components...');
    const buildedComponents = [];
    for(const c in components) {
        let children = null;
        if(components[c].children) {
            children = (assembler(components[c].children));
        }
        if(children !== null) {
            components[c].props.children = children;
        }
        buildedComponents.push(
            createElement(
                ComponentsParams[components[c].type].component,
                components[c].props
            )
        );
    }
    if(buildedComponents.length === 1 && buildedComponents[0] !== undefined) {
        return buildedComponents[0];
    }
    return buildedComponents;
}