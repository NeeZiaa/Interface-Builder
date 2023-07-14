interface I_Description {
    text: string;
    size?: number;
    color?: string;
    font?: string;
    style?: string;
}

type T_Description = I_Description;
type T_DescriptionRequired = Pick<T_Description, 'text'>;
type T_DescriptionOptional = Omit<T_Description, keyof T_DescriptionRequired>;

export type {
    T_Description,
    T_DescriptionRequired,
    T_DescriptionOptional
};