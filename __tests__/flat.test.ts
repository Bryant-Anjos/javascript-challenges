import { test, expect } from 'bun:test'

import { flat } from '../src/flat'

test('flat() function should flatten a recursive array', () => {
  const array1 = [1, [[2, 3, [4, [5, [6], 7], 8]], 9], 10]
  const array2 = [[[1]], 2, [[[3, 4], [[[[5]]]]]]]

  expect(flat(array1)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  expect(flat(array2)).toEqual([1, 2, 3, 4, 5])
})
