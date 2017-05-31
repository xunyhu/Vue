<template>
	<div id="hrapp">
	    <mu-drawer :open="open"  @close="toggle()">
	      <mu-list  class="hlist">
	      	<div class="login">
	      		<mu-list-item title="Mike Li">
				      <mu-avatar :src="src" slot="leftAvatar"/>
				      <tanc></tanc>
	    		</mu-list-item>
	      		<p class="headportrait">点击头像登入</p>	      		
	      	</div>
	      	<div class="hmenu active hfirst" @click='tab("all")'>
	      		<mu-icon-button icon="home" slot="left"/>
	      		<p>全部</p>
	      	</div>
	      	<div class="hmenu" @click='tab("good")'>
	      		<mu-icon-button icon="flight" slot="left"/>
	      		<p>精华</p>
	      	</div>
	      	<div class="hmenu" @click='tab("share")'>
	      		<mu-icon-button icon="cloud" slot="left"/>
	         	<p>分享</p>
	      	</div>
	      	<div class="hmenu" @click='tab("ask")'>
	      		<mu-icon-button icon="help" slot="left"/>
	      		<p>问答</p>
	      	</div>
	      	<div class="hmenu" @click='tab("job")'>
	      		<mu-icon-button icon="launch" slot="left"/>
	      		<p>招聘</p>
	      	</div>
	      	<div class="hmenu" @click="toggle()" >
	      		<mu-icon-button icon="backspace" slot="left"/>
	        	<p >关闭</p>
	      	</div>
	      	 <p @click='touchs'>
		      	<mu-switch v-model="touch"/> 夜间模式
		     </p>
	      </mu-list>
	    </mu-drawer>
	    <!-- 以上是侧边栏 -->

	    <mu-appbar title="CNode社区" class="title">
		    <mu-icon-button icon="menu" slot="left" @click="toggle()"/>
	    </mu-appbar>
	    <!-- 以上是标题栏 -->

	    <!-- <tanc></tanc> -->

		<router-view></router-view>

	</div>
</template>

<script>
import tanc from '../components/tanC.vue'
export default {
  data () {
    return {
      open: this.$store.getters.showSide,
      docked: true,
      src: require('../images/avatar2.jpg'),
      touch: false,
    }
  },
  methods: {
    toggle () {
      this.open = !this.open
      // console.log(typeof this.$store.getters.showSide)
    },
    tab (type) {
    	var self = this;
    	this.$store.commit('setTab',type);
    	var timer = setInterval(function(){
    		self.toggle();
	    	clearInterval(timer)
    	},1000);

    	//当前元素高亮
    	$('.hmenu').on('click',function(){
    		$(this).addClass('active').siblings().removeClass('active');
    	})
    },
    touchs () {
		$('#hrapp').css({
			background: '#ccc',
			color: '#fff'
		});
    }
  },
  mounted () {
  		this.touchs()
  },
  components: {
  	tanc,
  }
}
</script>
<style scoped lang="scss">
.demo-icon-tip{
  display: inline-block;
  cursor: default;
  position: relative;
}

.demo-tip-setting p{
  display: flex;
  align-items: center;
}

.demo-tip-setting .mu-radio {
  margin-left: 32px;
}
.demo-tip-setting .mu-radio:first-child{
  margin-left: 0;
}
.demo-tip-setting .mu-switch {
  margin-left: 8px;
}
	.title {
		background:#333;
		position:fixed;
		top:0;
	}
	.login {
		width:100%;height:160px;
		background:url('../images/bg1.jpg');
		color:#fff;
		.headportrait {
			color:#fff;
			margin-top:0;
			padding-left:15px;
		}
	}
	.hlist {
		padding:0;
	}
	.hfirst {
		margin-top:5px;
	}
	.hmenu {		
		width:100%;
		overflow:hidden;
		button,p {
			float:left;
			font-size:16px;
			margin:0;
			padding:16px 0;
		}
	}
	.active {
		color:yellowgreen;
		background:#ccc;
	}
</style>