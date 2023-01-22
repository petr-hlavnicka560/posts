export function updatePaging(length: number, index: number) {
  const max = length % 10 === 0 ? length / 10 : length / 10 + 1
  return {
    current: Math.floor(index / 10) + 1,
    max,
  }
}
