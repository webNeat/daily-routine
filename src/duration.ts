import {Duration} from './types'

export const durationToMinutes = (duration: Duration) => {
  let minutes = 0
  for (const part of duration.split(' ')) {
    if (part.endsWith('h')) minutes += 60 * parseInt(part.substr(0, part.length - 1))
    if (part.endsWith('hours')) minutes += 60 * parseInt(part.substr(0, part.length - 5))
    if (part.endsWith('mins')) minutes += parseInt(part.substr(0, part.length - 1))
    if (part.endsWith('minutes')) minutes += parseInt(part.substr(0, part.length - 7))
  }
  return minutes
}
