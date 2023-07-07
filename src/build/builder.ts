const builder = (props: array) => {
    componentsChecker(props.components);
    const component = props.components.find((component: any) => component.name === props.components);
    const Component = component.component;
    return <Component {...props.props} />;
};