import React from 'react';
import { shallow } from 'enzyme';
import BoardHeader from '.';
import * as Context from '../Context';

const clearBoardMock = jest.fn();
jest
  .spyOn(Context, 'useDispatch')
  .mockImplementation(() => ({ clearBoard: clearBoardMock }));

describe('<BoardHeader />', () => {
  it('renders properly', () => {
    shallow(<BoardHeader />);
  });

  it('renders CurrentLevel', () => {
    const wrapper = shallow(<BoardHeader />);
    const CurrentLevel = wrapper.find('CurrentLevel');
    expect(CurrentLevel.exists()).toBeTruthy();
  });

  it('renders clear button and triggers click', () => {
    const wrapper = shallow(<BoardHeader />);
    const Button = wrapper.find('Button');
    expect(Button.exists()).toBeTruthy();
    Button.simulate('click');
    expect(clearBoardMock).toHaveBeenCalled();
  });
});
