<template>
	<header>
		<div class="hlogo">{{ logo }}</div>
    <p>{{ title }}  :</p>
		<ul class="nav">
			<li v-for="nav in navs">{{ nav.li }}</li>
		</ul>
	</header>
</template>
<script>
export default {
  name: 'headerDiv',
  data () {
    return {
      navs: [
      { li: '主页' },
      { li: '说说' },
      { li: '相册' },
      { li: '留言' }
      ],
      logo: '',
      title: '我是子组件'
    }
  },
  props: ['logo']
}
</script>
<style scoped>
  .hlogo,p,.nav{
    float: left;
  }
  .nav {
    list-style: none;
    background: #ccc;
    margin: 0 auto;
    width: 500px;
  }
  p {
    margin:0 30px;
  }
  li {
    float: left;
    padding: 5px;
  }
</style>

