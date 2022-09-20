import React from 'react';
import classnames from 'classnames';
import s from './row.module.scss';

export interface RowProps {
    children?: React.ReactNode,
    fluid?: boolean,
    backgroundColor?: string,
    gap?: number,
    columnGap?: number,
    rowGap?: number,
    style?: {}
};

export const Row: React.FC<RowProps> = ({children, fluid=true, backgroundColor='transparent', gap=0, columnGap=0, rowGap=0, style, ...props}) => {


    return (
        <div className={classnames(
            s.row,
            {
                [s.fluidCols]: fluid
            }
        )}
        {...props}
        style={{
            backgroundColor: backgroundColor,
            gap: `${gap}px`,
            columnGap: `${columnGap}px`,
            rowGap: `${rowGap}px`,
            ...style
        }}
        >
            {children}
        </div>
    );
};
