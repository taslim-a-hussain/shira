import React, { FC, ReactNode } from 'react';
import '../../scss/base/global.scss';
import s from '../../scss/base/index.module.scss';

export interface Props {
    children: ReactNode,
    backgroundColor?: string,
    padding?: string,
    margin?: string,
    bodyHeight?: boolean,
    style?: {}
};

export const Base: FC<Props> = ({
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
