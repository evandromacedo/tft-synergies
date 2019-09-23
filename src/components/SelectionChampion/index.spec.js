import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { wrapInTestContext } from 'react-dnd-test-utils';
import * as Context from '../Context';
import SelectionChampion from '.';

const kayleMock = {
  id: '10',
  key: 'Kayle',
  name: 'Kayle',
  origin: ['Noble'],
  class: ['Knight'],
  cost: 5,
  ability: {
    name: 'Divine Judgement',
    description: 'Kayle shields an ally, making them immune to damage.',
    type: 'Active',
    manaCost: 125,
    manaStart: 0,
    stats: [
      {
        type: 'Shield Duration',
        value: '2s / 2.5s / 3s'
      },
      {
        type: 'Extra Targets',
        value: '0 / 1 / 2'
      }
    ]
  },
  stats: {
    offense: {
      damage: 60,
      attackSpeed: 1,
      dps: 66,
      range: 3
    },
    defense: {
      health: 750,
      armor: 40,
      magicResist: 20
    }
  },
  items: ['bladeoftheruinedking', 'guinsoosrageblade', 'spearofshojin']
};

jest.spyOn(Context, 'useDispatch').mockImplementation(() => ({ addChampion: () => {} }));

describe('<SelectionChampion />', () => {
  it('renders properly', () => {
    const SelectionChampionWrapped = wrapInTestContext(SelectionChampion);
    shallow(<SelectionChampionWrapped champion={kayleMock} />);
  });

  it('renders and matches snapshot', () => {
    const SelectionChampionWrapped = wrapInTestContext(SelectionChampion);
    const wrapper = shallow(<SelectionChampionWrapped champion={kayleMock} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
