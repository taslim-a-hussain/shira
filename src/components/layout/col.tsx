import React from 'react';

export interface ColProps {
    children?: React.ReactNode;
    style?: {}
};

export const Col: React.FC<ColProps> = ({children, style, ...props}) => {
    return (
        <div
        {...props}
        style={{
            border: '1px solid black',
            ...style
        }}
        >
            {children}
        </div>
    );
};
