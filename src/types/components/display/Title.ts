interface I_Title {
    children: React.ReactNode; // Text
    size?: number; // Number between 1 and 6
    color?: string; // Hex color
    font?: string; // Font family
}

type T_Title = I_Title;
type T_TitleRequired = Pick<T_Title, 'children'>;
type T_TitleOptional = Omit<T_Title, keyof T_TitleRequired>;

export type {
    T_Title,
    T_TitleRequired,
    T_TitleOptional
};