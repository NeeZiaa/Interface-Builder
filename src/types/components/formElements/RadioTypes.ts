interface I_Radio {
    name: string;
    value: string;
    label: string;
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface I_RadioGroup {
    name: string;
    options: Omit<T_Radio, 'name'>[];
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

type T_Radio = I_Radio;
type T_RadioRequired = Pick<T_Radio, 'value' | 'label'>;
type T_RadioOptional = Omit<T_Radio, keyof T_RadioRequired>;

type T_RadioGroup = I_RadioGroup;
type T_RadioGroupRequired = Pick<T_RadioGroup, 'name' | 'options'>;
type T_RadioGroupOptional = Omit<T_RadioGroup, keyof T_RadioGroupRequired>;

export type {
    T_Radio,
    T_RadioRequired,
    T_RadioOptional,
    T_RadioGroup,
    T_RadioGroupRequired,
    T_RadioGroupOptional
};
