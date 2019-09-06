// Return the correct synergy ranking
// * without active bonus - partial
// * has only 1 synergy bonus - gold
// * has one of 2 synergy bonus - bronze / gold
// * has one of 3 or more synergy bonus - bronze / silver / gold
export default function getSynergyRanking(count, bonuses) {
  const hasSynergy = count >= bonuses[0].needed;

  // Without active bonus
  if (!hasSynergy) {
    return 'partial';
  }

  // Has only 1 synergy bonus
  if (bonuses.length === 1) {
    return 'gold';
  }

  // Get the index of active bonus on bonuses array
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
    // First index - bronze
    case 0:
      return 'bronze';

    // Last index - gold
    case bonuses.length - 1:
      return 'gold';

    // Between first and last index - silver
    default:
      return 'silver';
  }
}
