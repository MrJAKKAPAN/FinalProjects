import React from 'react';
import { shallow } from 'enzyme';
import Expenditure from './expenditure';

describe('Expenditure', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Expenditure />);
    expect(wrapper).toMatchSnapshot();
  });
});
