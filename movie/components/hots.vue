<template>
	<div>
		<header>
			<span>广州</span>
			<input type="text" placeholder="电影/电视剧/影人"/>
		</header>
		<nav>
			<a href="#/index/hots/played">正在热映</a>
			<a href="#/index/hots/prevue">即将上映</a>
		</nav>
		<main>
			<router-view></router-view>
		</main>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				bottomNav: 'hots'
			}
		},
		mounted() {
			$('main').css({top:$('header').outerHeight()+$('nav').outerHeight()})
		}
	}
</script>

<style scoped lang="scss">
	header{
		padding:5px 5px;
		line-height: 30px;
		background: #40ffb1;
		position: fixed;
		top: 0px;
		left: 0px;
		right: 0px;
		span{
			display: inline-block;
			width: 15%;
			text-align: center;
			color: #fff;
		}
		input{
			width: 75%;
			border-radius: 5px;
			padding: 1px 5px;
			background: #eee;
		}
	}
	
	nav{
		background: #fff;
		position: fixed;
		top: 46px;
		left: 0;
		right: 0;
		border-bottom: 1px solid #ddd;
		a{
			display: inline-block;
			width: 49.5%;
			text-align: center;
			line-height: 50px;
		}
	}
	
	main{
		position: absolute;
		bottom: 60px;
		z-index: -1;
	}
</style>