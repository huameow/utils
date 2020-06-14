export const insertSort = <T>(list: T[]): T[] => {
  for(let i = 0; i < list.length; i++){
    const current = list[i];
    let j = i - 1;
    while(j >= 0 && list[j] > current){
      list[j + 1] = list[j];
      j--;
    }
    list[j + 1] = current;
  }
  return list;
}