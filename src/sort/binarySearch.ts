export const binarySearch = <T>(target: T, list: T[], min = 0, max = list.length - 1): number => {
  if(min > max) {
    return -1;
  }
  const middle = Math.floor((min + max) / 2);
  if(target === list[middle]) {
    return middle;
  }
  if (target > list[middle]) {
    return binarySearch(target, list, middle + 1, max);
  }
  if (target < list[middle]) {
    return binarySearch(target, list, min, middle - 1);
  }
  return -1;
}