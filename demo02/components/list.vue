<template>
	<div>
		<h1>{{msg}}</h1>
		<p>
			<a href="#/list/aa">子页面一</a>
			<a href="#/list/bb">子页面二</a>
		</p>
		<router-view></router-view>
	</div>
</template>
<script>
	module.exports = {
		data() {
			return {
				msg : "我是list页面"
			}
		}
	}
</script>
<style scoped lang="scss">
	h1 {
		color : yellow;
	}
	p {
		text-align:center;font-size:20px;height:50px;background:#ccc;line-height:50px;
		a{
			font-size:20px;
		}
	}
</style>