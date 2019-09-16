import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.section`
  display: grid;
  grid-gap: 2.4rem;
`;

export const SelectionChampions = styled.div`
  display: grid;
  grid-gap: 2.4rem;
  grid-template-columns: repeat(auto-fill, 12rem);
  justify-content: space-around;
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
  grid-gap: 0.8rem;
  align-items: center;
  grid-template-columns: 28rem 1fr;
`;

export const HelpText = styled.p`
  ${props => props.theme.sans14pxItalic}
  color: rgba(255, 255, 255, 0.8);
`;
