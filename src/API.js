export function getChampions() {
  try {
    return fetch(
      'https://solomid-resources.s3.amazonaws.com/blitz/tft/data/champions.json'
    ).then(response => response.json());
  } catch (error) {
    alert('an error has ocurred');
  }
}
