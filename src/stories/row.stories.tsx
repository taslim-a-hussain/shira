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
    <Col>Column 4</Col>
    <Col>Column 5</Col>
    <Col>Column 6</Col>
    <Col>Column 7</Col>
    <Col>Column 8</Col>
    <Col>Column 9</Col>
    <Col>Column 10</Col>
    <Col>Column 11</Col>
    <Col>Column 12</Col>
    <Col>Column 13</Col>
</Row>


export const Default = Template.bind({});
Default.storyName = 'By default';
