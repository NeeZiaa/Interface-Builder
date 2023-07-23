interface I_Category {
    label: string;
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onHover?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

type T_Category = I_Category;
type T_CategoryRequired = Pick<T_Category, 'label' | 'children'>
type T_CategoryOptional = Omit<T_Category, keyof T_CategoryRequired>;

export type { T_Category, T_CategoryRequired, T_CategoryOptional };