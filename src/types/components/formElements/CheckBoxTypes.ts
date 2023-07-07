interface I_Checkbox {
    name: string;
    value: string;
    label: string;
    onCheck?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    checked?: boolean;
}

type T_Checkbox = I_Checkbox;
type T_CheckboxRequired = Pick<T_Checkbox, 'name' | 'value' | 'label'>;
type T_CheckboxOptional = Omit<T_Checkbox, keyof T_CheckboxRequired>;

export type {
    T_Checkbox,
    T_CheckboxRequired,
    T_CheckboxOptional
};