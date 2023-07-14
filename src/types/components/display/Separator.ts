interface I_Separator {
    color?: string;
    width?: string;
    height?: string;
    margin?: string;
    padding?: string;
    border?: string;
    borderRadius?: string;
    boxShadow?: string;
    opacity?: string;
    cursor?: string;
    hover?: string;
    transition?: string;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

type T_Separator = I_Separator;
type T_SeparatorRequired = Pick<T_Separator, never>;
type T_SeparatorOptional = Omit<T_Separator, keyof T_SeparatorRequired>;

export type {
    T_Separator,
    T_SeparatorRequired,
    T_SeparatorOptional
};