import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import App from '.';
import { Layout } from './styled';
import theme from './theme';

describe('<App />', () => {
  const wrapper = shallow(<App />);

  it('renders properly', () => {
    shallow(<App />);
  });

  it('renders GlobalStyles and ThemeProvider with theme', () => {
    const GlobalStyle = wrapper.find('GlobalStyleComponent');
    expect(GlobalStyle.exists()).toBe(true);

    const ThemeProvider = wrapper.find('ThemeProvider');
    expect(ThemeProvider.props().theme).toEqual(theme);
  });

  it('renders the Layout', () => {
    const LayoutComponent = wrapper.find(Layout);
    expect(toJSON(LayoutComponent)).toMatchSnapshot();
  });
});
