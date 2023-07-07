interface I_TextField {
    name: string;
    type: string;    
    placeholder?: string;    
    disabled?: boolean;    
    autoComplete?: boolean;   
    defaultValue?: string;
    required?: boolean; 
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

type T_TextField = I_TextField;
type T_TextFieldRequired = Pick<T_TextField, 'name' | 'type'>;
type T_TextFieldOptional = Omit<T_TextField, keyof T_TextFieldRequired>;

export type {
    T_TextField,
    T_TextFieldRequired,
    T_TextFieldOptional
};
