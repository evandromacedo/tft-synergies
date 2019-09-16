import React from 'react';
import { shallow } from 'enzyme';
import Tabs from '.';
import * as S from './styled';

const mockOnClick = jest.fn();

const mockItems = [
  {
    title: 'Champions',
    onClick: mockOnClick,
    active: true
  },
  {
    title: 'Synergy Items',
    onClick: mockOnClick
  },
  {
    title: 'Lol',
    onClick: mockOnClick
  }
];

describe('<Tabs />', () => {
  it('renders properly', () => {
    shallow(<Tabs tabItems={mockItems} />);
  });

  it('renders items and calls onClick on each', () => {
    const wrapper = shallow(<Tabs tabItems={mockItems} />);
    const TabItems = wrapper.find(S.Tab);
    expect(TabItems.length).toBe(3);

    const firstTab = TabItems.get(0);
    firstTab.props.onClick();
    expect(firstTab.props.className).toMatch('active');
    expect(mockOnClick).toHaveBeenCalled();
    mockOnClick.mockClear();

    TabItems.get(1).props.onClick();
    expect(mockOnClick).toHaveBeenCalled();
    mockOnClick.mockClear();

    TabItems.get(2).props.onClick();
    expect(mockOnClick).toHaveBeenCalled();
    mockOnClick.mockClear();
  });
});
