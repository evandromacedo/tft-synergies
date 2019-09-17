import React, { useContext, useMemo, createContext } from 'react';
import theme from './theme';
import useSynergies from '../../store';
import { ThemeProvider } from 'styled-components';
import { Layout, Wrapper, GlobalStyle } from './styled';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Meta from '../Meta';
import Header from '../Header';
import Home from '../../pages/Home';
import About from '../../pages/About';

const DispatchContext = createContext(null);
const StoreContext = createContext(null);

export default function App() {
  const { state, ...dispatch } = useSynergies();
  const stateValue = useMemo(() => state, [state]);

  return (
    <DispatchContext.Provider value={{ ...dispatch }}>
      <StoreContext.Provider value={stateValue}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Layout>
            <Router>
              <Meta />
              <Header />
              <Wrapper>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
              </Wrapper>
            </Router>
          </Layout>
        </ThemeProvider>
      </StoreContext.Provider>
    </DispatchContext.Provider>
  );
}

export const useDispatch = () => useContext(DispatchContext);
export const useStore = () => useContext(StoreContext);
