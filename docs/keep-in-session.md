```vue
<template>
  <div>
    <count-down :seconds="59" :hours="1" keep-in-session="my_keep" ref="cd" />
    <button @click="onClick('start')">start</button>
    <button @click="onClick('pause')">pause</button>
    <button @click="onClick('reset')">reset</button>
  </div>
</template>
<script>
export default {
  methods: {
    onClick(m) {
      this.$refs.cd[m]()
    }
  },
}
</script>
```