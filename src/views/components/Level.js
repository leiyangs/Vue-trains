// 函数式组件
export default {
  render(h) {
    return h("h" + this.type, {}, this.$slots.default) // $slots用来分发插槽内容
  },
  props: {
    type: Number
  }
}
// jsx 方式更便于阅读
// export default {
//   render(h) {
//     const tag = "h" + this.type;
//     return <tag>{this.$slots.default}</tag>;
//   },
//   props: {
//     type: {
//       type: Number
//     }
//   }
// };