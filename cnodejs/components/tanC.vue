<template>
<div class="tanc">
  <mu-raised-button label="登入" @click="open"/>
  <mu-dialog :open="dialog" title="登入" @close="close">
    Access Token:
    <input type="text" >
    <!-- <mu-flat-button slot="actions" @click="close" primary label="取消"/> -->
    <mu-flat-button slot="actions" primary @click="close" label="确定"/>
  </mu-dialog>
</div>
</template>

<script>
export default {
  data () {
    return {
      dialog: false
    }
  },
  methods: {
    open () {
      this.dialog = true
    },
    close () {
      this.dialog = false
    }
  }
}
</script>
<style scoped>
    .tanc {
      margin-top: 10px;
      position: relative;
      left: -58px;
      top: 46px;
    }
</style>