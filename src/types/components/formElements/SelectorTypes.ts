interface I_Selector {
    name: string;
    options: I_Options[];
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

interface I_Options {
    value: string;
    label: string;
    selected?: boolean;
}

type T_Selector = I_Selector;
type T_SelectorRequired = Pick<T_Selector, 'name' | 'options'>;
type T_SelectorOptional = Omit<T_Selector, keyof T_SelectorRequired>;

type T_Options = I_Options;
type T_OptionsRequired = Pick<T_Options, 'value' | 'label'>;
type T_OptionsOptional = Omit<T_Options, keyof T_OptionsRequired>;

export type {
    T_Selector,
    T_SelectorRequired,
    T_SelectorOptional,
    T_Options,
    T_OptionsRequired,
    T_OptionsOptional
};