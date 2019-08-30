import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-gap: 0.6rem;
  grid-template-columns: 2rem auto;
  align-items: center;
`;

const Title = styled.p`
  ${props => props.theme.bold12px}

  /* Necessary to align the text on the center due to font issues. */
  padding-top: 2px;
`;

function ClassOrOrigin({ icon, title }) {
  return (
    <Grid>
      {icon}
      <Title>{title}</Title>
    </Grid>
  );
}

ClassOrOrigin.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired
};

export default ClassOrOrigin;
