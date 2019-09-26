import React from 'react';
import { shallow } from 'enzyme';
import * as S from './styled';
import * as Context from '../Context';
import Board from '.';

const championsMock = [
  { name: 'Kassadin', cost: 1, synergies: ['void', 'sorcerer'] },
  { name: 'Ahri', cost: 2, synergies: ['wild', 'sorcerer'] },
  { name: 'Aatrox', cost: 3, synergies: ['demon', 'blademaster'] },
  { name: 'Akali', cost: 4, synergies: ['ninja', 'assassin'] },
  { name: 'Anivia', cost: 5, synergies: ['glacial', 'elementalist'] }
];

const removeChampionMock = jest.fn();
jest
  .spyOn(Context, 'useDispatch')
  .mockImplementation(() => ({ removeChampion: removeChampionMock }));

describe('<Board />', () => {
  it('renders properly', () => {
    jest.spyOn(Context, 'useStore').mockImplementation(() => ({ board: [] }));
    shallow(<Board />);
  });

  it('renders "No champions selected yet" when no champion is passed', () => {
    jest.spyOn(Context, 'useStore').mockImplementation(() => ({ board: [] }));
    const wrapper = shallow(<Board />);
    const Text = wrapper.find(S.Text);
    expect(Text.exists()).toBeTruthy();
    expect(Text.text()).toMatch('No champion selected yet...');
  });

  it('renders BoardChampions when champions are passed', () => {
    jest.spyOn(Context, 'useStore').mockImplementation(() => ({ board: championsMock }));
    const wrapper = shallow(<Board />);
    const BoardChampions = wrapper.find(S.BoardChampions);
    expect(BoardChampions.exists()).toBeTruthy();
    expect(BoardChampions.children().length).toBe(5);
  });
});
