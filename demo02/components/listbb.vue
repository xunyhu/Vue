<template>
	<div>
		<img :src="src" alt="">
	</div>
</template>
<script>
	module.exports = {
		data() {
			return {
				src : require("./images/2.jpg")//需要加一个'./'来表示当前目录
			}
		}
	}
</script>
<style>
	
</style>