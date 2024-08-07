// components/Button.tsx

import React from 'react';

type ButtonProps = {
    label: string;
    id: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    color?: string;
    textColor?: string;
    variant?: 'filled' | 'outlined' | 'text'; // กำหนดค่าที่เป็นไปได้สำหรับ variant
    disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
    label,
    id,
    onClick,
    color = '#0070f3',
    textColor = '#ffffff',
    variant = 'filled',
    disabled = false,
}) => {
    // Styles ตาม variant
    const getButtonStyles = () => {
        switch (variant) {
            case 'outlined':
                return {
                    backgroundColor: 'transparent',
                    border: `2px solid ${color}`,
                    color: color,
                };
            case 'text':
                return {
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: color,
                };
            default:
                return {
                    backgroundColor: color,
                    border: 'none',
                    color: textColor,
                };
        }
    };

    const styles = getButtonStyles();

    return (
        <button
            className='px-3 py-2 m-1'
            id={id}
            onClick={onClick}
            style={{
                ...styles,
                padding: '10px 20px',
                borderRadius: '4px',
                cursor: 'pointer',
                opacity: disabled ? 0.5 : 1,
                pointerEvents: disabled ? 'none' : 'auto',
            }}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default Button;
