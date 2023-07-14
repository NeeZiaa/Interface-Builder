interface I_Button {
    label: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}

type T_Button = I_Button;
type T_ButtonRequired = Pick<T_Button, 'label'>;
type T_ButtonOptional = Omit<T_Button, keyof T_ButtonRequired>;