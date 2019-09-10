import React from 'react';
import toJSON from 'enzyme-to-json';
import { shallow } from 'enzyme';
import BoardChampion from '.';

const mockKassadin = { name: 'Kassadin', cost: 1, synergies: ['void', 'sorcerer'] };

describe('<BoardChampion />', () => {
  it('render properly and matches snapshot', () => {
    const wrapper = shallow(
      <BoardChampion
        champion={mockKassadin}
        background={
          'http://raw.communitydragon.org/latest/game/assets/ux/tft/championsplashes/tft_kassadin.png'
        }
      />
    );

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
