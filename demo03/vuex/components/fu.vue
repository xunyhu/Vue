<template>
	<div>
		<header :logo="logoMsg"></header>
	</div>
</template>
<script>
	import zi from './zi.vue'
	export default {
		data() {
			return {
				logoMsg: "xunyihu"
			}
		},
		components : {
			zi
		}
	}
</script>