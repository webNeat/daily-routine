import {Duration, Time} from './types'
import {durationToMinutes} from './duration'
import {toMinutes} from './time'

export const at = (time: Time) => (now: Date) => toMinutes(now) == toMinutes(time)
export const before = (time: Time) => (now: Date) => toMinutes(now) <= toMinutes(time)
export const to = before
export const until = before
export const after = (time: Time) => (now: Date) => toMinutes(now) >= toMinutes(time)
export const from = after
export const starting = after
export const between = (a: Time, b: Time) => (now: Date) => {
  const m = toMinutes(now)
  return toMinutes(a) <= m && m <= toMinutes(b)
}
export const every = (duration: Duration, start: Time = '00:00') => {
  const startingMinutes = toMinutes(start)
  const durationMinutes = durationToMinutes(duration)
  return (now: Date) => {
    const m = toMinutes(now)
    return startingMinutes <= m && (m - startingMinutes) % durationMinutes == 0
  }
}
