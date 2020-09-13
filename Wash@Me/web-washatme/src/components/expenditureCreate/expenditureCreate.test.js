import React from 'react';
import { shallow } from 'enzyme';
import ExpenditureCreate from './expenditureCreate';

describe('ExpenditureCreate', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<ExpenditureCreate />);
    expect(wrapper).toMatchSnapshot();
  });
});
