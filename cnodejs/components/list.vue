<template>
	<div @click="toggle()" class="hlist">
		<loading v-show='load'></loading>	
		<div class="cell" v-for='item in items'>
	  		<a class="user_avatar pull-left" href="javascript:;">
	    		<img  class="small" :src='item.author.avatar_url' :title="item.author.loginname">
	  		</a>
		    <span class="reply_count pull-left">
		    	<span class="count_of_replies" title="回复数">{{ item.reply_count }}</span>
		        <span class="count_seperator">/</span>
		        <span class="count_of_visits" title="点击数">{{ item.visit_count }}</span>
		    </span>  
		  	<a class="last_time pull-right" href="javascript:;">
		    	<!-- <img class="user_small_avatar" src=""> -->
		    	<span class="last_active_time">{{ item.last_reply_at | timestr }}</span>
		  	</a>
	    	<div class="topic_title_wrapper">    
				<span :class="{ 'put_top': item.good || item.top, 'topiclist-tab': !(item.good || item.top) }">
					{{ item.top ? '置顶' : item.good ? '精华' : item.tab == "ask" ? '问答' : '分享'}}
				</span>
		    	<a class="topic_title" :href='"#/detail/"+item.id'   title="cnpm@5 beta 测试招募">{{ item.title }}</a>
	  		</div>
		</div>
	</div>	
</template>
<script>
	import loading from './loading.vue'
	import timeago from 'timeago.js'
	export default {
		data() {
			return {
				msg : "我是列表页",
				// items: [],
				load: '',
				limit: 15,
				page: 1,
			}
		},
  		filters: {
  			timestr(time){
  				return (function(time){
  					 var timeagoInstance = new timeago();
  					 var str=timeagoInstance.format(time,'zh_CN');
  					 return str;
  				})(time)
  			}
  		},
		computed: {
			tab : function() {
				return this.$store.getters.selectTab;
			},
			items : function() {
				return this.$store.getters.listiTems;
			}
		},
		methods: {
			toggle () {
				this.$store.commit('hideSide',!this.$store.getters.showSide);
			}
		},
		mounted () {
			this.$store.commit('setTab','all');

			// //加载更多
			// var self = this;

			// $('.hlist').on('scroll',function(){
			// 	self.scrollTop=$('.hlist')[0].scrollTop;
			// 	console.log(self.scrollTop)
			// 	console.log($('.hlist')[0].scrollHeight)
			// 	console.log($('.hlist').height())
			// 	if (self.scrollTop + $('.hlist')[0].scrollHeight <= $('.hlist').height() -50) {
			// 		var tab = this.tab;
			// 		var num = this.limit;
			// 		this.load = true;
			// 		$.ajax({
			// 			type: "GET",
			// 			url: "https://cnodejs.org/api/v1/topics?page="+ this.page +"limit="+ num +"&tab="+tab,
			// 			dataType: "json",
			// 			success: function(data) {
			// 				self.items.conact(data.data);
			// 				this.load = false;
			// 			}.bind(this)
			// 		})
			// 	}
			// })
		},
		components: {
			loading
		}
	}
</script>
<style scoped lang="scss">
	.hlist {
		margin-top:56px;
	}
	.cell {		
		padding-right: 10px;
	    background: #fff;
	    border-top: 1px solid #f0f0f0;
	    position: relative;
	    padding: 10px 0 10px 10px;
	    font-size: 14px;
	    overflow: hidden;
	    line-height: 2em;
	    a {
	    	color: #778087;
	    }
	    img {
	    	width: 30px;
	    	vertical-align: middle;
	    }
	    .topic_title {
	    	color: #333;
	    	max-width:70%;
	    	display:inline-block;
	    	overflow: hidden;
    		white-space: nowrap;
	    	text-overflow: ellipsis;
	    }
	}
	.cell:nth-child(1) {
    	border-top: none;
    }
    .reply_count {
	    width: 70px;
	    display: inline-block;
	}
	@media (max-width: 979px){
		.reply_count {
		    position: absolute;
		    bottom: 0;
		    left: 85px;
		    text-align: left;
		    line-height: 2em;
		    font-size: 10px;
		}
	}
	.count_of_replies {
   	 	color: #9e78c0;
	}
	.count_seperator {
	    margin: 0 -3px;
	    font-size: 10px;
	}
	.cell .count_of_visits {
	    font-size: 10px;
	    color: #b4b4b4;
	}
	@media (max-width: 979px){
		.last_time {
		    position: absolute;
		    bottom: 0;
		    right: 10px;
		    font-size: .8em;
		}
	}
	.last_time .user_small_avatar {
	    height: 18px;
	    width: 18px;
	    vertical-align: middle;
	    margin-right: .5em;
	    border-radius: 3px;
	}	
	@media (max-width: 979px) {
		.last_time img {
			display: none;
		}
	}
    .pull-left {
	    float: left;
	}
	.pull-right {
	    float: right;
	}
	.last_active_time {
	    text-align: right;
	    min-width: 50px;
	    display: inline-block;
	    white-space: nowrap;
	}
	/*置顶*/
	.topic_title_wrapper {
	    white-space: nowrap;
	}
	@media (max-width: 979px) {
		.topic_title_wrapper {
		    padding-left: 40px;
		}
	}
	.put_good, .put_top {
	    background: #80bd01;
	    padding: 2px 4px;
	    border-radius: 3px;
	    -webkit-border-radius: 3px;
	    color: #fff;
	    font-size: 12px;
	}
	.topiclist-tab {
	    background-color: #e5e5e5;
	    color: #999;
	    padding: 2px 4px;
	    border-radius: 3px;
	    -webkit-border-radius: 3px;
	    font-size: 12px;
	}

</style>