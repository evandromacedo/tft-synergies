import styled from 'styled-components';

export const SelectionList = styled.div`
  display: grid;
  grid-gap: 2.4rem;
  justify-content: space-around;
`;

export const SelectionChampions = styled(SelectionList)`
  grid-template-columns: repeat(auto-fill, 12rem);
`;

export const SelectionItems = styled(SelectionList)`
  grid-template-columns: repeat(auto-fill, 22.4rem);
  justify-content: space-around;
`;

export const Text = styled.p`
  ${props => props.theme.sans16pxItalic}
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  grid-column: 1 / -1;
`;
