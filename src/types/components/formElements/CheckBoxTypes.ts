interface I_Checkbox {
    value: string;
    label: string;
    onCheck?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    checked?: boolean;
}

type T_Checkbox = I_Checkbox;
type T_CheckboxRequired = Pick<T_Checkbox, 'value' | 'label'>;
type T_CheckboxOptional = Omit<T_Checkbox, keyof T_CheckboxRequired>;

export type {
    T_Checkbox,
    T_CheckboxRequired,
    T_CheckboxOptional
};