interface I_Interface {
    label?: string;
    children: React.ReactNode;
    width?: string;
    height?: string;
}

type T_Interface = I_Interface;
type T_InterfaceRequired = Pick<T_Interface, 'children'>
type T_InterfaceOptional = Omit<T_Interface, keyof T_InterfaceRequired>;

export type { T_Interface, T_InterfaceRequired, T_InterfaceOptional };