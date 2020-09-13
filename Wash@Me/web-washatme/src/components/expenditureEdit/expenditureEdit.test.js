import React from 'react';
import { shallow } from 'enzyme';
import ExpenditureEdit from './expenditureEdit';

describe('ExpenditureEdit', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<ExpenditureEdit />);
    expect(wrapper).toMatchSnapshot();
  });
});
