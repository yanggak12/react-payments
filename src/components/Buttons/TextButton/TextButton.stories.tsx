import { ComponentMeta, ComponentStory } from '@storybook/react';
import TextButton from './TextButton';

export default {
  title: 'TextButton',
  component: TextButton,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof TextButton>;

const Template: ComponentStory<typeof TextButton> = args => (
  <TextButton {...args}>
    <div>Button</div>
  </TextButton>
);

export const Default = Template.bind({});
