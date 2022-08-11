import React from 'react';
import classnames from 'classnames';
import s from './row.module.scss';

export interface RowProps {
    children?: React.ReactNode,
    fluid?: boolean,
    backgroundColor?: string,
    gap?: number,
    style?: {}
};

export const Row: React.FC<RowProps> = ({children, fluid=true, backgroundColor='transparent', gap=0, style, ...props}) => {


    return (
        <div className={classnames(
            s.row,
            s['gap'+gap],
            {
                [s.fluidCols]: fluid
            }
        )}
        {...props}
        style={{
            backgroundColor: backgroundColor,
            ...style
        }}
        >
            {children}
        </div>
    );
};
