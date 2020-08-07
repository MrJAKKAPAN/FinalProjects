import React from 'react';
import { shallow } from 'enzyme';
import RevenueCreate from './revenueCreate';

describe('RevenueCreate', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<RevenueCreate />);
    expect(wrapper).toMatchSnapshot();
  });
});
