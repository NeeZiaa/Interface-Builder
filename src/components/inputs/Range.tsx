import React from 'react';
import { RangeProps } from '../../types/components/formElements/RangeTypes';

const Range: React.FC<RangeProps> = ({ name, min, max, step=1, defaultValue=1 }) => {
    return (
        <input type="range" name={name} min={min} max={max} step={step} defaultValue={defaultValue} />
    );
};

export default Range;