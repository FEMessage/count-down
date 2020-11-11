## 在 TypeScript 中指定组件的类型

```html
<script lang="ts">
// 需要引入这个
// import { CountDownType } from '@femessage/count-down'
export default {
  mounted() {
    (this.$refs.countDown as CountDownType).start()
  },
}
</script>
```
