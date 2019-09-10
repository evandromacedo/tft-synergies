import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import ClassOrOrigin from '../ClassOrOrigin';

// This will be made again to atempt the API and props.
// Must implement the drag and drop functionality afterwards.
function BoardChampion({ champion, background }) {
  return (
    <S.Wrapper cost={champion.cost} background={background}>
      <S.Synergies>
        {champion.synergies.map((synergy, index) => (
          <ClassOrOrigin key={index} type={synergy} />
        ))}
      </S.Synergies>
      <S.Items>
        <S.Item />
        <S.Item />
        <S.Item />
        <S.Name>{champion.name}</S.Name>
      </S.Items>
    </S.Wrapper>
  );
}

BoardChampion.propTypes = {
  champion: PropTypes.shape({
    name: PropTypes.string,
    cost: PropTypes.number,
    synergies: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  background: PropTypes.string
};

export default BoardChampion;
