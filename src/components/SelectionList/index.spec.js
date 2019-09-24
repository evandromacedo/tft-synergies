import React from 'react';
import { shallow } from 'enzyme';
import * as S from './styled';
import SelectionList from '.';
import { champions, items } from '../Selection/mock';

describe('<SelectionList />', () => {
  it('renders properly', () => {
    shallow(<SelectionList />);
  });

  it('renders champions when active', () => {
    const wrapper = shallow(<SelectionList active="champions" champions={champions} />);
    const SelectionChampions = wrapper.find(S.SelectionChampions);
    expect(SelectionChampions.exists()).toBeTruthy();
    expect(SelectionChampions.children().length).toBe(champions.length);
  });

  it('renders "no champions" text with searchTerm when no champion is passed', () => {
    const searchTerm = 'some random text';
    const wrapper = shallow(
      <SelectionList active="champions" champions={[]} searchTerm={searchTerm} />
    );
    const Text = wrapper.find(S.Text);
    expect(Text.exists()).toBeTruthy();
    expect(Text.text()).toMatch(`No champions or synergies found for "${searchTerm}"`);
  });

  it('renders items when active', () => {
    const wrapper = shallow(<SelectionList active="items" items={items} />);
    const SelectionItems = wrapper.find(S.SelectionItems);
    expect(SelectionItems.exists()).toBeTruthy();
    expect(SelectionItems.children().length).toBe(items.length);
  });

  it('renders "no items" text with searchTerm when no item is passed', () => {
    const searchTerm = 'some random text';
    const wrapper = shallow(
      <SelectionList active="items" items={[]} searchTerm={searchTerm} />
    );
    const Text = wrapper.find(S.Text);
    expect(Text.exists()).toBeTruthy();
    expect(Text.text()).toMatch(`No items or synergies found for "${searchTerm}"`);
  });
});
