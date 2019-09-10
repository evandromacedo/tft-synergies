import React from 'react';
import toJSON from 'enzyme-to-json';
import { shallow } from 'enzyme';
import ClassOrOrigin from '.';

describe('<ClassOrOrigin />', () => {
  it('render properly and matches snapshot', () => {
    const wrapper = shallow(<ClassOrOrigin type="demon" />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
