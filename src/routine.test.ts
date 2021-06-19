import {at, between, every, from, to} from './conditions'
import {routine} from './routine'
import {toDate} from './time'

test('routine', () => {
  const lightsOn = jest.fn()
  const lightsOff = jest.fn()
  const pause = jest.fn()
  const schedule = routine()
    .do(lightsOn, at('18:00'))
    .do(lightsOff, at('22:30'))
    .do(pause, every('30mins'), from('9:00'), to('12:00'))
    .do(pause, every('30mins'), between('14:00', '19:00'))

  schedule.run(toDate('00:00'))
  expect(lightsOn).toBeCalledTimes(0)
  expect(lightsOff).toBeCalledTimes(0)
  expect(pause).toBeCalledTimes(0)

  schedule.run(toDate('9:00'))
  expect(pause).toBeCalledTimes(1)

  schedule.run(toDate('11:00'))
  expect(pause).toBeCalledTimes(2)

  schedule.run(toDate('13:00'))
  expect(pause).toBeCalledTimes(2)

  schedule.run(toDate('16:00'))
  expect(pause).toBeCalledTimes(3)

  schedule.run(toDate('18:00'))
  expect(lightsOn).toBeCalledTimes(1)
  expect(pause).toBeCalledTimes(4)

  schedule.run(toDate('22:00'))
  expect(pause).toBeCalledTimes(4)
  expect(lightsOff).toBeCalledTimes(0)

  schedule.run(toDate('22:30'))
  expect(pause).toBeCalledTimes(4)
  expect(lightsOff).toBeCalledTimes(1)
})
