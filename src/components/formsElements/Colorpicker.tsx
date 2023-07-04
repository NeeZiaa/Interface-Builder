import React, { useState } from "react";

interface ColorPickerProps {
    label?: string,
    defaultColor: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const ColorPicker: React.FC<ColorPickerProps> = ({ label, defaultColor="#000000", onChange }) => {
    const [color, setColor] = useState(defaultColor);

    const onColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setColor(event.target.value);
        onChange(event);
    }

    return (
        <>
            {label && <label htmlFor="input">{label}</label>}
            <input
                type="color"
                value={color}
                onChange={onColorChange}
            />
        </>
    );
}

export default ColorPicker;