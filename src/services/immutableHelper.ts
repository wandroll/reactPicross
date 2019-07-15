/**
 * immutable replaceAt
 * @param array
 * @param index
 * @param value
 */
export function replaceAt<T>(array: T[], index: number, value: T): T[] {
  const ret = array.slice(0);
  ret[index] = value;
  return ret;
}
export function replaceAt2D<T>(array: T[][], rowIndex: number, itemIndex: number, value: T): T[][] {
  return replaceAt(array, rowIndex, replaceAt(array[rowIndex], itemIndex, value));
}