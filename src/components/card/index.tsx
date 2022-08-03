import React, {FC} from 'react';
import s from './card.module.scss';
const color = require('color');


export interface CardProps {
    backgroundColor?: string;
    titleColor?: string;
    bodyColor?: string;
    borderColor?: string;
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
    backgroundColor, titleColor, bodyColor, borderColor='#212529', borderStyle='solid', borderWidth=1, borderRadius=10, boxShadow=true, horizontalShadow=2, verticalShadow=0, blur=8, spread=2, shadowDarkness=0.35, style, titleStyle, bodyStyle, ...props
}) => {
    return (
        <div className={`${s.card}`}
        style={{
            backgroundColor: backgroundColor && backgroundColor,
            borderColor: borderColor && borderColor,
            borderStyle: borderStyle,
            borderWidth: borderWidth+'px',
            borderRadius: borderRadius+'px',
            WebkitBoxShadow: boxShadow ? `${horizontalShadow}px ${verticalShadow}px ${blur}px ${spread}px ${color(borderColor).darken(shadowDarkness)}` : 'none',
            boxShadow: boxShadow ? `${horizontalShadow}px ${verticalShadow}px ${blur}px ${spread}px ${color(borderColor).darken(shadowDarkness)}` : 'none',
            ...style
        }}
        {...props}
        >
            <div className={`${s.cardTitle}`} style={{
                color: titleColor && titleColor,
                ...titleStyle
            }}>Card Title</div>
            <div className={`${s.cardBody}`} style={{
                color: bodyColor && bodyColor,
                ...bodyStyle
            }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, aperiam eveniet.Eos tempora <a href="#">This is a link</a> incidunt quaerat laborum eius aliquam fuga. Consectetur nemo incidunt porro explicabo ut quis voluptatibus expedita nihil officia.
            </div>
        </div>
    );
};
