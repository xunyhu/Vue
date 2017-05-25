<template>
  <div id="app">
      <HeaderDiv :logo="logoMsg"></HeaderDiv>
  </div>
</template>

<script>
import HeaderDiv from './components/zi.vue'
export default {
  name: 'app',
  data () {
    return {
      logoMsg: '我是父组件'
    }
  },
  components: {
    HeaderDiv
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
