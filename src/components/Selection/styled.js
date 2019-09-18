import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.section`
  display: grid;
  grid-gap: 2.4rem;
`;

const blink = keyframes`
  0% { opacity: 0.2; }
  50% { opacity: 1; }
  100% { opacity: 0.2; }
`;

export const Loading = styled.p`
  ${props => props.theme.bold20px}
  animation: ${blink} 1s linear infinite;
`;

export const SearchAndHelpText = styled.div`
  display: grid;
  grid-gap: 1.2rem;
  align-items: center;
  grid-template-columns: 28.5rem;

  @media (max-width: ${props => props.theme.extraSmall}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const HelpText = styled.p`
  ${props => props.theme.sans14pxItalic}
  color: rgba(255, 255, 255, 0.8);
`;
