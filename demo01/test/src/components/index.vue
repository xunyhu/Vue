<template>
	<div>
		<h1>我是组件index</h1>
		<p>{{msg}}</p>
	</div>
</template>
<script type="text/javascript">
	export default {
		name : "index",
		data () {
			return {
				msg : "xunyhu@163.com"
			}
		}
	}
</script>
<style scoped>
	p {
		text-align: center;
	}
</style>