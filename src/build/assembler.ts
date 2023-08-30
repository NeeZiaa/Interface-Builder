import { createElement } from "react";
import { ComponentsParams } from "../types/components/ComponentsTypes";

interface Props {
    [key: string]: any;
}


// export const assembler = (components: Props) => {
//     console.log('Assembling components...');
//     const buildedComponents = [];
//     for(const c in components) {
//         if(components[c].length > 1) {
//             const nestedComponents = components[c];
//             delete nestedComponents.props;
//             assembler(nestedComponents);
//         }
//         console.log(c);
//         buildedComponents.push(
//             createElement(
//                 ComponentsParams[c].component,
//                 components[c].props
//             )
//         );
//     }
//     return buildedComponents;
// }

const objectWithoutKey = (object, key) => {
    const {[key]: deletedKey, ...otherKeys} = object;
    return otherKeys;
}


export const assembler = (components: Props) => {
    // console.log('Assembling components...');
    const buildedComponents = [];
    for(const c in components) {
        let children = null;
        console.log(Object.keys(components[c]).length)
        if(Object.keys(components[c]).length > 1) {
            children = (assembler(objectWithoutKey(components[c], 'props')));
            console.log("Children: ", children)
        }
        console.log("PROPS", components[c].props)
        console.log("Component type: ", c)
        // console.log("Children: ", children)
        if(children !== null) {
            components[c].props.children = children;
        }

        buildedComponents.push(
            createElement(
                ComponentsParams[c].component,
                components[c].props
            )
        );
    }
    if(buildedComponents.length === 1 && buildedComponents[0] !== undefined) {
        console.log("Returning: ", buildedComponents)
        console.log("Returning: ", buildedComponents[0])
        return buildedComponents[0];
    }
    return buildedComponents;
}