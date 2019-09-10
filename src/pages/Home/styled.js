import styled from 'styled-components';

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 17.6rem 1fr;
  align-items: start;
  grid-gap: 0.8rem;
  padding: 2.4rem 2.4rem 2.4rem 0;

  @media (max-width: ${props => props.theme.small}) {
    grid-template-columns: 4.2rem 1fr;
  }
`;

export const Sidebar = styled.aside`
  z-index: 1;
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
  grid-gap: 2.4rem;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  justify-content: space-evenly;

  @media (max-width: 856px) {
    grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  }

  @media (max-width: ${props => props.theme.small}) {
    justify-items: center;
    justify-content: space-evenly;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  }
`;
