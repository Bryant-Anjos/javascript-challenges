/*
 * Challenge
 *
 * Implement the `.map()` method that works just like the original.
 *
 * [1,2,3].customMap((x) => x * x) // should produce [1,4,9]
 *
 * It tests your understanding of:
 * 1. Prototypes
 * 2. `this` keyword
 * 3. Functional programming concepts
 */

declare global {
  interface Array<T> {
    customMap<U>(callback: (item: T, index: number, array: T[]) => U): U[]
  }
}

Array.prototype.customMap = function <T, U>(
  callback: (item: T, index: number, array: T[]) => U,
): U[] {
  const array = this
  const mappedArray: U[] = []
  for (let i = 0; i < array.length; i++) {
    const result = callback(array[i], i, array)
    mappedArray.push(result)
  }
  return mappedArray
}
