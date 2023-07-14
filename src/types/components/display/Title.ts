interface I_Title {
    text: string;
    size?: number;
    color?: string;
    font?: string;
    style?: string;
}

type T_Title = I_Title;
type T_TitleRequired = Pick<T_Title, 'text'>;
type T_TitleOptional = Omit<T_Title, keyof T_TitleRequired>;

export type {
    T_Title,
    T_TitleRequired,
    T_TitleOptional
};