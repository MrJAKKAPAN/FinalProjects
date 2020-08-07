import React from 'react';
import { shallow } from 'enzyme';
import RevenueEdit from './revenueEdit';

describe('RevenueEdit', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<RevenueEdit />);
    expect(wrapper).toMatchSnapshot();
  });
});
