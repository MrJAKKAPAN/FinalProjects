import React from 'react';
import { shallow } from 'enzyme';
import CustomerEdit from './customerEdit';

describe('CustomerEdit', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<CustomerEdit />);
    expect(wrapper).toMatchSnapshot();
  });
});
