const getApiEndpoint = function(name) {
  return `https://solomid-resources.s3.amazonaws.com/blitz/tft/data/${name}.json`;
};

export function getChampions() {
  return fetch(getApiEndpoint('champions'))
    .then(response => response.json())
    .catch(error => alert('an error has ocurred'));
}

export function getSynergies() {
  const classes = fetch(getApiEndpoint('classes')).then(response => response.json());
  const origins = fetch(getApiEndpoint('origins')).then(response => response.json());

  return Promise.all([classes, origins]).then(values => {
    return { ...values[0], ...values[1] };
  });
}
