import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Layout, Wrapper, GlobalStyle } from './styled';
import { getChampions } from '../../API';
import useSynergies from '../../reducerData';
import theme from './theme';
import Meta from '../Meta';
import Header from '../Header';

export default function App() {
  // useEffect(() => {
  //   async function fetchChampions() {
  //     const champions = await getChampions();
  //     console.log(champions);
  //   }

  //   fetchChampions();
  // });
  const { state, addChampion } = useSynergies();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Meta />
          <Header />
          <Wrapper>
            <div>
              <p>
                {state.synergies.map((synergy, index) => {
                  return (
                    <span key={index}>
                      {synergy.name}
                      {synergy.quantity}
                    </span>
                  );
                })}
              </p>
              <p>
                {state.board.map((board, index) => {
                  return (
                    <span key={index}>
                      {board.id}
                      {board.name}
                    </span>
                  );
                })}
              </p>
              <button
                style={{ color: 'white' }}
                onClick={() =>
                  addChampion({
                    id: 67,
                    name: 'vayne',
                    synergies: ['noble', 'ranger'],
                    items: ['blademaster']
                  })
                }
              >
                Add Champion
              </button>
              <button
                style={{ color: 'white' }}
                onClick={() =>
                  addChampion({
                    id: 80,
                    name: 'rengar',
                    synergies: ['wild', 'brawler'],
                    items: ['blademaster']
                  })
                }
              >
                Add Champion
              </button>
            </div>
          </Wrapper>
        </Layout>
      </ThemeProvider>
    </>
  );
}
