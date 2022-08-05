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


const Template: ComponentStory<typeof Card> = (args) => <Card  {...args}>
    This is the body of the Card component.
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia voluptas doloremque tenetur veniam autem amet dolorem perferendis debitis reprehenderit maxime.
    <div>
        <a href="#">Link to someplace</a>
    </div>
</Card>;

/** 
 * Base component resets the browser CSS
*/
export const Default = Template.bind({});
Default.storyName = 'By default';

// Default.args = {
//     title: 'Card Title',
//     backgroundColor: '#F3F8F2', 
//     titleColor: '#6c757d', 
//     bodyColor: '#757575', 
//     borderColor: '#212529',
//     allowHover: true,
//     boxShadow: true,
//     borderStyle: 'none',
//     borderWidth: 1, 
//     borderRadius: 10, 
//     horizontalShadow: 2, 
//     verticalShadow: 0, 
//     blur: 8, 
//     spread: 2, 
//     shadowDarkness: 0.35
// }
