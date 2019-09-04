import filter from 'lodash/filter';
import orderBy from 'lodash/orderBy';

// Get the synergies and organize in order
// synergies - the array of synergies from the reducer
export default function arrangeSynergies(synergies) {
  let partials = filter(synergies, { ranking: 'partial' });
  partials = partials.length ? orderBy(partials, ['count'], ['desc']) : null;

  let bronzes = filter(synergies, { ranking: 'bronze' });
  bronzes = bronzes.length ? orderBy(bronzes, ['count'], ['desc']) : null;

  let silvers = filter(synergies, { ranking: 'silver' });
  silvers = silvers.length ? orderBy(silvers, ['count'], ['desc']) : null;

  let golds = filter(synergies, { ranking: 'gold' });
  golds = golds.length ? orderBy(golds, ['count'], ['desc']) : null;

  return { partials, bronzes, silvers, golds };
}
