import React, { FC } from 'react';
import s from './container.module.scss';

export interface ContainerProps {
    children?: React.ReactNode;
    fluid?: boolean;
    backgroundColor?: string;
    padding?: string;
    style?: {}
};

export const Container: FC<ContainerProps> = ({children, fluid=false, backgroundColor='transparent', padding, style, ...props}) => {
    return (
        <div
        className={fluid ? `${s.containerFluid}` : `${s.container}`}
        {...props}
        style={{
            backgroundColor: backgroundColor,
            padding: padding && padding,
            ...style
        }}
        >
            {children}
        </div>
    );
};
