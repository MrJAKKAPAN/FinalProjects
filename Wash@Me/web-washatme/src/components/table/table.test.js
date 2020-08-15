import React from 'react';
import { shallow } from 'enzyme';
import Table from './table';

describe('Table', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Table />);
    expect(wrapper).toMatchSnapshot();
  });
});
