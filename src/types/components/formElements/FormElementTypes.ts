interface I_Field {
    icon: string;
    label: string;
    children: React.ReactNode;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

type T_Field = I_Field;

export type { T_Field}