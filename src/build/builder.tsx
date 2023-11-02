import Interface from "../components/containers/Interface";
import { assembleComponents } from "./assembler";
import { validateComponent, validateContext } from "./validator";

export const build = (data: { [key: string]: any }) => {

    const { context, components } = data;

    if(Object.keys(data).length === 0) {
        throw new Error('Components are required');
    }

    if(validateContext(context)) {
        console.log('Context is valid');
    }

    for (const c in components) {        
        let nestedComponents = null;  
        if(components[c].length > 1) { 
            nestedComponents = components[c];         
            delete nestedComponents.props;
        }
        const type = components[c].type;
        if(validateComponent(type.charAt(0).toUpperCase() + type.slice(1), components[c].props, nestedComponents)) {
            console.log(`Component ${type} is valid`);
        }
    }

    return (
        <Interface position={context.position} name={data.name}>
            {assembleComponents(components)}
        </Interface>
    );

}