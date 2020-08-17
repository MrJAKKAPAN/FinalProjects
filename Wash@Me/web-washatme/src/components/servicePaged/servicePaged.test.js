import React from 'react';
import { shallow } from 'enzyme';
import ServicePaged from './servicePaged';

describe('ServicePaged', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<ServicePaged />);
    expect(wrapper).toMatchSnapshot();
  });
});
