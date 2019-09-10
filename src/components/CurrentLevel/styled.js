import styled from 'styled-components';

export const Wrapper = styled.div`
  width: auto;
  display: grid;
  grid-gap: 1.2rem;
  justify-content: start;
  grid-auto-flow: column;
  align-items: center;
`;

export const Text = styled.p`
  ${props => props.theme.bold20px}
`;

export const Button = styled.button`
  padding: 0;

  @media (hover: hover) {
    &:hover {
      filter: brightness(130%);
    }
  }
`;
