import { Components } from "../types/components/ComponentsTypes";

interface Props {
    [key: string]: any;
}

const validateContext = (context: Props): void => {

    if (!context) {
        throw new Error('Context must have a value');
    }

    if (!context.theme) {
        throw new Error('Context must have a theme');
    }

    if (!context.font) {
        throw new Error('Context must have a font');
    }

    if (!context.style) {
        throw new Error('Context must have a style');
    }

    if (context.theme !== 'light' && context.theme !== 'dark') {
        throw new Error('Context theme must be light or dark');
    }

    if (context.font !== 'arial' && context.font !== 'times') {
        throw new Error('Context font must be arial or times');
    }

    if (context.style !== 'normal' && context.style !== 'italic') {
        throw new Error('Context style must be normal or italic');
    } 

}

const validateComponent = (type: string, props: Props): void =>  {

    if (!type) {
        throw new Error('Component must have a type');
    }    

    if (!Components[type as keyof typeof Components]) {
        throw new Error(`Component ${type} is not a valid component`);
    }

    if (!props) {
        throw new Error('Component must have props');
    }

    validateComponentProps(type, props);
}

const validateComponentProps = (type: string, props: Props): boolean => {

    const requiredProps = (Components as Props)[type as keyof typeof Components]["requiredProps"];

    const missingProps = Object.keys(requiredProps).filter(
        prop => !(prop in props)
    );
  
    if (missingProps.length > 0) {
        console.error(
            `Les propriétés suivantes sont manquantes pour le composant ${type}: ${missingProps.join(", ")}`
        );
        return false;
    }

    for (const prop in props) {
        if (typeof props[prop] === "object" && props[prop] !== null) {
            const nestedComponentType = (props[prop] as {componentType: string}).componentType;
            const nestedProps = props[prop].props;
            validateComponentProps(
                nestedComponentType,
                nestedProps
            );
        }
    }

    return true;
}