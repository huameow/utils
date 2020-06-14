const merge = <T>(left: T[], right: T[]): T[] => {
  const result: T[] = [];
  while(left.length > 0 && right.length > 0) {
    if(left[0] < right[0]){
      result.push(left.shift() as T);
    } else {
      result.push(right.shift() as T);
    }
  }
  return [...result, ...left, ...right];
}

export const mergeSort = <T>(list: T[]): T[] => {
  if(list.length < 2) {
    return list;
  }
  const middle = Math.floor(list.length / 2);
  const left = list.slice(0, middle);
  const right = list.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}
