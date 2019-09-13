import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 2.4rem;
  grid-template-columns: repeat(auto-fill, 12rem);
  justify-content: space-around;
`;

export const SelectionChampions = styled.div`
  display: grid;
  grid-gap: 2.4rem;
  grid-template-columns: repeat(auto-fill, 12rem);
  justify-content: space-around;
`;

export const Text = styled.p`
  ${props => props.theme.sans16pxItalic}
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  grid-column: 1 / -1;
`;
