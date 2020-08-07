import React from 'react';
import { shallow } from 'enzyme';
import ServicePage from './servicePage';

describe('ServicePage', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<ServicePage />);
    expect(wrapper).toMatchSnapshot();
  });
});
