import React from 'react';
import { shallow, mount } from 'enzyme';
import { champions, items as itemsMock } from './mock';
import wait from 'waait';
import { act } from 'react-dom/test-utils';
import theme from '../App/theme';
import { ThemeProvider } from 'styled-components';
import { wrapInTestContext } from 'react-dnd-test-utils';
import * as S from './styled';
import * as Context from '../Context';
import Selection from '.';

// Decreases champions quantity to 10 for test
const championsMock = champions.slice(0, 10);

// Mock the global fetch API
const fetchMock = jest
  .fn()
  .mockResolvedValueOnce({ json: () => championsMock })
  .mockResolvedValueOnce({ json: () => itemsMock });

global.fetch = fetchMock;

// Theme is necessary on mount()
const ThemeWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

jest.spyOn(Context, 'useDispatch').mockImplementation(() => ({ addChampion: () => {} }));

describe('<Selection />', () => {
  it('renders properly', () => {
    const SelectionWrapped = wrapInTestContext(Selection);
    shallow(<SelectionWrapped />);
  });

  it('fetches champions and items on mount', async () => {
    let wrapper;

    await act(async () => {
      const SelectionWrapped = wrapInTestContext(Selection);
      wrapper = await mount(
        <ThemeWrapper>
          <SelectionWrapped />
        </ThemeWrapper>
      );
    });

    // Loading before fetch finishes
    const Loading = wrapper.find(S.Loading);
    expect(Loading.exists()).toBeTruthy();

    await wait();
    wrapper.update();

    // Fetches champions and items
    expect(global.fetch).toHaveBeenCalledTimes(2);

    // Tests activeTab functionality
    const SelectionList1 = wrapper.find('SelectionList');
    expect(SelectionList1.props().active).toMatch('champions');
    const HelpText1 = wrapper.find(S.HelpText);
    expect(HelpText1.text()).toMatch('Click on a champion to select it to the board.');

    const Tabs = wrapper.find('Tabs');

    act(() => {
      Tabs.props().tabItems[1].onClick();
    });
    wrapper.update();

    const SelectionList2 = wrapper.find('SelectionList');
    expect(SelectionList2.props().active).toMatch('items');
    const HelpText2 = wrapper.find(S.HelpText);
    expect(HelpText2.text()).toMatch('Drag and drop items to champions on board.');

    // TODO: Couldn't test the onChange handler...
  });
});
