import { T_ColorPicker } from "../../types/components/formElements/ColorPickerTypes";

const Colorpicker: React.FC<T_ColorPicker> = ( {label, name, defaultColor, onChange }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input type="color" className="form-control" id={name} name={name} defaultValue={defaultColor} onChange={onChange} />
        </div>
    );
}

export default Colorpicker;