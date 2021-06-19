import {durationToMinutes} from './duration'

describe('duration', () => {
  test('durationToMinutes', () => {
    expect(durationToMinutes('1mins')).toBe(1)
    expect(durationToMinutes('12mins')).toBe(12)
    expect(durationToMinutes('13minutes')).toBe(13)
    expect(durationToMinutes('1h 5minutes')).toBe(65)
    expect(durationToMinutes('10h')).toBe(600)
    expect(durationToMinutes('10h 45mins')).toBe(645)
    expect(durationToMinutes('5hours 45mins')).toBe(345)
    expect(durationToMinutes('3hours')).toBe(180)
  })
})
