interface I_Interface {
    label?: string;
    name: string;
    children: React.ReactNode;
    position?: string;
    width?: string;
    height?: string;
}

type T_Interface = I_Interface;
type T_InterfaceRequired = Pick<T_Interface, 'name' | 'children'>
type T_InterfaceOptional = Omit<T_Interface, keyof T_InterfaceRequired>;

export type { T_Interface, T_InterfaceRequired, T_InterfaceOptional };