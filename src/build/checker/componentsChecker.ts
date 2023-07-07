const componentsChecker = (components: any) => {
    if (!components) {
        throw new Error('components is required');
    }
    if (!Array.isArray(components)) {
        throw new Error('components must be an array');
    }
    if (components.length === 0) {
        throw new Error('components must have at least one item');
    }
    components.forEach((component: any) => {
        if (!component.name) {
            throw new Error('component must have a name');
        }
        if (!component.component) {
            throw new Error('component must have a component');
        }
    }
    );
    return true;
}

function validateComponentProps(
    componentType: ComponentType,
    props: any,
    componentProps: ComponentProps
  ): boolean {
    const requiredProps = (componentProps[componentType] as ComponentProps)[
        "required"
    ] as Record<string, any>;
  
    const missingProps = Object.keys(requiredProps).filter(
        prop => !(prop in props)
    );
  
    if (missingProps.length > 0) {
        console.error(`Les propriétés suivantes sont manquantes pour le composant ${componentType}: ${missingProps.join(", ")}`);
        return false;
    }
  
    // Vérification récursive des composants imbriqués
    for (const prop in props) {
        if (typeof props[prop] === "object" && props[prop] !== null) {
            const nestedComponentType = props[prop].componentType;
            const nestedProps = props[prop].props;
            validateComponentProps(
                nestedComponentType,
                nestedProps,
                componentProps
            );
        }
    }

    return true;
}
const json = "";
const parsedJson = JSON.parse(json);

Object.keys(parsedJson).forEach(componentType => {
    const props = parsedJson[componentType];
    validateComponentProps(componentType as ComponentType, props);
});