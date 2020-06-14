function swap<T>(list: T[], i: number, j: number): void {
  let temp = list[i];
  list[i] = list[j];
  list[j] = temp;
}

function shiftDown<T>(list: T[], i: number, len: number): void {
  let temp: T = list[i];
  for(let j = 2*i+1; j<len; j = 2*j+1){
    temp = list[i];
    if(j+1 < len && list[j] < list[j+1]){
      j++;
    }
    if(temp < list[j]){
      swap(list, i, j);
      i = j;
    } else {
      break;
    }
  }
}

export const heapSort = <T>(list: T[]): T[] => {
  for(let i = Math.floor(list.length / 2 -1); i >= 0; i--){
    shiftDown(list, i, list.length)
  }
  for(let i = Math.floor(list.length - 1); i > 0; i --) {
    swap(list, 0, i);
    shiftDown(list, 0, i)
  }
  return list
}