export const quickSort = <T>(list: T[]): T[] => {
  if(list.length < 2) {
    return list;
  }
  const pivot = list[0];
  const lower = list.slice(1).filter(item => item < pivot);
  const higher = list.slice(1).filter(item => item > pivot);
  return [...quickSort(lower), pivot, ...quickSort(higher)]
}