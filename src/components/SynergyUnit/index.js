import PropTypes from 'prop-types';
import React from 'react';
import * as S from './styled';
import * as SynergyIcon from '../SynergyIcon';

export default function SynergiesUnit({ details, count = 0 }) {
  const { bonuses } = details;
  const hasSynergy = bonuses && count >= bonuses[0].needed;

  return (
    <S.Wrapper>
      <S.Icon>
        {count === 0 && <SynergyIcon.NoSynergy />}
        {count > 0 && getSynergyIcon(hasSynergy, count, details)}
      </S.Icon>

      <S.Count>
        {/* No champion selected */}
        {count === 0 && <S.NoSynergies>No synergies yet</S.NoSynergies>}

        {/* At least 1 champion selected */}
        {count > 0 && (
          <>
            <S.Quantity>{count}</S.Quantity>
            <div>
              <S.Name>{details.name}</S.Name>
              <S.Progress>{printSynergyProgress(hasSynergy, count, bonuses)}</S.Progress>
            </div>
          </>
        )}
      </S.Count>
    </S.Wrapper>
  );
}

SynergiesUnit.propTypes = {
  details: PropTypes.object,
  count: PropTypes.number
};

function printSynergyProgress(hasSynergy, count, bonuses) {
  // No synergy yet
  if (!hasSynergy) {
    return (
      <>
        {count} / {bonuses[0].needed}
      </>
    );
  }

  // 1 synergy bonus
  if (bonuses.length === 1) {
    return count;
  }

  const progress = bonuses.map((bonus, index, array) => {
    const isLastBonus = !(index + 1 < array.length);
    const isActiveBonus =
      count >= bonus.needed && (isLastBonus || count < array[index + 1].needed);

    if (!isActiveBonus) {
      return (
        <S.Unable key={index}>
          {bonus.needed}
          {!isLastBonus && ' > '}
        </S.Unable>
      );
    }

    return (
      <span key={index}>
        {bonus.needed}
        {!isLastBonus && <S.Unable> > </S.Unable>}
      </span>
    );
  });

  return progress;
}

function getSynergyIcon(hasSynergy, count, details) {
  const { bonuses } = details;

  // No synergy yet
  if (!hasSynergy) {
    return SynergyIcon[details.name](SynergyIcon.PARTIAL);
  }

  // 1 synergy bonus
  if (bonuses.length === 1) {
    return SynergyIcon[details.name](SynergyIcon.GOLD);
  }

  let activeBonusIndex = 0;

  bonuses.some((bonus, index, array) => {
    const isLastBonus = !(index + 1 < array.length);
    const isActiveBonus =
      count >= bonus.needed && (isLastBonus || count < array[index + 1].needed);

    if (isActiveBonus) {
      activeBonusIndex = index;
      return true;
    }

    return false;
  });

  switch (activeBonusIndex) {
    case 0:
      return SynergyIcon[details.name](SynergyIcon.BRONZE);

    case bonuses.length - 1:
      return SynergyIcon[details.name](SynergyIcon.GOLD);

    default:
      return SynergyIcon[details.name](SynergyIcon.SILVER);
  }
}
