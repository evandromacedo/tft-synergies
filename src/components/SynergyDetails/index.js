import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import SynergyIcon from '../SynergyIcon';

export default function SynergyDetails({ details, synergyIndex }) {
  return (
    <S.Wrapper>
      <S.Header>
        <SynergyIcon classOrOrigin={details.key} type="hover" />
        <S.Name>{details.name}</S.Name>
      </S.Header>
      <S.Description>
        {details.description || 'No description provided at the moment.'}
      </S.Description>
      <S.SynergyList>
        {details.bonuses.map((bonus, index) => (
          <S.SynergyItem key={index} className={synergyIndex === index ? 'active' : ''}>
            ({bonus.needed}) {bonus.effect}
          </S.SynergyItem>
        ))}
      </S.SynergyList>
    </S.Wrapper>
  );
}

SynergyDetails.propTypes = {
  details: PropTypes.object.isRequired,
  synergyIndex: PropTypes.number
};
