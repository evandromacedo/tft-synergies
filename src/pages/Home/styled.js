import styled from 'styled-components';

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 18.4rem 1fr;
  align-items: start;
  grid-gap: 2.4rem;
  padding: 2.4rem 0;

  @media (max-width: 1072px) {
    padding-right: 2.4rem;
  }

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
  align-items: center;

  @media (max-width: ${props => props.theme.extraSmall}) {
    grid-template-columns: 1fr;
    grid-gap: 1.8rem;
    justify-items: center;
  }
`;
