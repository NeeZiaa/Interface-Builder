export const getNthChild = (element: HTMLElement): number => {
    const parent = element.parentNode;
    if (!parent) return -1;
    const children = Array.from(parent.children);
    const index = children.indexOf(element);
    return index + 1;
};