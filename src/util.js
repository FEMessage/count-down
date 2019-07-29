// 这两个对象 key 的顺序会影响 formatTime 和 toTimeData 的解析
const formatSpecifiers = {
  days: 'dd',
  hours: 'hh',
  minutes: 'mm',
  seconds: 'ss'
}
const secondsIn = {
  days: 60 * 60 * 24,
  hours: 60 * 60,
  minutes: 60,
  seconds: 1
}

/**
 * 功能与 Object.entries 相同
 */
function entries(obj) {
  return Object.keys(obj).map(k => [k, obj[k]])
}

/**
 * 功能与 String.prototype.includes 相同
 */
function includes(str, v) {
  return str.indexOf(v) > -1
}

/**
 * 功能与 String.prototype.padStart 相同
 */
function padStart(str, len, v) {
  while (str.length < len) str = v + str
  return str
}

function padZero(str) {
  return padStart(str + '', 2, '0')
}

export function toMilliseconds({
  days: d = 0,
  hours: h = 0,
  minutes: m = 0,
  seconds: s = 0,
  milliseconds: ms = 0
} = {}) {
  return ms + 1000 * (s + 60 * (m + 60 * (h + 24 * d)))
}

/**
 * 按照format格式来填入时间
 * @param {number} time - 剩余时间毫秒数
 * @param {string} format - 格式字符串
 */
export function formatTime(time, format) {
  let result = format
  time = Math.ceil(time / 1000)
  // 注意顺序很重要。要先从大的时间单位开始构造字符串
  entries(formatSpecifiers).forEach(([k, specifier]) => {
    if (includes(result, specifier)) {
      const v = Math.floor(time / secondsIn[k])
      time -= v * secondsIn[k]
      result = result.replace(specifier, padZero(v))
    }
  })
  return result
}

/**
 * 将毫秒数解析为timeData
 * @param {number} time - 剩余时间毫秒数
 * @return 数据对象，包含days, hours, minutes, seconds & milliseconds字段
 */
export function toTimeData(time) {
  const timeData = {milliseconds: time % 1000}
  time /= 1000
  entries(secondsIn).forEach(([k, v]) => {
    timeData[k] = Math.floor(time / v)
    time -= timeData[k] * v
  })
  return timeData
}
