Control count-down using methods

```vue
<template>
  <div>
    <button @click="onClick('start')">
      <count-down :days="1" :autoplay="false" ref="cd" @finish="onFinish" />
    </button>
    <button @click="onClick('pause')">
      pause
    </button>
    <button @click="onClick('reset')">
      reset
    </button>
  </div>
</template>
<script>
export default {
  methods: {
    onClick(m) {
      this.$refs.cd[m]()
    },
    onFinish() {
      console.log('finish')
    }
  }
}
</script>
```
