export function getPageObject(length: number) {
  const max = length % 10 === 0 ? length / 10 : length / 10 + 1
  return {
    current: 1,
    max,
  }
}
