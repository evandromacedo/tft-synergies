import styled from 'styled-components';

export const Wrapper = styled.main`
  max-width: 816px;
  margin: 0 auto;
  padding: 0 2.4rem;
`;

export const Title = styled.h1`
  margin: 2.4rem 0;
  font-size: 2.4rem;
`;

export const Text = styled.p`
  ${props => props.theme.bold16px}
  margin: 1.6rem 0;
  line-height: 2.4rem;

  a {
    color: ${props => props.theme.accentYellow};
  }
`;
