import React from 'react';
import { shallow } from 'enzyme';
import CustomerCreate from './customerCreate';

describe('CustomerCreate', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<CustomerCreate />);
    expect(wrapper).toMatchSnapshot();
  });
});
