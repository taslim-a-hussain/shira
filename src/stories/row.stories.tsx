import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Base} from '../components/base';
import {Row} from '../components/layout/row';
import {Col} from '../components/layout/col';

export default {
    title: 'Components/Layout/Row',
    component: Row,
    argTypes: {
        backgroundColor: {control: 'color'}
    },
    decorators: [story => <Base padding="20px" bodyHeight={false}>{story()}</Base>]
} as ComponentMeta<typeof Row>;

const Template: ComponentStory<typeof Row> = args => <Row {...args}>
    <Col>Column 1</Col>
    <Col>Column 2</Col>
    <Col>Column 3</Col>
</Row>


export const Default = Template.bind({});
Default.storyName = 'By default';
