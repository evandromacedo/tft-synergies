import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  background-color: ${props => props.theme.background3};
  filter: drop-shadow(1px 1px 3px ${props => props.theme.background2});
`;
