<template>
	<footer>
			<mu-paper>
				<mu-bottom-nav :value="bottomNav" @change="handleChange">
					<mu-bottom-nav-item value="hots" title="热映" icon="event seat" />
					<mu-bottom-nav-item value="find" title="找片" icon="visibility" />
					<mu-bottom-nav-item value="user" title="我的" icon="face" />
				</mu-bottom-nav>
			</mu-paper>
		</footer>
</template>

<script>
	export default {
		data() {
				return {
					bottomNav: 'hots'
				}
			},
		methods: {
			handleChange(val) {
				this.bottomNav = val
				switch(val){
					case 'hots':
					window.location.href="#/index/hots";
					break;
					case 'find':
					window.location.href="#/index/find";
					break;
					case 'user':
					window.location.href="#/index/user";
					break;
				}
			}
		}
	}
	
</script>

<style>
	footer {
		position: fixed;
		bottom: 0px;
		width: 100%;
	}
</style>