import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import {Base} from '../components/base';

import { Button } from '../components/button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  decorators: [story => <Base padding="20px" bodyHeight={false}>{story()}</Base>]
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...actions('onClick', 'onMouseOver')} {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Large',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Small',
};
