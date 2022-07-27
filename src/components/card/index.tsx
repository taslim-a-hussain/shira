import React from 'react';
import s from './card.module.scss';

export const Card = () => {
    return (
        <div className={`${s.card}`}>
            <div className={`${s.cardTitle}`}>Card Title</div>
            <div className={`${s.cardBody}`}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, aperiam eveniet.Eos tempora <a href="#">This is a link</a> incidunt quaerat laborum eius aliquam fuga. Consectetur nemo incidunt porro explicabo ut quis voluptatibus expedita nihil officia.
            </div>
        </div>
    );
};
