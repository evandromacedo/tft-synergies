import styled from 'styled-components';

export const Button = styled.button`
  ${props => props.theme.bold16px}
  text-transform: uppercase;
  color: inherit;
  padding: 0.7rem 2rem 0.5rem 2rem;
  border-radius: 2px;
  border-top: 2px solid ${props => props.theme.accentYellow};
  border-bottom: 2px solid #67502d;
  background-image: linear-gradient(
      to bottom,
      ${props => props.theme.accentYellow},
      #67502d
    ),
    linear-gradient(${props => props.theme.accentYellow}, #67502d);
  background-size: 2px 100%;
  background-position: 0 0, 100% 0;
  background-repeat: no-repeat;

  &:hover {
    filter: brightness(130%);
  }
`;

export const Content = styled.span`
  transform: translateY(1px);
`;
