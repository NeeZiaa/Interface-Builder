const contextChecker = (context: any) => {
    if (!context) {
        throw new Error('context is required');
    }
    if (!context.theme) {
        throw new Error('context must have a theme');
    }
    if (!context.font) {
        throw new Error('context must have a font');
    }
    if (!context.style) {
        throw new Error('context must have a style');
    }
    return true;
}