<template>
	<div>
		<p>主页</p>
		<p>{{msg}}</p>
	</div>
</template>
<script>
	module.exports = {
		data() {
			return {
				msg : "xunyihu@163.com"
			}
		}
	}
</script>
<style scoped lang="scss">
	div{
		width: 100%;height: 100%;
		p {
			text-align:center;font-size:20px;
		}
	}

</style>