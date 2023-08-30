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

export const assembler = (components: Props) => {
    console.log('Assembling components...');
    const buildedComponents = [];
    for(const c in components) {
        if(components[c].length > 1) {
            const nestedComponents = components[c];
            delete nestedComponents.props;
            assembler(nestedComponents);
        }
        console.log(c);
        buildedComponents.push(
            createElement(
                ComponentsParams[c].component,
                components[c].props
            )
        );
    }
    return buildedComponents;
}