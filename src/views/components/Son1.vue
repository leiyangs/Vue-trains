<template>
  <div>
    子组件1：{{value}}
    {{$attrs.name}}
    <button @click="change">点击</button>
  </div>
</template>

<script>
export default {
  name: "son1",
  props: {
    mny: {
      type: Number
    },
    value: { // 用v-modle绑定方式，接收到的属性名只能是value
      type: Number
    }
  },
  methods: {
    change() {
      // this.$emit('xxx',200) // 第一种
      // this.$emit('update:mny',200) // 第二种
      this.$emit('input', 200) // 第三种v-modle // 触发的事件只能是input
    }
  }
}
</script>