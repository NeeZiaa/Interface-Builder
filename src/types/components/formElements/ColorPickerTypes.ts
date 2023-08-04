export interface I_ColorPicker {
    name: string,
    defaultColor?: string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

type T_ColorPicker = I_ColorPicker;
type T_ColorPickerRequired = Pick<I_ColorPicker, "name">;
type T_ColorPickerOptional = Omit<I_ColorPicker, keyof T_ColorPickerRequired>;


export type {
    T_ColorPicker,
    T_ColorPickerRequired,
    T_ColorPickerOptional
};