import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Card} from '../components/card';
import { Base } from '../components/base';

export default {
    title: 'Components/Card',
    component: Card,
    argTypes: {
        backgroundColor: {control: 'color'}
    },
    decorators: [story => <Base padding="20px" bodyHeight={false}>{story()}</Base>]
} as ComponentMeta<typeof Card>;


const Template: ComponentStory<typeof Card> = (args) => <Card  {...args}/>;

/** 
 * Base component resets the browser CSS
*/
export const Default = Template.bind({});
Default.storyName = 'By default';

Default.args = {
    allowHover: true,
    boxShadow: true,
    borderStyle: 'none'
}
