<template>
	<div>
		<img :src="src" alt="">
	</div>
</template>
<script>
	export default {
		data() {
			return {
				src : require("./images/1.jpg")
			}
		}
	}
</script>