import React from 'react';
import toJSON from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { wrapInTestContext } from 'react-dnd-test-utils';
import BoardChampion from '.';
import * as Context from '../Context';

const mockKassadin = { name: 'Kassadin', cost: 1, synergies: ['void', 'sorcerer'] };
jest.spyOn(Context, 'useStore').mockImplementation(() => ({ board: [] }));

describe('<BoardChampion />', () => {
  it('render properly and matches snapshot', () => {
    const BoardChampionWrapped = wrapInTestContext(BoardChampion);
    const wrapper = shallow(<BoardChampionWrapped champion={mockKassadin} />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
