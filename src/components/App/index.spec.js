import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import App from '.';
import { Container } from './styled';
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

  it('renders the Container', () => {
    const ContainerComponent = wrapper.find(Container);
    expect(toJSON(ContainerComponent)).toMatchSnapshot();
  });
});
