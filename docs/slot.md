Use timeData inside slot

```vue
<template>
  <count-down v-bind="$data" @finish="finish">
    <template v-slot="props">
      {{ props.days }}d
      {{ props.hours }}:
      {{ props.minutes }}:
      {{ props.seconds + '.' + props.milliseconds }}
    </template>
  </count-down>
</template>

<script>
export default {
  data() {
    return {
      days: 2,
    }
  },
  methods: {
    finish() {
      console.log('finish')
    }
  }
}
</script>
```
