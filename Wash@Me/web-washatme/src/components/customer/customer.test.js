import React from 'react';
import { shallow } from 'enzyme';
import Customer from './customer';

describe('Customer', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Customer />);
    expect(wrapper).toMatchSnapshot();
  });
});
