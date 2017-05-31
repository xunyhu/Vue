<template>
	<div class="toTop" @click="toTop" v-show="show">
		<mu-icon value="publish"/>
	</div>
</template>
<script>
	export default {
		data () {
	      	return {
	      		show:false,
	      		target:null
	      	}
    	},
    	methods:{
			toTop(){
				$(window).scrollTop(0);
				this.show = false;
				return false;
			}
	    },
	    mounted () {
            $(window).on('scroll', () => {
                if ($(window).scrollTop() > 400) {
                    this.show = true;
                } else {
                    this.show = false;
                }
            });
	    }
	}
</script>
<style scoped lang="scss">
	.toTop{
		width: 50px;
		height: 50px;
		background: rgba(3,169,255,.8);
		position: fixed;
		bottom: 40px;
		right: 40px;
		border-radius: 100%;
		color: #fff;
		text-align: center;
		line-height: 78px;
		z-index: 5555;
		.mu-icon{
			font-size: 40px;
		}
	}

</style>