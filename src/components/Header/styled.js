import styled from 'styled-components';
import HeaderBackground from '../../static/img/HeaderBackground.jpg';

export const HeaderWrapper = styled.header`
  padding: 2.4rem 0;
  display: grid;
  grid-auto-flow: row;
  grid-gap: 2.4rem;
  justify-items: center;
  background-image: url(${HeaderBackground});
  background-position: center center;
  background-size: cover;
`;
