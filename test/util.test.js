import {formatTime, toTimeData, toMilliseconds} from '../src/util'

describe('formatTime', () => {
  test('正确解析日时分秒毫秒', () => {
    const t = toMilliseconds({
      days: 2,
      hours: 3,
      minutes: 4,
      seconds: 5,
      milliseconds: 1
    })
    expect(formatTime(t, 'ddhhmmssms')).toBe('02030405001')
    const t2 = toMilliseconds({
      days: 2,
      hours: 33,
      minutes: 4,
      seconds: -5,
      milliseconds: 1
    })
    expect(formatTime(t2, 'ddhhmmssms')).toBe('03090355001')
  })
  test('format仅传部分占位符的情况', () => {
    const t = toMilliseconds({
      days: 1,
      hours: 1,
      minutes: 1,
      seconds: 1
    })
    expect(formatTime(t, 'hhss')).toBe('2561')
  })
})
describe('toTimeData', () => {
  test('正确解析timeData', () => {
    const t = 23456
    expect(toMilliseconds(toTimeData(t))).toBe(t)
    const td = {
      days: 2,
      hours: 3,
      minutes: 4,
      seconds: 5,
      milliseconds: 6
    }
    expect(toTimeData(toMilliseconds(td))).toEqual(td)
  })
})
