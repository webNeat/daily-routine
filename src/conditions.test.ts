import {after, at, before, between, every} from './conditions'
import {toDate} from './time'

describe('conditions', () => {
  test('at', () => {
    const at10 = at('10:00')
    expect(at10(toDate('10:00'))).toBe(true)
    expect(at10(toDate('10:01'))).toBe(false)
    expect(at10(toDate('09:59'))).toBe(false)
    expect(at10(toDate('09:00'))).toBe(false)
    expect(at10(toDate('11:00'))).toBe(false)
  })

  test('before', () => {
    const before10 = before('10:00')
    expect(before10(toDate('10:00'))).toBe(true)
    expect(before10(toDate('10:01'))).toBe(false)
    expect(before10(toDate('09:59'))).toBe(true)
    expect(before10(toDate('09:00'))).toBe(true)
    expect(before10(toDate('11:00'))).toBe(false)
  })

  test('after', () => {
    const after10 = after('10:00')
    expect(after10(toDate('10:00'))).toBe(true)
    expect(after10(toDate('10:01'))).toBe(true)
    expect(after10(toDate('09:59'))).toBe(false)
    expect(after10(toDate('09:00'))).toBe(false)
    expect(after10(toDate('11:00'))).toBe(true)
  })

  test('between', () => {
    const between10_17 = between('10:00', '17:00')
    expect(between10_17(toDate('10:00'))).toBe(true)
    expect(between10_17(toDate('10:01'))).toBe(true)
    expect(between10_17(toDate('09:59'))).toBe(false)
    expect(between10_17(toDate('09:00'))).toBe(false)
    expect(between10_17(toDate('15:00'))).toBe(true)
    expect(between10_17(toDate('17:01'))).toBe(false)
    expect(between10_17(toDate('18:01'))).toBe(false)
  })

  test('every', () => {
    const every5mins = every('5mins')
    expect(every5mins(toDate('00:00'))).toBe(true)
    expect(every5mins(toDate('00:04'))).toBe(false)
    expect(every5mins(toDate('00:05'))).toBe(true)
    expect(every5mins(toDate('09:59'))).toBe(false)
    expect(every5mins(toDate('09:00'))).toBe(true)
    expect(every5mins(toDate('15:15'))).toBe(true)
    expect(every5mins(toDate('17:31'))).toBe(false)

    const every15minsStarting9_10 = every('15mins', '09:10')
    expect(every15minsStarting9_10(toDate('00:00'))).toBe(false)
    expect(every15minsStarting9_10(toDate('8:10'))).toBe(false)
    expect(every15minsStarting9_10(toDate('9:10'))).toBe(true)
    expect(every15minsStarting9_10(toDate('9:15'))).toBe(false)
    expect(every15minsStarting9_10(toDate('9:25'))).toBe(true)
    expect(every15minsStarting9_10(toDate('9:55'))).toBe(true)
    expect(every15minsStarting9_10(toDate('10:10'))).toBe(true)
  })
})
