import React from 'react';
import classnames from 'classnames';
import s from './col.module.scss';

export interface ColProps {
    children?: React.ReactNode;
    xs?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    sm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    md?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    lg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    xl?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    xxl?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    style?: {}
};

export const Col: React.FC<ColProps> = ({children, xs=1, sm, md, lg, xl, xxl, style, ...props}) => {
    return (
        <div className={classnames(
            {
                [s['xs'+xs]]: xs,
                [s['sm'+sm]]: sm,
                [s['md'+md]]: md,
                [s['lg'+lg]]: lg,
                [s['xl'+xl]]: xl,
                [s['xxl'+xxl]]: xxl,
            }
        )}
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
