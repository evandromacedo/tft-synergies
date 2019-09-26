export default function getItemImage(name) {
  return `https://rerollcdn.com/items/${name.replace(/ |'/g, '')}.png`;
}
