import styled from 'styled-components';

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
