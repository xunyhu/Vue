<template>
	<div class="content">
		<h1>欢迎加入豆瓣</h1>
		<div>
			<mu-text-field v-model="username" hintText="手机号码/邮箱"id="username" /><br/>
			<mu-text-field v-model="password" hintText="密码" id="password"/><br/>
			<mu-text-field v-model="nick" hintText="昵称" id="nick"/><br/>
		</div>
		<p class="btn" @click="ok()">提交</p>
		<p class="res" v-show="bool">用户注册成功，正在跳转...</p>
	</div>
</template>

<script>
	export default {
		data (){
			return {
				username:'',
				password:'',
				nick:'',
				bool:false,
			}
		},
		methods:{
			ok(){
				$.post(
					'http://localhost/project/v-douban/php/register.php',
					{username:this.username,password:this.password},
					function(data){
						if(data) {
							this.bool = true
							console.log(data)
							var now = new Date();
							now.setDate(now.getDate()+3);
							document.cookie = 'username=' + data + ';expires=' + now + ';path=/'
							setTimeout(()=>{
								window.location.href = "#/user"
							},1000)
						}else {
							alert('用户名已被注册')
						}
				}.bind(this))
			},
		},
		mounted (){
			
		}
	}
</script>
	
<style scoped lang="scss">
	.content{
		padding: 20px;
		text-align: center;
		&>div{
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
		color: #40ff85;
	}
</style>