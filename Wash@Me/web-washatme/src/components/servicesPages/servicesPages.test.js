import React from 'react';
import { shallow } from 'enzyme';
import ServicesPages from './servicesPages';

describe('ServicesPages', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<ServicesPages />);
    expect(wrapper).toMatchSnapshot();
  });
});
