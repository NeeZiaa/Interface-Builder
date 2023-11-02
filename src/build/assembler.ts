import { createElement } from "react";
import { ComponentsParams } from "../types/components/ComponentsTypes";

interface Props {
    [key: string]: any;
}

export const assembleComponents = (components: Props) => {
    console.log('Assembling components...');
    const buildedComponents = [];
    for(const c in components) {
        let children = null;
        if(components[c].children) {
            children = (assembleComponents(components[c].children));
        }
        if(children !== null) {
            components[c].props.children = children;
        }
        buildedComponents.push(
            createElement(
                ComponentsParams[components[c].type.charAt(0).toUpperCase() + components[c].type.slice(1)].component,
                components[c].props
            )
        );
    }
    if(buildedComponents.length === 1 && buildedComponents[0] !== undefined) {
        return buildedComponents[0];
    }
    console.info('Components assembled');
    return buildedComponents;
}