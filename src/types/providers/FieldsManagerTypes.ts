type T_AddField = (field: string) => boolean
type T_DeleteField = (field: string) => void

type T_FieldsManagerContext = {
    count: React.MutableRefObject<number>,
    addField: T_AddField,
    deleteField: T_DeleteField
}

type T_NullableFieldsManagerContext = {
    count: React.MutableRefObject<number> | null,
    addField: T_AddField | null,
    deleteField: T_DeleteField | null
}

export type { T_FieldsManagerContext, T_NullableFieldsManagerContext, T_AddField, T_DeleteField };