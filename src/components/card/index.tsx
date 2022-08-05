import React, {FC, ReactNode, useState} from 'react';
import s from './card.module.scss';
const color = require('color');


export interface CardProps {
    title?: string;
    children?: ReactNode;
    backgroundColor?: string;
    titleColor?: string;
    bodyColor?: string;
    borderColor?: string;
    allowHover?: boolean;
    hoverBgColor?: string;
    hoverTitleColor?: string;
    hoverBodyColor?: string;
    borderStyle?: 'none' | 'solid' | 'dotted' | 'dashed' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset';
    borderWidth?: number;
    borderRadius?: number;
    boxShadow?: boolean;
    horizontalShadow?: number;
    verticalShadow?: number;
    blur?: number;
    spread?: number;
    shadowDarkness?: 0.10 | 0.15 | 0.20 | 0.25 | 0.30 | 0.35 | 0.40 | 0.50 | 0.55 | 0.60 | 0.65 | 0.70 | 0.75 | 0.80 | 0.85 | 0.90 | 0.95 | 1;
    style?: {};
    titleStyle?: {};
    bodyStyle?: {};
};


export const Card: FC<CardProps> = ({
    title='Card Title', children,
    backgroundColor='#F3F8F2', titleColor='#6c757d', bodyColor='#757575', borderColor='#212529', allowHover=true, hoverBgColor='', hoverTitleColor='', hoverBodyColor='', borderStyle='none', borderWidth=1, borderRadius=10, boxShadow=true, horizontalShadow=2, verticalShadow=0, blur=8, spread=2, shadowDarkness=0.35, style, titleStyle, bodyStyle, ...props
}) => {

    const [hover, setHover] = useState(() => false);

    const bgColor = hoverBgColor ? hoverBgColor : color(backgroundColor).darken(0.2);
    const headerColor = hoverTitleColor ? hoverTitleColor : color(backgroundColor).rotate(180);
    const contentColor = hoverBodyColor ? hoverBodyColor : color(backgroundColor).rotate(180);

    return (
        <div className={`${s.card}`}
        onMouseEnter={() => setHover(() => true)}
        onMouseLeave={() => setHover(() => false)}
        style={{
            backgroundColor: allowHover && hover ? bgColor : backgroundColor,
            borderColor: borderColor && borderColor,
            borderStyle: borderStyle,
            borderWidth: borderWidth+'px',
            borderRadius: borderRadius+'px',
            WebkitBoxShadow: boxShadow ? `${horizontalShadow}px ${verticalShadow}px ${blur}px ${spread}px ${color(borderColor).darken(shadowDarkness)}`: 'none',
            boxShadow: boxShadow ? `${horizontalShadow}px ${verticalShadow}px ${blur}px ${spread}px ${color(borderColor).darken(shadowDarkness)}`: 'none',
            ...style
        }}
        {...props}
        >
            <div className={`${s.cardTitle}`} style={{
                color: allowHover && hover ? headerColor : titleColor,
                ...titleStyle
            }}>{title}</div>
            <div className={`${s.cardBody}`} style={{
                color: allowHover && hover ? contentColor : bodyColor,
                ...bodyStyle
            }}>
                {children}
            </div>
        </div>
    );
};
