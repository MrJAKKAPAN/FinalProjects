import React from 'react';
import { shallow } from 'enzyme';
import Revenue from './revenue';

describe('Revenue', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Revenue />);
    expect(wrapper).toMatchSnapshot();
  });
});
