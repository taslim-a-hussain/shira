import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Col} from '../components/layout/col';

export default {
    title: 'Components/Layout/Col',
    component: Col,
    argTypes: {
        backgroundColor: {control: 'color'}
    }
} as ComponentMeta<typeof Col>

const Template: ComponentStory<typeof Col> = args => <Col {...args}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quaerat laudantium odio dolor deserunt accusamus consequatur error vel velit voluptate corrupti, perferendis dolore earum beatae. Temporibus officia quae, tempore laborum maxime voluptas delectus earum eum tempora perferendis, quis cupiditate itaque illo! Ex aut deserunt minus quos, consectetur obcaecati explicabo laboriosam vel, quasi ratione, adipisci necessitatibus et tenetur enim provident ut.
</Col>

export const Default = Template.bind({});
Default.storyName = 'By default';
