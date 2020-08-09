import React from 'react';
import { shallow } from 'enzyme';
import Service from './service';

describe('Service', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Service />);
    expect(wrapper).toMatchSnapshot();
  });
});
