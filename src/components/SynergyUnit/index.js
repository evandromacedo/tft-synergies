import PropTypes from 'prop-types';
import React from 'react';
import { NoSynergy } from '../SynergyIcon';
import * as S from './styled';

export default function SynergiesUnit({ details, count = 0 }) {
  const { bonuses } = details;
  const hasSynergy = bonuses && count >= bonuses[0].needed;

  function printSynergyProgress(hasSynergy, count, bonuses) {
    // No synergy yet
    if (!hasSynergy) {
      return (
        <>
          {count} / {bonuses[0].needed}
        </>
      );
    }

    // At least 1 synergy
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

  return (
    <S.Wrapper>
      <S.Icon>
        {count === 0 && <NoSynergy />}
        {count > 0 && <NoSynergy />}
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
              <S.Progress>
                {printSynergyProgress(hasSynergy, count, bonuses)}

                {/* <S.Unable>3 / </S.Unable>6<S.Unable> / 9</S.Unable> */}
              </S.Progress>
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
