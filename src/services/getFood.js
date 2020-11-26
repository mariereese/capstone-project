export default function getCharacter() {
  return fetch('data.json').then((res) => res.json())
}
