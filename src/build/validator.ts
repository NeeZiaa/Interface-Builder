import { ComponentsParams } from "../types/components/ComponentsTypes";

interface Props {
    [key: string]: any;
}

export const validateContext = (context: Props): boolean => {

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

    if (!context.position) {
        throw new Error('Context must have a position');
    } 

    return true;

}

export const validateComponent = (type: string, props: Props, children: Props|null): boolean =>  {

    type = type.charAt(0).toUpperCase() + type.slice(1);

    if (!type) {
        throw new Error('Component must have a type');
    }    

    if (!ComponentsParams[type]) {
        throw new Error(`Component ${type} is not a valid component`);
    }

    // if (!props) {
    //     throw new Error('Component must have props');
    // }

    validateComponentProps(type, props);

    if(children && children.length > 0) {
        for (const c in children) {
            if (typeof children[c] === "object" && children[c] !== null) {
                const nestedComponentType = c;
                const nestedProps = children[c].props;
                const nestedChildren = children[c];
                delete nestedChildren.props;

                validateComponent(
                    nestedComponentType,
                    nestedProps,
                    nestedChildren
                );

            }
        }
    }
    return true;
}

export const validateComponentProps = (type: string, props: Props): boolean => {

    const requiredProps = (ComponentsParams as Props)[type as keyof typeof ComponentsParams]["requiredProps"];

    const missingProps = Object.keys(requiredProps).filter(
        prop => !(prop in props)
    );
  
    if (missingProps.length > 0) {

        console.error(
            `Les propriétés suivantes sont manquantes pour le composant ${type}: ${missingProps.join(", ")}`
        );

        return false;
    }

    return true;
}