<template>
	<div class="loading">
		<img :src='src' >
	</div>
</template>
<script>
	export default {
		data () {
			return {
				src: require('../images/loading.gif')
			}
		}
	}
</script>
<style scoped lang="scss">
	.loading {
		position:absolute;
		top:0;
		right:0;
		left:0;
		bottom:0;
		img {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			-webkit-transform: translate(-50%,-50%);
		}
	}
</style>