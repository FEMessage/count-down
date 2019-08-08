<template>
  <span>
    <slot v-bind="countdownData">{{countdownFormated}}</slot>
  </span>
</template>

<script>
import {toMilliseconds, formatTime, toTimeData} from './util'

export default {
  name: 'count-down',
  props: {
    /**
     * remain days
     */
    days: {
      type: Number,
      default: 0
    },
    /**
     * remain hours
     */
    hours: {
      type: Number,
      default: 0
    },
    /**
     * remain minutes
     */
    minutes: {
      type: Number,
      default: 0
    },
    /**
     * remain seconds
     */
    seconds: {
      type: Number,
      default: 0
    },
    /**
     * whether autoplay or not
     */
    autoplay: {
      type: Boolean,
      default: true
    },
    /**
     * Output format.
     * Default: 'dd 天 hh 时 mm 分 ss 秒'. These dd, hh, mm & ss specifiers are optional.
     * The default value will change according to whether there are days, hours, minutes & seconds,
     * e.g., if user just pass minutes, then the default value will be 'mm 分 ss 秒'
     *
     * 输出格式。
     * 默认值：'dd 天 hh 时 mm 分 ss 秒'。dd、hh、mm和ss标识符都是可选的。
     * 默认值会根据是否传入days, hours, minutes, seconds而变化，
     * 比如用户只传了minutes，那么默认值就变为'mm 分 ss 秒'
     */
    format: {
      type: String,
      default: ''
    },

    /**
     * keep countdowm time in session
     */
    keepInSession: {
      type: String
    }
  },
  data() {
    return {
      elapsed: 0,
      rafId: null
    }
  },
  computed: {
    time() {
      return toMilliseconds(this)
    },
    formatComputed() {
      if (this.format) return this.format

      const formatDefault = ['dd 天', 'hh 时', 'mm 分', 'ss 秒']
      if (!this.days) {
        formatDefault.shift()
        if (!this.hours) {
          formatDefault.shift()
          if (!this.minutes) formatDefault.shift()
        }
      }
      return formatDefault.join(' ')
    },
    countdown() {
      return Math.max(0, this.time - this.elapsed)
    },
    countdownFormated() {
      return formatTime(this.countdown, this.formatComputed)
    },
    countdownData() {
      return toTimeData(this.countdown)
    }
  },
  mounted() {
    if (this.autoplay) this.start()
    window.addEventListener('unload', this.setSession)
    if (sessionStorage.getItem(this.keepInSession)) {
      const session = JSON.parse(sessionStorage.getItem(this.keepInSession))
      const mountTime = session.rafId
        ? Number(new Date()) - session.unloadTime
        : 0
      this.elapsed = this.time - (session.countdown - mountTime)
    }
  },
  beforeDestroy() {
    cancelAnimationFrame(this.rafId)
    this.setSession()
    window.removeEventListener('unload', this.setSession)
  },
  methods: {
    /**
     * 开始计时
     * @public
     */
    start() {
      if (this.rafId) return
      let last
      const step = () => {
        this.rafId = requestAnimationFrame(timestamp => {
          if (last) this.elapsed += Math.round(timestamp - last)
          last = timestamp
          if (this.countdown > 0) step()
          else {
            this.rafId = null
            /**
             * 计时结束事件
             */
            this.clearSession()
            this.$emit('finish')
          }
        })
      }
      step()
    },
    /**
     * 暂停计时
     * @public
     */
    pause() {
      cancelAnimationFrame(this.rafId)
      this.rafId = null
    },
    /**
     * 重置计时，需要调用start来再次启动
     * @public
     */
    reset() {
      this.pause()
      this.elapsed = 0
    },
    setSession() {
      if (this.keepInSession) {
        window.sessionStorage.setItem(
          this.keepInSession,
          JSON.stringify({
            countdown: this.countdown,
            unloadTime: Number(new Date()),
            rafId: this.rafId
          })
        )
      }
    },
    clearSession() {
      window.sessionStorage.removeItem(this.keepInSession)
    }
  }
}
</script>

<style>
</style>
