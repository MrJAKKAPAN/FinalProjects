import React from 'react';
import { shallow } from 'enzyme';
import ServicesCreate from './servicesCreate';

describe('ServicesCreate', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<ServicesCreate />);
    expect(wrapper).toMatchSnapshot();
  });
});
