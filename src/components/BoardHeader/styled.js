import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;

  @media (max-width: ${props => props.theme.extraSmall}) {
    grid-template-columns: 1fr;
    grid-gap: 1.2rem;
    justify-items: center;
  }
`;
