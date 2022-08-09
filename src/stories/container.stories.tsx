import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Base} from '../components/base';
import {Container} from '../components/layout/container';

export default {
    title: 'Components/Layout/Container',
    component: Container,
    argTypes: {
        backgroundColor: {control: 'color'}
    },
    decorators: [story => <Base padding="20px" bodyHeight={false}>{story()}</Base>]
} as ComponentMeta<typeof Container>


const Template: ComponentStory<typeof Container> = args => <Container {...args}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quaerat laudantium odio dolor deserunt accusamus consequatur error vel velit voluptate corrupti, perferendis dolore earum beatae. Temporibus officia quae, tempore laborum maxime voluptas delectus earum eum tempora perferendis, quis cupiditate itaque illo! Ex aut deserunt minus quos, consectetur obcaecati explicabo laboriosam vel, quasi ratione, adipisci necessitatibus et tenetur enim provident ut.
</Container>

export const Default = Template.bind({});
Default.storyName = 'By default';
