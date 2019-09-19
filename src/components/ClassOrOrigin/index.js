import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import capitalize from 'lodash/capitalize';
import SynergyIcon from '../SynergyIcon';

const Grid = styled.div`
  display: grid;
  grid-gap: 0.6rem;
  grid-template-columns: 2rem auto;
  align-items: center;
`;

const Title = styled.p`
  ${props => props.theme.bold12px}
  text-shadow: 0px 0px 6px black;

  /* Necessary to align the text on the center due to font issues. */
  padding-top: 2px;
`;

function ClassOrOrigin({ type }) {
  return (
    <Grid>
      <SynergyIcon classOrOrigin={type} type="default" style={{ fontSize: '2rem' }} />
      <Title>{capitalize(type)}</Title>
    </Grid>
  );
}

ClassOrOrigin.propTypes = {
  type: PropTypes.oneOf([
    'demon',
    'dragon',
    'exile',
    'glacial',
    'imperial',
    'noble',
    'ninja',
    'pirate',
    'phantom',
    'robot',
    'void',
    'wild',
    'yordle',
    'assassin',
    'blademaster',
    'brawler',
    'elementalist',
    'guardian',
    'gunslinger',
    'knight',
    'ranger',
    'shapeshifter',
    'sorcerer',
    'hextech'
  ]).isRequired
};

export default ClassOrOrigin;
