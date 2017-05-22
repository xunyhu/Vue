<template>
	<header>
		<div class="hlogo">{{ logo }}</div>
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
				navs : [{li:"主页"},{li:"说说"},{li:"相册"},{li:"留言"}],
				logo : ''
			}
		},
		props: ['logo']
	}
</script>