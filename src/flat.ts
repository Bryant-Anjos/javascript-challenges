/*
 * Challenge
 *
 * implement a function `flat()` that takes a possibly nested array and returns
 * a flat array containing all the elements. The input array can contain
 * subarrays, and the function should flatten them.
 *
 * [1, [[2, 3, [4, [5, [6], 7], 8]], 9], 10] given to the flat function should
 * return [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
 */

type RecursiveArray<T> = (RecursiveArray<T> | T)[]

export function flat<T>(array: RecursiveArray<T>) {
  const flatArray: T[] = []
  for (const item of array) {
    if (!Array.isArray(item)) {
      flatArray.push(item)
    } else {
      const items = flat<T>(item)
      flatArray.push(...items)
    }
  }
  return flatArray
}
