<template>
	<section>
		<div class="login">
			<label>
				<span>用户名：</span>
				<input v-model="username" @change="setUser">
			</label>
		</div>
	</section>
</template>
<script>
  export default {
  	name: 'login',
    data () {
  	  return {
  		username: ''
  	  }
    },
    methods: {
  	  setUser: function() {
  		this.$emit('transferUser',this.username)
  	  }
    }
  }
</script>