import React from 'react';
import toJSON from 'enzyme-to-json';
import { shallow } from 'enzyme';
import BoardChampion from '.';

const mockKassadin = { name: 'Kassadin', cost: 1, synergies: ['void', 'sorcerer'] };

describe('<BoardChampion />', () => {
  it('render properly and matches snapshot', () => {
    const wrapper = shallow(<BoardChampion champion={mockKassadin} />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
