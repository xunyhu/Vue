<template>
	<div class="content">
		<h1>欢迎来到豆瓣</h1>
		<div>
			<mu-text-field v-model="username" hintText="手机号码/邮箱" id="username" /><br/>
			<mu-text-field v-model="password" hintText="密码" id="password"/><br/>
		</div>
		<div>
			<p class="btn" @click="login()">登录</p>
			<p class="res"><a href="#/register">注册豆瓣</a></p>
		</div>
	</div>
</template>

<script>
	export default {
		data (){
			return {
				username:'',
				password:'',
			}
		},
		methods:{
			login(){
				/*$.ajax({
					type: 'get',
					url: 'http://localhost/project/v-douban/php/login.php',
					dataType: 'jsonp',
					success: function(data) {
						console.log(data)
					}.bind(this)
				})*/
				$.post(
					'http://localhost/project/v-douban/php/login.php',
					{username:this.username,password:this.password},
					function(data){
						console.log(data)
						if(data) {
							var now = new Date();
							now.setDate(now.getDate()+3);
							document.cookie = 'username=' + data + ';expires=' + now + ';path=/'
							window.location.href = "/#/user"
						}else {
							alert('用户名不存在/密码不正确')
						}
				})
			}
		},
		mounted (){
			
		}
	}
</script>
	
<style scoped lang="scss">
	.content{
		padding: 20px;
		&>div{
			text-align: center;
			margin-bottom: 20px;
		}
	}
	h1{
		margin: 100px 0;
		text-align: center;
		font-style: normal;
		color: #40ff85;
	}
	.btn{
		width: 100%;
		line-height: 50px;
		color: #fff;
		background: #40ff85;
		border-radius: 10px;
	}
	.res{
		width: 100%;
		a{
			display: inline-block;
			line-height: 30px;
			color: #40ff85;
		}
	}
</style>