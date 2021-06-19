import {Time} from './types'

export const MS_PER_SECOND = 1000
export const SECONDS_PER_MINUTE = 60
export const MINUTES_PER_HOUR = 60
export const HOURS_PER_DAY = 60

export const MS_PER_MINUTE = MS_PER_SECOND * SECONDS_PER_MINUTE
export const MS_PER_HOUR = MINUTES_PER_HOUR * MS_PER_MINUTE
export const MS_PER_DAY = MS_PER_HOUR * HOURS_PER_DAY

export const SECONDS_PER_HOUR = SECONDS_PER_MINUTE * MINUTES_PER_HOUR
export const SECONDS_PER_DAY = SECONDS_PER_HOUR * HOURS_PER_DAY

export const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY

export const toDate = (time: Time) => {
  if (typeof time === 'number') {
    time = new Date(time)
  }
  if (typeof time === 'string') {
    const [hours, minutes] = time.split(':').map(x => parseInt(x))
    time = new Date()
    time.setHours(hours)
    time.setMinutes(minutes)
  }
  return time
}

export const toMiliSeconds = (time: Time = new Date()) => {
  time = toDate(time)
  return time.getTime() - time.getTimezoneOffset() * MS_PER_MINUTE
}

export const toSeconds = (time?: Time) => Math.floor(toMiliSeconds(time) / MS_PER_SECOND)
export const toSecondsSinceMinute = (time?: Time) => toSeconds(time) % SECONDS_PER_MINUTE
export const toSecondsSinceHour = (time?: Time) => toSeconds(time) % SECONDS_PER_HOUR
export const toSecondsSinceDay = (time?: Time) => toSeconds(time) % SECONDS_PER_DAY

export const toMinutes = (time?: Time) => Math.floor(toSeconds(time) / SECONDS_PER_MINUTE)
export const toMinutesSinceHour = (time?: Time) => toMinutes(time) % MINUTES_PER_HOUR
export const toMinutesSinceDay = (time?: Time) => toMinutes(time) % MINUTES_PER_DAY

export const toHours = (time?: Time) => Math.floor(toMinutes(time) / MINUTES_PER_HOUR)
export const toHoursSinceDay = (time?: Time) => toHours(time) % HOURS_PER_DAY

export const toDays = (time?: Time) => Math.floor(toHours(time) / HOURS_PER_DAY)
