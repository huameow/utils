import * as R from "ramda";
function checkHasProperty<T, K extends Extract<keyof T, string | string[]>>(
  value: T[K],
  key: K,
  items: T[]
): boolean {
  return items.some(R.pathEq<K, T[K]>(key, value));
}
export default R.curry(checkHasProperty);
