import styled from 'styled-components';
import SearchIcon from '../../static/icons/Search16px.svg';

export const Wrapper = styled.div`
  /* Hack to add gradient on borders */
  border: solid 2px transparent;
  border-radius: 1.6rem;
  background-image: linear-gradient(
      ${props => `${props.theme.background2}, ${props.theme.background2}`}
    ),
    linear-gradient(${props => props.theme.accentYellow}, #67502d);
  background-origin: border-box;
  background-clip: content-box, border-box;
  position: relative;

  /* Search Icon on right */
  &:after {
    content: '';
    width: 1.6rem;
    height: 1.6rem;
    position: absolute;
    right: 1.4rem;
    top: 0.6rem;
    background-image: url(${SearchIcon});
  }
`;

export const Input = styled.input`
  ${props => props.theme.sans16px};
  appearance: none;
  outline: none;
  color: inherit;
  caret-color: ${props => props.theme.accentYellow};
  background-color: transparent;
  width: 100%;
  padding: 0.4rem 1.6rem;

  &::-webkit-search-cancel-button {
    position: relative;
    right: 2rem;
  }
`;
