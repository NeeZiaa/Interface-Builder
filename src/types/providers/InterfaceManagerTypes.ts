type T_AddInterface = () => void
type T_RemoveInterface = () => void

type T_InterfaceManagerContext = {
    count: React.MutableRefObject<number>,
    addInterface: T_AddInterface,
    removeInterface: T_RemoveInterface
}

type T_NullableInterfaceManagerContext = {
    count: React.MutableRefObject<number> | null,
    addInterface: T_AddInterface | null,
    removeInterface: T_RemoveInterface | null
}

export type { T_InterfaceManagerContext, T_NullableInterfaceManagerContext, T_AddInterface, T_RemoveInterface };