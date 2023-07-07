interface I_PasswordField {
    label?: string;
    name: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    disabled: boolean;
}

type T_PasswordField = I_PasswordField;
type T_PasswordFieldRequired = Pick<T_PasswordField, 'name'>;
type T_PasswordFieldOptional = Omit<T_PasswordField, keyof T_PasswordFieldRequired>;

export type {
    T_PasswordField,
    T_PasswordFieldRequired,
    T_PasswordFieldOptional
};