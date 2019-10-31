// 这两个对象 key 的顺序会影响 formatTime 和 toTimeData 的解析
const formatSpecifiers = {
  days: 'dd',
  hours: 'hh',
  minutes: 'mm',
  seconds: 'ss',
  milliseconds: 'ms'
}
const millisecondsIn = {
  days: 60 * 60 * 24 * 1000,
  hours: 60 * 60 * 1000,
  minutes: 60 * 1000,
  seconds: 1 * 1000,
  milliseconds: 1
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

function padZero(str, padRange = 2) {
  return padStart(str + '', padRange, '0')
}

/**
 * 天、小时、分钟、秒、毫秒格式化
 * @param {string} key
 * @param {number} value
 * @returns {string}
 */
function timeFormatter(key, value) {
  // 天、时、分、秒两位，毫秒三位
  if (key === 'milliseconds') {
    return padZero(value, 3)
  } else {
    return padZero(value)
  }
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
  // 注意顺序很重要。要先从大的时间单位开始构造字符串
  entries(formatSpecifiers).forEach(([k, specifier]) => {
    if (includes(result, specifier)) {
      const v = Math.floor(time / millisecondsIn[k])
      time -= v * millisecondsIn[k]
      result = result.replace(specifier, timeFormatter(k, v))
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
  const timeData = {}
  entries(millisecondsIn).forEach(([k, v]) => {
    timeData[k] = Math.floor(time / v)
    time -= timeData[k] * v
  })
  return timeData
}
