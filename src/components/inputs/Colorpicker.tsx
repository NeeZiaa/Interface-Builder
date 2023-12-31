import { T_ColorPicker } from "../../types/components/formElements/ColorPickerTypes";

const Colorpicker: React.FC<T_ColorPicker> = ( {name, defaultColor, onChange }) => {
    return (
        <input type="color" name={name} defaultValue={defaultColor} onChange={onChange} />
    );
}

export default Colorpicker;