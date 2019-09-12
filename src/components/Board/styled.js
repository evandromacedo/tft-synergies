import styled from 'styled-components';

export const Wrapper = styled.section`
  display: grid;
  grid-gap: 2.4rem;
`;

export const BoardChampions = styled.div`
  display: grid;
  grid-gap: 2.4rem;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  justify-content: space-evenly;

  @media (max-width: 856px) {
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  }

  @media (max-width: ${props => props.theme.extraSmall}) {
    justify-items: center;
  }
`;

export const Text = styled.p`
  ${props => props.theme.sans16pxItalic}
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
`;
