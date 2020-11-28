import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {IBigBangUiDatePickerProps,  BigBangUiDatePicker, IBigBangUiDatePickerDatePickerInstance} 
from "../components/BigBangUiDatePicker/BigBangUiDatePicker";

export default {
  title: 'DatePicker/Calender',
  component: BigBangUiDatePicker,
  argTypes: {
    
  },
} as Meta;

const Template: Story<IBigBangUiDatePickerDatePickerInstance> = (args) => <BigBangUiDatePicker {...args} />;

export const Farsi = Template.bind({});
Farsi.args = {
  title:"Farasi",
  colorPrimary:'blue',
  shouldHighlightWeekends:true, 
  locale:'fa',
  value:{day: 2, month: 8, year: 1393}
};

export const English = Template.bind({});
English.args = {
  title:"English",
  colorPrimary:'blue',
  shouldHighlightWeekends:true, 
  locale:'en',
  value:{day: 10, month: 12, year: 2020}
};


