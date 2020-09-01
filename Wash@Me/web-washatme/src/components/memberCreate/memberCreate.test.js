import React from 'react';
import { shallow } from 'enzyme';
import MemberCreate from './memberCreate';

describe('MemberCreate', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<MemberCreate />);
    expect(wrapper).toMatchSnapshot();
  });
});
