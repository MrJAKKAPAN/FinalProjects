import React from 'react';
import { shallow } from 'enzyme';
import ServicesEdit from './servicesEdit';

describe('ServicesEdit', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<ServicesEdit />);
    expect(wrapper).toMatchSnapshot();
  });
});
