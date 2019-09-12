import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import SelectionItem from '.';

const botrkMock = {
  key: 'bladeoftheruinedking',
  name: 'Blade of the Ruined King',
  type: 'Offensive',
  bonus: 'Wearer is also a Blademaster.',
  tier: 1,
  depth: 2,
  buildsFrom: ['spatula', 'recurvebow'],
  kind: 'advanced',
  champs: ['Ashe', 'Yasuo', 'Zed']
};

describe('<SelectionChampion />', () => {
  it('renders properly', () => {
    shallow(<SelectionItem item={botrkMock} />);
  });

  it('renders and matches snapshot', () => {
    const wrapper = shallow(<SelectionItem item={botrkMock} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
