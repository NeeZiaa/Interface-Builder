import { assembleComponents } from "./assembler";
import { validateComponent, validateContext } from "./validator";

export const builder = (data: { [key: string]: any }) => {

    const { context, components } = data;

    if(validateContext(context)) {
        console.log('Context is valid');
    }

    for (const c in components) {        
        const nestedComponents = null;  
        if(components[c].lenght > 1) { 
            const nestedComponents = components[c];         
            delete nestedComponents.props;
        }
        if(validateComponent(c, components[c].props, nestedComponents)) {
            console.log(`Component ${c} is valid`);

        }
    }

    assembleComponents(components);

}