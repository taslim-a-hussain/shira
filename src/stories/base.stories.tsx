import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Base} from '../components/base';

export default {
    title: 'Components/Base',
    component: Base,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
    args: {
        children: 'Sample content',
    }
} as ComponentMeta<typeof Base>;


const Template: ComponentStory<typeof Base> = (args) => <Base {...args} />;

/** 
 * Base component resets the browser CSS
*/
export const Default = Template.bind({});
Default.storyName = 'By default';
