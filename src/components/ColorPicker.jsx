/* eslint-disable no-unused-vars */
import React from 'react';
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';

import { state } from '../store';

export const ColorPicker = () => {
    const snap = useSnapshot(state);

    return (
        <div className="absolute left-full ml-3">
            <SketchPicker
                color={snap.color} // Current color
                disableAlpha
                onChange={(color) => (state.color = color.hex)} // Update state color
                presetColors={[
                    '#EFBD48', // Default Yellow
                    '#009F8C', // Teal
                    '#FF5F7E', // Pink
                    '#D4AF37', // Gold
                    '#1C1C1E', // Black
                    '#FFFFFF', // White
                    '#3D5AFE', // Blue
                    '#FFC107', // Amber
                    '#8E44AD', // Purple
                    '#E74C3C', // Red
                    '#27AE60', // Green
                    '#34495E', // Dark Gray
                    '#FF9933',
                ]}
            />
        </div>
    );
};

