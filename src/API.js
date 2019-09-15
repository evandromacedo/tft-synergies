import orderBy from 'lodash/orderBy';

const getApiEndpoint = function(name) {
  return `https://solomid-resources.s3.amazonaws.com/blitz/tft/data/${name}.json`;
};

export function getChampions() {
  return fetch(getApiEndpoint('champions'))
    .then(response => response.json())
    .then(response => {
      const championsArray = Object.keys(response).map(key => response[key]);
      const championsOrdered = orderBy(championsArray, ['cost', 'name']);
      return championsOrdered;
    })
    .catch(error => alert('an error has ocurred'));
}

export function getItems() {
  return fetch(getApiEndpoint('items'))
    .then(response => response.json())
    .then(response => {
      const itemsKeys = [
        'youmuusghostblade',
        'knightsvow',
        'frozenmallet',
        'yuumi',
        'bladeoftheruinedking',
        'darkin'
      ];

      const itemsArray = Object.keys(response).map(key => response[key]);
      const itemsArrayFiltered = itemsArray.filter(item => itemsKeys.includes(item.key));
      const itemsArrayOrdered = orderBy(itemsArrayFiltered, ['name']);
      const itemsArrayWithSynergy = itemsArrayOrdered.map(item => {
        const synergy = item.bonus
          .split(/Wearer is also an? /)[1]
          .replace('.', '')
          .toLowerCase();
        item.synergy = synergy;
        return item;
      });
      return itemsArrayWithSynergy;
    })
    .catch(error => alert('an error has ocurred'));
}

export function getSynergies() {
  const classes = fetch(getApiEndpoint('classes')).then(response => response.json());
  const origins = fetch(getApiEndpoint('origins')).then(response => response.json());

  return Promise.all([classes, origins]).then(values => {
    return { ...values[0], ...values[1] };
  });
}
