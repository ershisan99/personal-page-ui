import { Meta, Story } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Error404 } from '../src';
const meta: Meta = {
  title: '404 example',
  component: Error404,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;
const Template: Story<any> = args => (
  <BrowserRouter>
    <Error404 />
  </BrowserRouter>
);

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
