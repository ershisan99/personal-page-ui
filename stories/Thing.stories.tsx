import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Props, UiInfoBlock } from '../src';
const meta: Meta = {
  title: 'Modal example',
  component: UiInfoBlock,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;
const Template: Story<Props> = args => <UiInfoBlock {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  open: true,
  onClose: () => {
    console.log(close);
  },
  title: 'Modal Title',
  children: <div>Modal content</div>,
};
