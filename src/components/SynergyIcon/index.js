import React from 'react';
import PropTypes from 'prop-types';
import capitalize from 'lodash/capitalize';
import * as AllSynergies from './AllSynergies';

export default function SynergyIcon({ classOrOrigin, type = 'default', ...props }) {
  if (!classOrOrigin) {
    const Icon = AllSynergies.NoSynergy;
    return <Icon {...props} />;
  }

  const classOrOriginCapitalized = capitalize(classOrOrigin);
  const typeLowerCased = type.toLowerCase();
  const Icon = AllSynergies[classOrOriginCapitalized];

  return <Icon type={typeLowerCased} {...props} />;
}

SynergyIcon.propTypes = {
  classOrOrigin: PropTypes.oneOf([
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
  ]),
  type: PropTypes.oneOf(['hover', 'default', 'partial', 'bronze', 'silver', 'gold'])
};
