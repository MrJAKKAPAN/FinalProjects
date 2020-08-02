import React from 'react';
import { shallow } from 'enzyme';
import MemberEdit from './memberEdit';

describe('MemberEdit', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<MemberEdit />);
    expect(wrapper).toMatchSnapshot();
  });
});
