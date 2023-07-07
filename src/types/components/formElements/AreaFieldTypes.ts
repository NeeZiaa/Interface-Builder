interface I_AreaField {
    name: string;
    defaultValue?: string;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    disabled?: boolean;
    autoComplete?: boolean;
}

type T_AreaField = I_AreaField;
type T_AreaFieldRequired = Pick<T_AreaField, 'name'>;
type T_AreaFieldOptional = Omit<T_AreaField, keyof T_AreaFieldRequired>;

export type {
    T_AreaField,
    T_AreaFieldRequired,
    T_AreaFieldOptional
};