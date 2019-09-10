import React from 'react';
import { shallow } from 'enzyme';
import Board from '.';
import * as S from './styled';

const championsMock = [
  { name: 'Kassadin', cost: 1, synergies: ['void', 'sorcerer'] },
  { name: 'Ahri', cost: 2, synergies: ['wild', 'sorcerer'] },
  { name: 'Aatrox', cost: 3, synergies: ['demon', 'blademaster'] },
  { name: 'Akali', cost: 4, synergies: ['ninja', 'assassin'] },
  { name: 'Anivia', cost: 5, synergies: ['glacial', 'elementalist'] }
];

describe('<Board />', () => {
  it('renders properly', () => {
    shallow(<Board />);
  });

  it('renders BoardChampions when champions are passed', () => {
    const wrapper = shallow(<Board champions={championsMock} />);
    const BoardChampions = wrapper.find(S.BoardChampions);
    expect(BoardChampions.exists()).toBeTruthy();
    expect(BoardChampions.children().length).toBe(5);
  });

  it('renders "No champions selected yet" when no champion is passed', () => {
    const wrapper = shallow(<Board />);
    const Text = wrapper.find(S.Text);
    expect(Text.exists()).toBeTruthy();
    expect(Text.text()).toMatch('No champion selected yet...');
  });
});
