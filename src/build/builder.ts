import { assembler } from "./assembler";
import { validateComponent, validateContext } from "./validator";

export const builder = (data: { [key: string]: any }) => {

    const { context, components } = data;

    if(validateContext(context)) {
        console.log('Context is valid');
    }

    for (const c in components) {        
        const nestedComponents = null;  
        if(components[c].length > 1) { 
            const nestedComponents = components[c];         
            delete nestedComponents.props;
        }
        const type = components[c].type;
        if(validateComponent(type, components[c].props, nestedComponents)) {
            console.log(`Component ${type} is valid`);
        }
    }

    return assembler(components);

}