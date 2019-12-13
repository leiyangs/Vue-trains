### 全面学习Vue

- 组件通信
  - 父组件给子组件传值 props
  
    ```
      父组件
      <Son1 :mny="mny"></Son1>
      子组件
      props: {
        mny: {
          type: Number
        }
      }
    ```
    
  - 子组件改变父组件值 $emit  

    ```
      第一种
      父组件
      <Son1 :mny="mny" @xxx="change"></Son1>
      子组件
      this.$emit('xxx',200)

      第二种 .sync
      父组件
      <Son1 :mny.sync="mny></Son1>
      子组件
      this.$emit('update.mny',200)

      第三种 v-modle
      // 父组件
      <Son1 :mny.sync="mny></Son1>
      子组件
      value: { // 用v-modle绑定方式，接收到的属性名只能是value
        type: Number
      }
      this.$emit('input',200) // 触发的事件只能是input
    ```

- $attrs、$listeners
  - $attrs 批量向下传入属性

  ```
    <Son1 name="笑笑"></Son1>
    儿子1: {{$attrs.name}}
  ```

   - $listeners 批量向下传入方法

  ```
    <Son2 age="10" @click="()=>{this.mny = 500}"></Son2>
    <!-- 可以在son2组件中使用listeners属性,可以将方法继续向下传递 -->
    <Grandson2 v-bind="$attrs" v-on="$listeners"></Grandson2>

    <button @click="$listeners.click()">更改</button>
  ```