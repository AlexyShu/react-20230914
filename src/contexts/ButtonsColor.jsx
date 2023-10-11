import React from 'react';
import { useState } from 'react';

export const ButtonsContext = React.createContext();

export const ButtonsColorProvider = ({ children }) => {
    const [color, setColor] = useState('default');
    return (
        <ButtonsContext.Provider value={{ color, setColor }}>
            {children}
        </ButtonsContext.Provider>
    );
};