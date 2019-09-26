import React from 'react';
import toJSON from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';
import { wrapInTestContext } from 'react-dnd-test-utils';
import BoardChampion from '.';
import * as Context from '../Context';

const mockKassadin = {
  name: 'Kassadin',
  cost: 1,
  synergies: ['void', 'sorcerer'],
  items: []
};
const removeChampionMock = jest.fn();
jest
  .spyOn(Context, 'useDispatch')
  .mockImplementation(() => ({ removeChampion: removeChampionMock }));

describe('<BoardChampion />', () => {
  it('render properly and matches snapshot', () => {
    const BoardChampionWrapped = wrapInTestContext(BoardChampion);
    const wrapper = shallow(<BoardChampionWrapped champion={mockKassadin} index={0} />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
