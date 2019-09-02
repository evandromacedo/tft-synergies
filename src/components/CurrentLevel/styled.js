import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-grid;
  grid-gap: 1.2rem;
  grid-auto-flow: column;
  align-items: center;
`;

export const Text = styled.p`
  ${props => props.theme.bold20px}
`;

export const Button = styled.button`
  padding: 0;
`;
