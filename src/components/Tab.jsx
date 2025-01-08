/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { useSnapshot } from 'valtio';
import { state } from '../store';

export const Tab = ({ tab, isFilterTab, isActiveTab, handleClick }) => {
    const snap = useSnapshot(state);

    // Active styles for filter tabs
    const activeStyles = {
        backgroundColor: isFilterTab && isActiveTab ? snap.color : 'transparent',
        opacity: isFilterTab && isActiveTab ? 0.5 : 1,
    };

    // Classnames for the tab button
    const getClassNames = () => {
        return `tab-btn ${isFilterTab ? 'rounded-full glassmorphism' : 'rounded-md'}`;
    };

    return (
        <div
            className={getClassNames()}
            onClick={handleClick}
            style={activeStyles}
        >
            <img
                src={tab.icon}
                alt={tab.name}
                className={`${isFilterTab ? 'w-16 h-16' : 'w-20 h-20'} object-contain`}
            />
        </div>
    );
};
