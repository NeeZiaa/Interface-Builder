interface InterfaceProps {
    context: {
        theme: string;
        font: string;
        style: string;
    };
    components: object[];
}

export const checker = (interfaceProps: InterfaceProps) => {
    const { context, components } = interfaceProps;
    contextChecker(context);
    componentsChecker(components);
}