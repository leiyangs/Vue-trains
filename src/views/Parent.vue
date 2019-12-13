<template>
<!-- props $emit -->
  <div class="home">
    父组件： {{mny}}
    <!-- <Son1 :mny="mny" @xxx="change"></Son1> -->
    <!-- <Son1 :mny.sync="mny"></Son1> -->
    <Son1 ref="son1" v-model="mny" name="笑笑"></Son1>
    <Level :type="1">呵呵</Level>
    <Level :type="2">呵呵</Level>
    <Level :type="3">呵呵</Level>
    <Level :type="4">呵呵</Level>
    <Level :type="5">呵呵</Level>
  </div>
</template>

<script>
import Son1 from "./components/Son1"
// import Level from "./components/Level" // 模板组件不便于扩展
import Level from "./components/Level.js" // render 函数便于扩展
export default {
  data () {
    return {
      mny: 100
    }
  },
  components: {
    Son1,
    Level
  },
  methods: {
    change(mny) {
      this.mny = mny;
    }
  },
  mounted () {
    console.log(this.$refs.son1)
  }
}
</script>
