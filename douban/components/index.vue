<template>
	<div>
		<router-view></router-view>
		<xfoot></xfoot>
	</div>
</template>

<script>
	import xfoot from "./footer.vue"
	export default {
		components:{
			xfoot
		}
	}
</script>

<style>
</style>