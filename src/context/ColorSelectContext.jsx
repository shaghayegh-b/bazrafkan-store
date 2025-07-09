import React, { createContext, useContext, useState } from "react";

// 1. ساخت Context
const ColorSelectContext = createContext();

// 2. ساخت Provider
export function ColorSelectProvider({ children }) {
    const [selectedColors, setSelectedColors] = useState([]);

    function addColor(colorName) {
      setSelectedColors(prev => {
        const existing = prev.find(c => c.color === colorName);
        if (existing) {
          return prev.map(c =>
            c.color === colorName ? { ...c, quantity: c.quantity + 1 } : c
          );
        } else {
          return [...prev, { color: colorName, quantity: 1 }];
        }
      });
    }

    return (
      <ColorSelectContext.Provider
        value={{
          selectedColors,
          setSelectedColors,
          addColor
        }}
      >
        {children}
      </ColorSelectContext.Provider>
    );
  }

// 3. هوک آماده استفاده برای راحتی
export function useColorSelect() {
  return useContext(ColorSelectContext);
}
