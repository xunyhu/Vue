<template>
	<div class="content">
		<div v-show='load' class="load">
		  	<mu-circular-progress :size="60" :strokeWidth="5" color="plum"/>
		</div>
		<div class="poster"><img :src="film.images.large"/></div>
		<div class="message">
			<div class="info">
				<h2 v-text='film.title'></h2>
				<p>
					<span v-text='film.year+" / "'></span>
					<span v-for='key in film.genres' v-text='key+" / "'></span>
				</p>
				<p><span>原名：</span><span v-text='film.original_title'></span></p>
				<p><span>上映时间：</span><span v-text='film.mainland_pubdate'></span></p>
				<p><span>片长：</span><span v-text='film.durations[0]'></span></p>
			</div>
			<div class="intro">
				<p>简介</p>
				<a v-html="film.summary" :href="film.alt" class="color flow"></a>
				<span @click="show" class="show">展开</span>
			</div>
			<div class="rating">
				<span>豆瓣评分</span>
				<h2 v-text='film.rating.average'></h2>
				<span>多少人想看</span>
				<p v-text='film.wish_count'></p>
			</div>
		</div>
		<div class="center">
			<a :href="'#/detail/'+film.id+'/comments'">短评</a>
			<a :href="'#/detail/'+film.id+'/reviews'">影评</a>
		</div>
		<div class="issue">
			<div class="write" @click="bool=!bool">写短评</div>
			<textarea autofocus name="issue" rows="3" cols="36" v-show='bool' v-model='text'></textarea>
			<div class="send" @click="send()" v-show='bool'>发表</div>
		</div>
		<div class="local"></div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				film: {
					images:{
						large:'',
					},
					alt:'',
					title:'',
					year:'',
					genres:'',
					original_title:'',
					mainland_pubdate:'',
					durations:'',
					rating:{
						average:''
					},
					wish_count:'',
					summary:'',
					id:'',
				},
				load: true,
				flow:false,
				bool:false,
				text:'',
				username:'',
				now:'',
			}
		},
		mounted() {
			// 获取用户
			var cookie = document.cookie.split('; ');
			console.log(cookie)
			cookie.map(function(item) {
				item = item.split('=')
				if(item[0] === 'username')
					this.username = item[1]
			}.bind(this))
						
			// 网上数据
			var src = window.location.hash.substr(8).replace(/\/comments/,'')
			console.log(src)
			$.ajax({
				type: 'get',
				url: 'http://api.douban.com/v2/movie/subject/' + src,
				data: {
					apikey: '0b2bdeda43b5688921839c8ecb20399b',
				},
				dataType: 'jsonp',
				success: function(data) {
					console.log(data)
					this.film = data
					this.load = false
				}.bind(this)
			})
			
			this.timer()
		},
		methods:{
			// 展开功能
			show(){
				$('.color').removeClass().addClass('color').siblings('.show').hide()
			},
			// 刷新时间
			timer(){
				setInterval(function(){
					var date = new Date().toLocaleDateString().replace(/\//gi,'-')
					var time = new Date().toTimeString().slice(0,8)
					this.now = date +' '+ time
				}.bind(this),1000)
			},
			// 模拟数据
			send(){
				$.get(
					'http://localhost/project/v-douban/php/comments.php',
					{username:this.username,text:this.text,now:this.now},
					function(data){
						data = JSON.parse(data)
						console.log(data)
						$('.local').html(data.map(item=>{
							return `
							<div class="info">
								<a class="user"><img src="" alt="" /></a>
								<div class="text">
									<p>${item.username}</p>
									<p>${item.text}</p>
									<p>${item.now}</p>
								</div>
							</div>`
						}).reverse().join(''))
					}.bind(this)
				)
			}
		}
	}
</script>

<style scoped lang="scss">
	$color: #40ff85;
	h2,p{
		margin: 0;
	}
	.load {
		position: fixed;
		top: 50%;
		left: 50%;
		margin: -30px 0 0 -30px;
	}	
	.poster {
		display: block;
		padding: 20px;
		text-align: center;
		img {
			width: 150px;
		}
	}
	
	.message {
		padding: 20px;
		position: relative;
		.info{
			width: 60%;
		}
		.intro{
			.show{
				position: absolute;
				bottom: 18px;
				right: 24px;
				color: $color;
			}
			.color{
				color: #000;
			}
			.flow{
				overflow: hidden;  
		    	text-overflow: ellipsis;  
		    	display: -webkit-box;  
		   		-webkit-line-clamp: 3;  
		    	-webkit-box-orient: vertical;
		    	position: relative; 
				&::after{
				  content:'...';
				  position: absolute;
				  right: 0;
				  bottom: 0;
				  width: 38px;
				  height: 21px;
				  background-color: #fff;
				}
			}
		}
		
		.rating {
			position: absolute;
			top: 25px;
			right: 35px;
			width: 100px;
			padding: 10px 0;
			text-align: center;
			background: #eee;
		}
	}

	.center{
		background: #eee;
		a{
			display: inline-block;
			width: 49.5%;
			text-align: center;
			line-height: 50px;
		}
	}
	.issue{
		margin: 10px 0;
		padding: 10px 20px;
		border-bottom: 1px solid $color;
		.write{
			text-align: center;
			line-height: 24px;
			color: $color;
			width: 25%;
			margin-left: 10%;
		}
		textarea{
			margin: 0 10%;
		}
		.send{
			width: 16%;
			margin-left: 76%;
			text-align: center;
			line-height: 25px;
			background: $color;
			color: #fff;			
		}
	}
	.local{
		margin: 20px;
		.info{
			border-bottom: 1px solid #eee;
			margin-bottom: 10px;
			.user{
				position: absolute;
				img{
					border-radius: 50%;
				}
			}
			.text{
				position: absolute;
				left: 20%;
				width: 80%;
				margin-left: 10px;
			}
		}
	}
</style>