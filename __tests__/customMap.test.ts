import { test, expect, jest } from 'bun:test'

import '../src/customMap'

test('Array.customMap() to work like the Array.map', () => {
  const array = [1, 2, 3, 4, 5]
  const sum = (value: number) => value + 1
  const pow = (value: number) => value * value
  const spy = jest.fn()

  array.customMap(spy)

  expect(array.customMap(sum)).toEqual([2, 3, 4, 5, 6])
  expect(array.customMap(pow)).toEqual([1, 4, 9, 16, 25])

  expect(spy).toHaveBeenCalledTimes(5)
  expect(spy.mock.calls[0]).toEqual([1, 0, array])
  expect(spy.mock.calls[1]).toEqual([2, 1, array])
  expect(spy.mock.calls[2]).toEqual([3, 2, array])
  expect(spy.mock.calls[3]).toEqual([4, 3, array])
  expect(spy.mock.calls[4]).toEqual([5, 4, array])
})
