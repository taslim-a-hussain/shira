import React, {FC} from 'react';
import '../../scss/functions.scss';
import s from './card.module.scss';

export interface CardProps {
    backgroundColor?: string;
    titleColor?: string;
    bodyColor?: string;
    borderColor?: string;
    style?: {}
};

export const Card: FC<CardProps> = ({backgroundColor, titleColor, bodyColor, borderColor, style, ...props}) => {
    return (
        <div className={`${s.card}`}
        style={{
            backgroundColor: backgroundColor && backgroundColor,
            borderColor: borderColor && borderColor,
        }}
        {...props}
        >
            <div className={`${s.cardTitle}`} style={{
                color: titleColor && titleColor
            }}>Card Title</div>
            <div className={`${s.cardBody}`} style={{
                color: bodyColor && bodyColor
            }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, aperiam eveniet.Eos tempora <a href="#">This is a link</a> incidunt quaerat laborum eius aliquam fuga. Consectetur nemo incidunt porro explicabo ut quis voluptatibus expedita nihil officia.
            </div>
        </div>
    );
};
