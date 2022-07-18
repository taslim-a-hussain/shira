import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Reset} from '../components/reset';

export default {
    title: 'Components/Reset',
    component: Reset
} as ComponentMeta<typeof Reset>;


const Template: ComponentStory<typeof Reset> = () => <Reset />;

export const Default = Template.bind({});
