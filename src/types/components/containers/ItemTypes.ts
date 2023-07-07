interface I_Item {
    title?: string,
    children: React.ReactNode;
    onHover?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

interface I_ItemsWrapper {
    title?: string;
    items: I_Item[];
}

type T_Item = I_Item;
type T_ItemRequired = Pick<T_Item, 'children'>;
type T_ItemOptional = Omit<T_Item, keyof T_ItemRequired>;

type T_ItemsWrapper = I_ItemsWrapper;
type T_ItemsWrapperRequired = Pick<T_ItemsWrapper, 'items'>;
type T_ItemsWrapperOptional = Omit<T_ItemsWrapper, keyof T_ItemsWrapperRequired>;

export type {
    T_Item,
    T_ItemRequired,
    T_ItemOptional,
    T_ItemsWrapper,
    T_ItemsWrapperRequired,
    T_ItemsWrapperOptional
};