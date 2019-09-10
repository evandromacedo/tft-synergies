import styled from 'styled-components';

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 20rem 1fr;
  align-items: start;
  grid-gap: 0.8rem;
  padding: 2.4rem 0;
`;

export const Sidebar = styled.aside`
  grid-row: start / -1;
`;

export const MainWrapper = styled.main`
  display: grid;
  grid-gap: 2.4rem;
`;

export const BoardTop = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
`;

export const FakeBoard = styled.div`
  display: grid;
  justify-content: space-between;
  grid-gap: 2.4rem;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
`;
