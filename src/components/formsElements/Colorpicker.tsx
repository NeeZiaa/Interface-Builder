import React, { useState } from "react";

interface ColorPickerProps {
    label?: string,
    defaultColor: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const ColorPicker: React.FC<ColorPickerProps> = ({ defaultColor="#000000", onChange }) => {
    const [color, setColor] = useState(defaultColor);

    const onColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setColor(event.target.value);
        onChange(event);
    }

    return (
        <input
            type="color"
            value={color}
            onChange={onColorChange}
        />
    );
}

export default ColorPicker;