interface I_FormElement {
    name: string;
    label: string;
    type: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
    onFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
    error: string;
    touched: boolean;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    className?: string;
    autoComplete?: string;
}

type T_FormElement = I_FormElement;

export type { T_FormElement }