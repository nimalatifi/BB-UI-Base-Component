import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {MyButton, MyButtonProps}  from './MyBigBang';


export default {
  title: 'Components/MyBigBang',
  component: MyButton,
  // argTypes:{
  //     color:{ control:'color'}
  // },
} as Meta;

const Template: Story<MyButtonProps> = (args) => <MyButton {...args} />;



export const Primary = Template.bind({});
Primary.args = {
    isEnable: true,
    varient: 'primary',
    title: 'primary Btn',
  };

export const Secondary = Template.bind({});
Secondary.args = {
    isEnable:false,
    varient: 'secondary',
    title: 'Secondary Btn',
  };

export const Success = Template.bind({});
Success.args = {
    isEnable:true,
    varient: 'success',
    title: 'success Btn',
  };

export const Danger = Template.bind({});
Danger.args = {
    isEnable: false,
    varient: 'danger',
    title: 'danger Btn',
  };