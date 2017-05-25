<template>
	<div>
		<!-- <p>{{ msg }}</p> -->
		<div v-html="html" class="markdown"></div>
	</div>
	<!-- <article class="panel">
    <div class="panel-header article-header">
      <h2>
        <span class="top" v-if="topic.top">置顶</span>
        <span class="top" v-else v-if="topic.good">精华</span>
        {{ topic.title }}
      </h2>
      <div class="info">
        <span>发布于{{ topic.create_at | timeToNow }}</span>
        <span>作者{{ topic.author.loginname }}</span>
        <span>{{ topic.visit_count }}次浏览</span>
        <span>来自 {{ topic.tab | transTab }}</span>
        <template v-if="token">
          <a href="#" class="btn btn-success" v-if="!inCollection" @click.prevent.stop="collect">收藏</a>
          <a href="#" class="btn btn-failure" v-else @click.prevent.stop="deCollect">取消收藏</a>
        </template>
      </div>
    </div>
    <div class="inner padding">
      <div class="markdown-body">
        {{{ topic.content }}}
      </div>
    </div> -->

  </article>
</template>
<script>
	export default {
		data () {
			return {
				msg: "我是详情页",
				html: '',
			}
		},
		methods: {
			getData(){
                var id=this.$route.params.id;
                console.log(id);
                var self=this;
                $.ajax({
                    url:"https://cnodejs.org/api/v1/topic/"+id,
                                  
                    success:function(data){
                        //console.log(data.data)
                        // self.topic = data.data;
                        self.html=data.data.content;
                    }
                })
            }
		},
		mounted () {
			this.getData();
		}
	}
</script>
<style scoped lang='scss'>
	@import '../lib/github-markdown.css'
</style>