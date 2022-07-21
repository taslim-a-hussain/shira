import React, { FC, ReactNode } from 'react';
import './global.scss';
import s from './base.module.scss';

export interface BaseProps {
    children: ReactNode,
    backgroundColor?: string,
    padding?: string,
    margin?: string,
    bodyHeight?: boolean,
    style?: {}
};

export const Base: FC<BaseProps> = ({
    children, backgroundColor, padding, margin, bodyHeight=true, style, ...props
}) => {
    return (
        <div className={`${s.main}`}
        style={{
            backgroundColor,
            padding,
            margin,
            height: bodyHeight ? '100vh' : 'auto',
            ...style
        }}
        {...props}
        >
            {children}
        </div>
    );
};
