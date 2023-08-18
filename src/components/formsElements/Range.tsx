import React from 'react';

export interface RangeProps {
    name: string;
    min: number;
    max: number;
    step: number;
    defaultValue: number;
}

const Range: React.FC<RangeProps> = ({ name, min, max, step, defaultValue }) => {
    return (
        <input type="range" name={name} min={min} max={max} step={step} defaultValue={defaultValue} />
    );
};

export default Range;