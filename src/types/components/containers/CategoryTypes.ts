interface I_Category {
    label: string;
    children: React.ReactNode;
    onHover?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

type T_Category = I_Category;
type T_CategoryRequired = Pick<T_Category, 'label' | 'children'>
type T_CategoryOptional = Omit<T_Category, keyof T_CategoryRequired>;

export type { T_Category, T_CategoryRequired, T_CategoryOptional };