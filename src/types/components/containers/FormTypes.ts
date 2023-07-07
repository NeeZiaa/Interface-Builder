interface I_Form {
    title?: string,
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    onReset?: (event: React.FormEvent<HTMLFormElement>) => void;
    children: React.ReactNode;
}

type T_Form = I_Form;
type T_FormRequired = Pick<T_Form, 'children'>;
type T_FormOptional = Omit<T_Form, keyof T_FormRequired>;

export type { T_Form, T_FormRequired, T_FormOptional };